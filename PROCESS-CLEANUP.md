# Process Cleanup Guide

## The Problem

When you cancel dev servers with `Ctrl+C`, child processes may not always be killed properly. This leaves zombie vite and email dev processes running in the background, causing port conflicts on the next run.

## Solution with Turbo

This project now uses **Turbo** for task orchestration, which provides better process management:
- Interactive TUI showing all running processes
- Better signal handling for graceful shutdown
- Daemon mode for persistent task runner

### Using Turbo's TUI

When you run `pnpm dev`, Turbo opens an interactive terminal UI:
- Press `Ctrl+Z` to access the menu
- Press `Ctrl+C` to stop all processes gracefully
- View process logs in real-time

### Cleanup Script

If processes still don't exit properly:

```bash
# Option 1: Use the npm script (recommended)
pnpm cleanup

# Option 2: Run the script directly
./kill-demos.sh
```

### What It Does

The cleanup script:
1. Stops the Turbo daemon
2. Finds and kills all vite processes
3. Finds and kills all email dev processes  
4. Kills any processes running on demo ports (54100, 54200, 54300, 54400, 54500)

### Manual Cleanup

If you need to manually kill processes:

```bash
# Stop turbo daemon
turbo daemon stop

# Kill all vite processes
pkill -f "vite/bin/vite.js"

# Kill email dev processes
pkill -f "email dev"

# Kill process on specific port (replace PORT with actual port number)
kill -9 $(lsof -ti :PORT)
```

### Checking for Zombie Processes

```bash
# Check turbo daemon status
turbo daemon status

# Check for vite processes
ps aux | grep vite | grep -v grep

# Check for email dev processes
ps aux | grep "email dev" | grep -v grep

# Check specific port
lsof -ti :54100  # Replace with your port number
```

## Prevention

Turbo provides better process management than raw pnpm, but the best practice is still:

1. Use `Ctrl+C` once to stop all processes
2. Wait for Turbo to gracefully shut down (2-3 seconds)
3. If processes don't exit, run `pnpm cleanup`
4. Restart with `pnpm dev`

### Turbo Advantages

- **Graceful shutdown**: Turbo handles SIGINT/SIGTERM properly
- **Process monitoring**: Interactive TUI shows all process states
- **Daemon mode**: Turbo daemon manages long-running tasks
- **Better cleanup**: Automatically cleans up child processes

## Port Assignments

Current demo ports (all in 54000+ range to avoid common conflicts):
- Presentation: 54100
- React PDF: 54200
- React Three Fiber: 54300
- React Three Fiber Car: 54400
- React Email: 54500
