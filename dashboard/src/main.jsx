import React, { useEffect, useRef, useState } from 'react'
import { createRoot } from 'react-dom/client'
import * as THREE from 'three'
import './style.css'

const initialState = {
  mode: 'connecting', status: 'Connecting to JetBot…', pose: [0, 0, 0], path: [], motors: [0, 0],
  controller_mode: 'manual', controller_available: false, camera: { available: false, width: 0, height: 0 },
  host: '—', uptime_s: 0, cpu_temp_c: null, memory_percent: null,
  map: { points: 0, boundary: 0, path: 0, bounds: null, source: 'none' },
}

const emptyMap = { points: [], boundary: [], path: [], bounds: null, source: 'none' }

function fmt(value, digits = 2) {
  return Number.isFinite(value) ? Number(value).toFixed(digits) : '—'
}

function worldPoint(point, height = 0.03) {
  const x = Number(point?.[0]) || 0
  const y = Number(point?.[1]) || 0
  const z = Number(point?.[2]) || 0
  return new THREE.Vector3(x, point?.length > 2 ? z : height, -y)
}

function setLineGeometry(line, points, fallback = [new THREE.Vector3(), new THREE.Vector3()]) {
  line.geometry.dispose()
  line.geometry = new THREE.BufferGeometry().setFromPoints(points.length > 1 ? points : fallback)
}

