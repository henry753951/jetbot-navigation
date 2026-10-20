import React, { useEffect, useRef, useState } from 'react'
import { createRoot } from 'react-dom/client'
import * as THREE from 'three'
import './style.css'

const initialState = {
  mode: 'connecting',
  status: 'Connecting to JetBot…',
  pose: [0, 0, 0],
  path: [],
  motors: [0, 0],
  camera: { available: false, width: 0, height: 0 },
  host: '—',
  uptime_s: 0,
  cpu_temp_c: null,
  memory_percent: null,
}

function fmt(value, digits = 2) {
  return Number.isFinite(value) ? Number(value).toFixed(digits) : '—'
}

function RobotScene({ state }) {
  const mount = useRef(null)
  const sceneRef = useRef(null)

  useEffect(() => {
    const element = mount.current
    const scene = new THREE.Scene()
    scene.background = new THREE.Color('#08131f')
    scene.fog = new THREE.Fog('#08131f', 7, 22)
    const camera = new THREE.PerspectiveCamera(48, 1, 0.01, 100)
    camera.position.set(3.8, 3.3, 4.8)
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.shadowMap.enabled = true
    element.appendChild(renderer.domElement)

    scene.add(new THREE.HemisphereLight('#b8e7ff', '#122233', 2.2))
    const key = new THREE.DirectionalLight('#a5d8ff', 2.7)
    key.position.set(3, 6, 2)
    key.castShadow = true
    scene.add(key)

    const floor = new THREE.Mesh(
      new THREE.PlaneGeometry(24, 20),
      new THREE.MeshStandardMaterial({ color: '#0d2230', roughness: 0.92 })
    )
    floor.rotation.x = -Math.PI / 2
    floor.receiveShadow = true
    scene.add(floor)
    const grid = new THREE.GridHelper(20, 20, '#1e7384', '#143447')
    grid.position.y = 0.006
    scene.add(grid)

    const robot = new THREE.Group()
    const body = new THREE.Mesh(
      new THREE.BoxGeometry(0.62, 0.24, 0.48),
      new THREE.MeshStandardMaterial({ color: '#efb54d', metalness: 0.25, roughness: 0.5 })
    )
    body.position.y = 0.23
    body.castShadow = true
    robot.add(body)
    const top = new THREE.Mesh(
      new THREE.BoxGeometry(0.38, 0.08, 0.34),
      new THREE.MeshStandardMaterial({ color: '#d8f2f3', emissive: '#183940', roughness: 0.35 })
    )
    top.position.set(0, 0.39, -0.02)
    top.castShadow = true
    robot.add(top)
    const wheelMaterial = new THREE.MeshStandardMaterial({ color: '#172532', roughness: 0.65 })
    for (const x of [-0.36, 0.36]) {
      const wheel = new THREE.Mesh(new THREE.CylinderGeometry(0.13, 0.13, 0.08, 24), wheelMaterial)
      wheel.rotation.z = Math.PI / 2
      wheel.position.set(x, 0.14, 0)
      wheel.castShadow = true
      robot.add(wheel)
    }
    const arrow = new THREE.Mesh(
      new THREE.ConeGeometry(0.1, 0.28, 3),
      new THREE.MeshStandardMaterial({ color: '#33e1d2', emissive: '#0b4b4b' })
    )
    arrow.rotation.x = Math.PI / 2
    arrow.position.set(0, 0.29, -0.34)
    robot.add(arrow)
    scene.add(robot)

    const frustum = new THREE.LineSegments(
      new THREE.BufferGeometry(),
      new THREE.LineBasicMaterial({ color: '#ee6aab', transparent: true, opacity: 0.75 })
    )
    scene.add(frustum)
    const trail = new THREE.Line(
      new THREE.BufferGeometry(),
      new THREE.LineBasicMaterial({ color: '#33e1d2', transparent: true, opacity: 0.85 })
    )
    scene.add(trail)

    const resize = () => {
      const width = element.clientWidth || 1
      const height = element.clientHeight || 1
      camera.aspect = width / height
      camera.updateProjectionMatrix()
      renderer.setSize(width, height, false)
    }
    const observer = new ResizeObserver(resize)
    observer.observe(element)
    resize()

    let animation
    const render = () => {
      animation = requestAnimationFrame(render)
      renderer.render(scene, camera)
    }
    render()
    sceneRef.current = { scene, camera, renderer, robot, frustum, trail }
    return () => {
      cancelAnimationFrame(animation)
      observer.disconnect()
      renderer.dispose()
      element.removeChild(renderer.domElement)
      sceneRef.current = null
    }
  }, [])

  useEffect(() => {
    const current = sceneRef.current
    if (!current) return
    const { robot, frustum, trail, camera } = current
    const [x, y, heading] = state.pose || [0, 0, 0]
    robot.position.set(x, 0, -y)
    robot.rotation.y = -heading
    const cameraTarget = new THREE.Vector3(x, 0, -y)
    camera.position.lerp(new THREE.Vector3(x + 3.1, 3.0, -y + 3.8), 0.08)
    camera.lookAt(cameraTarget)

    const path = (state.path || []).map(([px, py]) => new THREE.Vector3(px, 0.025, -py))
    trail.geometry.dispose()
    trail.geometry = new THREE.BufferGeometry().setFromPoints(path.length > 1 ? path : [cameraTarget, cameraTarget])
    const near = new THREE.Vector3(x, 0.34, -y)
    const forward = new THREE.Vector3(Math.sin(heading), 0, -Math.cos(heading))
    const side = new THREE.Vector3(Math.cos(heading), 0, Math.sin(heading))
    const farCenter = near.clone().addScaledVector(forward, 1.3)
    const left = farCenter.clone().addScaledVector(side, 0.55)
    const right = farCenter.clone().addScaledVector(side, -0.55)
    frustum.geometry.dispose()
    frustum.geometry = new THREE.BufferGeometry().setFromPoints([near, left, near, right, left, right])
  }, [state])

  return <div className="scene" ref={mount} aria-label="Three.js third-person robot view" />
}

