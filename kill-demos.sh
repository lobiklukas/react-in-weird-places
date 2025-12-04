#!/bin/bash

echo "🔍 Finding and killing demo processes..."

# Kill turbo daemon if running
if command -v turbo &> /dev/null; then
    echo "Stopping turbo daemon..."
    turbo daemon stop 2>/dev/null || true
fi

# Kill vite processes
VITE_PIDS=$(pgrep -f "vite/bin/vite.js")
if [ -n "$VITE_PIDS" ]; then
    echo "Killing vite processes: $VITE_PIDS"
    pkill -f "vite/bin/vite.js"
else
    echo "No vite processes found"
fi

# Kill email dev processes
EMAIL_PIDS=$(pgrep -f "email dev")
if [ -n "$EMAIL_PIDS" ]; then
    echo "Killing email dev processes: $EMAIL_PIDS"
    pkill -f "email dev"
else
    echo "No email dev processes found"
fi

# Kill processes on specific ports
PORTS="54100 54200 54300 54400 54500"
for PORT in $PORTS; do
    PID=$(lsof -ti :$PORT 2>/dev/null)
    if [ -n "$PID" ]; then
        echo "Killing process $PID on port $PORT"
        kill -9 $PID 2>/dev/null
    fi
done

echo "✅ Cleanup complete!"