function RobotScene({ state, mapData }) {
  const mount = useRef(null)
  const sceneRef = useRef(null)

  useEffect(() => {
    const element = mount.current
    const scene = new THREE.Scene()
    scene.background = new THREE.Color('#071017')
    scene.fog = new THREE.Fog('#071017', 10, 42)
    const camera = new THREE.PerspectiveCamera(48, 1, 0.01, 100)
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.shadowMap.enabled = true
    element.appendChild(renderer.domElement)

    scene.add(new THREE.HemisphereLight('#b8e7ff', '#0d1720', 2.4))
    const key = new THREE.DirectionalLight('#b1dfff', 3)
    key.position.set(4, 8, 2); key.castShadow = true; scene.add(key)
    const floor = new THREE.Mesh(new THREE.PlaneGeometry(60, 60), new THREE.MeshStandardMaterial({ color: '#0a1a22', roughness: 0.95 }))
    floor.rotation.x = -Math.PI / 2; floor.receiveShadow = true; scene.add(floor)
    const grid = new THREE.GridHelper(40, 40, '#1f5962', '#102d37')
    grid.position.y = 0.006; scene.add(grid)

    const robot = new THREE.Group()
    const body = new THREE.Mesh(new THREE.BoxGeometry(0.62, 0.24, 0.48), new THREE.MeshStandardMaterial({ color: '#eeb34d', metalness: 0.2, roughness: 0.5 }))
    body.position.y = 0.23; body.castShadow = true; robot.add(body)
    const top = new THREE.Mesh(new THREE.BoxGeometry(0.38, 0.08, 0.34), new THREE.MeshStandardMaterial({ color: '#d8f2f3', emissive: '#183940', roughness: 0.35 }))
    top.position.set(0, 0.39, -0.02); top.castShadow = true; robot.add(top)
    const wheelMaterial = new THREE.MeshStandardMaterial({ color: '#172532', roughness: 0.65 })
    for (const x of [-0.36, 0.36]) {
      const wheel = new THREE.Mesh(new THREE.CylinderGeometry(0.13, 0.13, 0.08, 24), wheelMaterial)
      wheel.rotation.z = Math.PI / 2; wheel.position.set(x, 0.14, 0); wheel.castShadow = true; robot.add(wheel)
    }
    const arrow = new THREE.Mesh(new THREE.ConeGeometry(0.1, 0.28, 3), new THREE.MeshStandardMaterial({ color: '#35e0d0', emissive: '#0b4b4b' }))
    arrow.rotation.x = Math.PI / 2; arrow.position.set(0, 0.29, -0.34); robot.add(arrow); scene.add(robot)

    const frustum = new THREE.LineSegments(new THREE.BufferGeometry(), new THREE.LineBasicMaterial({ color: '#ef75ae', transparent: true, opacity: 0.8 }))
    const trail = new THREE.Line(new THREE.BufferGeometry(), new THREE.LineBasicMaterial({ color: '#35e0d0', transparent: true, opacity: 0.9 }))
    const mapPath = new THREE.Line(new THREE.BufferGeometry(), new THREE.LineBasicMaterial({ color: '#f1c95b', transparent: true, opacity: 0.95 }))
    const boundary = new THREE.LineLoop(new THREE.BufferGeometry(), new THREE.LineBasicMaterial({ color: '#d26bff', transparent: true, opacity: 0.85 }))
    const cloud = new THREE.Points(new THREE.BufferGeometry(), new THREE.PointsMaterial({ color: '#8be9ff', size: 0.035, sizeAttenuation: true, transparent: true, opacity: 0.8 }))
    scene.add(frustum, trail, mapPath, boundary, cloud)

    const orbit = { yaw: 0.65, pitch: 0.62, distance: 5.2, dragging: false, lastX: 0, lastY: 0, keys: {} }
    const resize = () => {
      const width = element.clientWidth || 1; const height = element.clientHeight || 1
      camera.aspect = width / height; camera.updateProjectionMatrix(); renderer.setSize(width, height, false)
    }
    const pointerDown = event => { orbit.dragging = true; orbit.lastX = event.clientX; orbit.lastY = event.clientY; element.setPointerCapture(event.pointerId) }
    const pointerMove = event => {
      if (!orbit.dragging) return
      orbit.yaw -= (event.clientX - orbit.lastX) * 0.008; orbit.pitch += (event.clientY - orbit.lastY) * 0.006
      orbit.pitch = Math.max(0.2, Math.min(1.35, orbit.pitch)); orbit.lastX = event.clientX; orbit.lastY = event.clientY
    }
    const pointerUp = () => { orbit.dragging = false }
    const wheel = event => { event.preventDefault(); orbit.distance = Math.max(2.0, Math.min(15, orbit.distance + event.deltaY * 0.006)) }
    const keyDown = event => { if (['ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown'].includes(event.key)) { orbit.keys[event.key] = true; event.preventDefault() } }
    const keyUp = event => { delete orbit.keys[event.key] }
    element.addEventListener('pointerdown', pointerDown); element.addEventListener('pointermove', pointerMove); element.addEventListener('pointerup', pointerUp); element.addEventListener('pointercancel', pointerUp); element.addEventListener('wheel', wheel, { passive: false })
    window.addEventListener('keydown', keyDown); window.addEventListener('keyup', keyUp)
    const observer = new ResizeObserver(resize); observer.observe(element); resize()

    let animation
    const render = () => {
      animation = requestAnimationFrame(render)
      if (orbit.keys.ArrowLeft) orbit.yaw += 0.018
      if (orbit.keys.ArrowRight) orbit.yaw -= 0.018
      if (orbit.keys.ArrowUp) orbit.pitch = Math.min(1.35, orbit.pitch + 0.012)
      if (orbit.keys.ArrowDown) orbit.pitch = Math.max(0.2, orbit.pitch - 0.012)
      const target = sceneRef.current?.followTarget || new THREE.Vector3()
      const horizontal = Math.cos(orbit.pitch) * orbit.distance
      const desired = new THREE.Vector3(target.x + Math.sin(orbit.yaw) * horizontal, target.y + Math.sin(orbit.pitch) * orbit.distance, target.z + Math.cos(orbit.yaw) * horizontal)
      camera.position.lerp(desired, 0.12); camera.lookAt(target); renderer.render(scene, camera)
    }
    sceneRef.current = { camera, renderer, robot, frustum, trail, mapPath, boundary, cloud, followTarget: new THREE.Vector3() }
    render()
    return () => {
      cancelAnimationFrame(animation); observer.disconnect(); renderer.dispose()
      element.removeEventListener('pointerdown', pointerDown); element.removeEventListener('pointermove', pointerMove); element.removeEventListener('pointerup', pointerUp); element.removeEventListener('pointercancel', pointerUp); element.removeEventListener('wheel', wheel)
      window.removeEventListener('keydown', keyDown); window.removeEventListener('keyup', keyUp)
      element.removeChild(renderer.domElement); sceneRef.current = null
    }
  }, [])

  useEffect(() => {
    const current = sceneRef.current
    if (!current) return
    const { robot, frustum, trail, mapPath, boundary, cloud } = current
    const [x, y, heading] = state.pose || [0, 0, 0]
    robot.position.set(x, 0, -y); robot.rotation.y = -heading
    const target = new THREE.Vector3(x, 0, -y); current.followTarget = target
    const path = (state.path || []).map(([px, py]) => new THREE.Vector3(px, 0.028, -py))
    setLineGeometry(trail, path, [target, target])
    const mappedPath = (mapData.path || []).map(worldPoint)
    setLineGeometry(mapPath, mappedPath, [target, target])
    const border = (mapData.boundary || []).map(point => worldPoint(point, 0.045))
    if (!border.length && mapData.bounds?.min && mapData.bounds?.max) {
      const min = mapData.bounds.min; const max = mapData.bounds.max
      border.push(worldPoint([min[0], min[1]]), worldPoint([max[0], min[1]]), worldPoint([max[0], max[1]]), worldPoint([min[0], max[1]]))
    }
    setLineGeometry(boundary, border, [target, target])
    const points = mapData.points || []
    const positions = new Float32Array(points.length * 3)
    points.forEach((point, index) => worldPoint(point).toArray(positions, index * 3))
    cloud.geometry.dispose(); cloud.geometry = new THREE.BufferGeometry(); cloud.geometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3))
    const near = new THREE.Vector3(x, 0.34, -y); const forward = new THREE.Vector3(Math.sin(heading), 0, -Math.cos(heading)); const side = new THREE.Vector3(Math.cos(heading), 0, Math.sin(heading)); const farCenter = near.clone().addScaledVector(forward, 1.3); const left = farCenter.clone().addScaledVector(side, 0.55); const right = farCenter.clone().addScaledVector(side, -0.55)
    setLineGeometry(frustum, [near, left, near, right, left, right])
  }, [state, mapData])

  return <div className="scene" ref={mount} aria-label="Interactive Three.js third-person SLAM map" />
}