function CameraPanel({ available }) {
  const [failed, setFailed] = useState(false)
  return (
    <div className="camera-panel">
      {available && !failed ? (
        <img src="/api/camera.mjpg" alt="Live JetBot camera" onError={() => setFailed(true)} />
      ) : (
        <div className="camera-empty">
          <div className="camera-icon">◉</div>
          <p>{available ? 'Camera stream reconnecting…' : 'Camera is not available yet'}</p>
          <span>The dashboard stays usable while hardware is starting.</span>
        </div>
      )}
      <div className="camera-label"><span className="live-dot" /> LIVE CAMERA</div>
    </div>
  )
}

function MotorControl({ onMotor, onStop }) {
  const active = useRef(false)
  const send = (left, right) => { active.current = true; onMotor(left, right) }
  const stop = () => { active.current = false; onStop() }
  useEffect(() => {
    const keyMap = { w: [0.35, 0.35], s: [-0.3, -0.3], a: [-0.25, 0.25], d: [0.25, -0.25] }
    const down = (event) => {
      if (event.target.tagName === 'INPUT') return
      const pair = keyMap[event.key.toLowerCase()]
      if (pair) { event.preventDefault(); send(...pair) }
    }
    const up = (event) => { if (keyMap[event.key.toLowerCase()]) stop() }
    window.addEventListener('keydown', down); window.addEventListener('keyup', up)
    return () => { window.removeEventListener('keydown', down); window.removeEventListener('keyup', up) }
  })
  const button = (label, left, right, className = '') => (
    <button className={`drive-button ${className}`} onPointerDown={() => send(left, right)} onPointerUp={stop} onPointerLeave={stop} aria-label={label}>{label}</button>
  )
  return <div className="controls">
    <div className="dpad">
      <div />{button('▲', 0.35, 0.35)}<div />
      {button('◀', -0.25, 0.25)}{button('■', 0, 0, 'stop-button')}{button('▶', 0.25, -0.25)}
      <div />{button('▼', -0.3, -0.3)}<div />
    </div>
    <p className="hint">Hold a direction, or use W A S D. The motor command times out automatically.</p>
  </div>
}

