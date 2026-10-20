FROM jetbot/jetbot:jupyter-0.4.3-32.5.0

WORKDIR /opt/jetbot-dashboard
COPY server.py ./server.py
COPY dist ./dist

ENV PORT=8080
ENV MOTOR_TIMEOUT=1.0
EXPOSE 8080
CMD ["python3", "/opt/jetbot-dashboard/server.py", "--host", "0.0.0.0", "--port", "8080"]