function CameraPanel({ available }) {
  const [failed, setFailed] = useState(false)
  return <div className="camera-panel">{available && !failed ? <img src="/api/camera.mjpg" alt="Live JetBot camera" onError={() => setFailed(true)} /> : <div className="camera-empty">CAMERA WAITING</div>}<div className="camera-label"><span className="live-dot" /> LIVE CAMERA</div></div>
}

function MotorControl({ mode, onMotor, onCmdVel, onStop }) {
  const send = (left, right, v, w) => mode === 'rl' ? onCmdVel(v, w) : onMotor(left, right)
  useEffect(() => {
    const keyMap = { w: [0.35, 0.35, 0.12, 0], s: [-0.3, -0.3, -0.10, 0], a: [-0.25, 0.25, 0, 0.9], d: [0.25, -0.25, 0, -0.9] }
    const down = event => { const pair = keyMap[event.key.toLowerCase()]; if (pair && event.target.tagName !== 'INPUT') { event.preventDefault(); send(...pair) } }
    const up = event => { if (keyMap[event.key.toLowerCase()]) onStop() }
    window.addEventListener('keydown', down); window.addEventListener('keyup', up)
    return () => { window.removeEventListener('keydown', down); window.removeEventListener('keyup', up) }
  })
  const button = (label, left, right, v, w, className = '') => <button className={`drive-button ${className}`} onPointerDown={() => send(left, right, v, w)} onPointerUp={onStop} onPointerLeave={onStop} aria-label={label}>{label}</button>
  return <div className="controls"><div className="dpad"><div />{button('▲', 0.35, 0.35, 0.12, 0)}<div />{button('◀', -0.25, 0.25, 0, 0.9)}{button('■', 0, 0, 0, 0, 'stop-button')}{button('▶', 0.25, -0.25, 0, -0.9)}<div />{button('▼', -0.3, -0.3, -0.10, 0)}<div /></div><span className="control-hint">WASD drive · drag to orbit · wheel zoom</span></div>
}

