# Process Cleanup Guide

## The Problem

When you cancel the dev server with `Ctrl+C`, pnpm doesn't always kill all child processes properly. This leaves zombie vite and email dev processes running in the background, which causes port conflicts on the next run.

## Solution

A cleanup script has been created to kill all remaining demo processes.

### Using the Cleanup Script

```bash
# Option 1: Use the npm script (recommended)
pnpm cleanup

# Option 2: Run the script directly
./kill-demos.sh
```

### What It Does

The cleanup script:
1. Finds and kills all vite processes
2. Finds and kills all email dev processes  
3. Kills any processes running on demo ports (54100, 54200, 54300, 54400, 54500)

### Manual Cleanup

If you need to manually kill processes:

```bash
# Kill all vite processes
pkill -f "vite/bin/vite.js"

# Kill email dev processes
pkill -f "email dev"

# Kill process on specific port (replace PORT with actual port number)
kill -9 $(lsof -ti :PORT)
```

### Checking for Zombie Processes

```bash
# Check for vite processes
ps aux | grep vite | grep -v grep

# Check for email dev processes
ps aux | grep "email dev" | grep -v grep

# Check specific port
lsof -ti :54100  # Replace with your port number
```

## Prevention

Unfortunately, there's no perfect solution to prevent this with pnpm's parallel execution. The best practice is:

1. Use `Ctrl+C` once and wait a few seconds
2. If processes don't exit, run `pnpm cleanup`
3. Then restart with `pnpm dev`

## Port Assignments

Current demo ports (all in 54000+ range to avoid common conflicts):
- Presentation: 54100
- React PDF: 54200
- React Three Fiber: 54300
- React Three Fiber Car: 54400
- React Email: 54500