function App() {
  const [state, setState] = useState(initialState)
  const [error, setError] = useState('')
  useEffect(() => {
    let alive = true
    const poll = async () => {
      try {
        const response = await fetch('/api/state', { cache: 'no-store' })
        if (!response.ok) throw new Error('state request failed')
        const next = await response.json()
        if (alive) { setState(next); setError('') }
      } catch (e) { if (alive) setError('Dashboard cannot reach the robot service.') }
    }
    poll(); const timer = setInterval(poll, 500)
    return () => { alive = false; clearInterval(timer) }
  }, [])
  const sendMotor = async (left, right) => {
    try { await fetch('/api/motor', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ left, right }) }) }
    catch { setError('Motor command was not sent.') }
  }
  const stop = () => fetch('/api/stop', { method: 'POST' }).catch(() => setError('Stop command was not sent.'))
  const [x, y, heading] = state.pose || [0, 0, 0]
  return <main>
    <header className="topbar">
      <div><p className="eyebrow">JETBOT LAB / LIVE DEVELOPMENT</p><h1>See it. Drive it. Understand it.</h1><p className="subhead">A small dashboard for camera experiments, navigation, and the next project idea.</p></div>
      <div className={`connection ${error ? 'offline' : ''}`}><span className="status-dot" />{error ? 'OFFLINE' : state.mode === 'hardware' ? 'JETBOT ONLINE' : 'SIMULATION MODE'}</div>
    </header>
    {error && <div className="alert">{error}</div>}
    <section className="hero-grid">
      <div className="panel scene-panel"><div className="panel-head"><div><span className="kicker">THREE.JS VIEW</span><h2>Third-person view</h2></div><span className="pill">{state.status || 'Waiting'}</span></div><RobotScene state={state} /><div className="scene-legend"><span><i className="swatch cyan" /> planned / recorded path</span><span><i className="swatch pink" /> camera frustum</span></div></div>
      <div className="side-stack"><div className="panel camera-wrap"><div className="panel-head"><div><span className="kicker">SENSOR</span><h2>Camera feed</h2></div><span className="mono">{state.camera?.width || 0}×{state.camera?.height || 0}</span></div><CameraPanel available={state.camera?.available} /></div><div className="panel controls-wrap"><div className="panel-head"><div><span className="kicker">MOTION</span><h2>Manual control</h2></div><span className="mono">{state.motors?.map(v => fmt(v, 2)).join(' / ')}</span></div><MotorControl onMotor={sendMotor} onStop={stop} /></div></div>
    </section>
    <section className="stats-grid">
      <div className="stat"><span>POSE X</span><strong>{fmt(x)} <small>m</small></strong></div><div className="stat"><span>POSE Y</span><strong>{fmt(y)} <small>m</small></strong></div><div className="stat"><span>HEADING</span><strong>{fmt(heading * 180 / Math.PI, 1)}°</strong></div><div className="stat"><span>CPU TEMP</span><strong>{state.cpu_temp_c == null ? '—' : `${fmt(state.cpu_temp_c, 1)}°`}</strong></div><div className="stat"><span>MEMORY</span><strong>{state.memory_percent == null ? '—' : `${fmt(state.memory_percent, 0)}%`}</strong></div><div className="stat"><span>UPTIME</span><strong>{fmt(state.uptime_s, 0)} <small>s</small></strong></div>
    </section>
    <footer><span>JetBot host: <b>{state.host || '—'}</b></span><span>Pose source: <b>{state.pose_source || 'wheel dead-reckoning'}</b></span><span>Local network dashboard · port 8080</span></footer>
  </main>
}

createRoot(document.getElementById('root')).render(<App />)