function ControllerPanel({ state, onChange }) {
  return <div className="controller-panel"><span>{state.controller_mode === 'rl' ? 'RL WHEEL POLICY' : 'MANUAL MOTORS'}</span><div><button className={state.controller_mode === 'manual' ? 'selected' : ''} onClick={() => onChange('manual')}>MANUAL</button><button className={state.controller_mode === 'rl' ? 'selected' : ''} disabled={!state.controller_available} onClick={() => onChange('rl')}>RL</button></div></div>
}

function App() {
  const [state, setState] = useState(initialState)
  const [mapData, setMapData] = useState(emptyMap)
  const [error, setError] = useState('')
  useEffect(() => {
    let alive = true
    const poll = async () => {
      try {
        const [stateResponse, mapResponse] = await Promise.all([fetch('/api/state', { cache: 'no-store' }), fetch('/api/map', { cache: 'no-store' })])
        if (!stateResponse.ok || !mapResponse.ok) throw new Error('dashboard request failed')
        const [next, nextMap] = await Promise.all([stateResponse.json(), mapResponse.json()])
        if (alive) { setState(next); setMapData(nextMap); setError('') }
      } catch { if (alive) setError('LINK LOST') }
    }
    poll(); const timer = setInterval(poll, 500)
    return () => { alive = false; clearInterval(timer) }
  }, [])
  const sendMotor = async (left, right) => { try { await fetch('/api/motor', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ left, right }) }) } catch { setError('MOTOR COMMAND FAILED') } }
  const sendCmdVel = async (v, w) => { try { const response = await fetch('/api/cmd_vel', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ v, w }) }); if (!response.ok) throw new Error('RL COMMAND FAILED') } catch (e) { setError(e.message) } }
  const stop = () => fetch('/api/stop', { method: 'POST' }).catch(() => setError('STOP COMMAND FAILED'))
  const setController = async mode => { try { const response = await fetch('/api/controller', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ mode }) }); if (!response.ok) { const body = await response.json(); throw new Error(body.error || 'CONTROLLER SWITCH FAILED') } } catch (e) { setError(e.message) } }
  const [x, y, heading] = state.pose || [0, 0, 0]
  const mapStats = state.map || {}
  return <main className="game-shell"><div className="viewport"><RobotScene state={state} mapData={mapData} /><div className="crosshair" />
    <header className="hud hud-top"><div><span className="brand">JETBOT // NAVIGATION LAB</span><span className="scene-title">THIRD-PERSON SLAM VIEW</span></div><div className={`connection ${error ? 'offline' : ''}`}><span className="status-dot" />{error || (state.mode === 'hardware' ? 'JETBOT ONLINE' : 'SIMULATION')}</div></header>
    <div className="hud hud-camera"><CameraPanel available={state.camera?.available} /></div>
    <div className="hud hud-left"><div className="readout"><span>POSE</span><b>{fmt(x)} / {fmt(y)} m</b><b>{fmt(heading * 180 / Math.PI, 1)}°</b></div><div className="readout"><span>SLAM MAP</span><b>{mapStats.points || mapData.points?.length || 0} POINTS</b><b>{mapStats.boundary || mapData.boundary?.length || 0} BOUNDARY NODES</b><small>{mapStats.source || mapData.source || 'NO MAP'}</small></div><div className="readout"><span>SYSTEM</span><b>{state.cpu_temp_c == null ? '—' : `${fmt(state.cpu_temp_c, 1)}°C`} · {state.memory_percent == null ? '—' : `${fmt(state.memory_percent, 0)}% RAM`}</b></div></div>
    <div className="hud hud-right"><ControllerPanel state={state} onChange={setController} /><MotorControl mode={state.controller_mode} onMotor={sendMotor} onCmdVel={sendCmdVel} onStop={stop} /></div>
    <div className="hud hud-bottom"><span>MAP: {mapData.source || 'waiting for SLAM telemetry'}</span><span>POINT CLOUD {mapData.points?.length || 0}</span><span>POSE SOURCE: {state.pose_source || 'wheel dead-reckoning'}</span></div>
  </div></main>
}

createRoot(document.getElementById('root')).render(<App />)
