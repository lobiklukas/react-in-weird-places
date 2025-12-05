# Ink CLI Demo - Interactive System Dashboard

This demo showcases `ink` - a custom React reconciler for building CLI applications.

## Features
- **Live System Metrics**: Real-time CPU (load average), Memory, Disk usage, and system uptime
- **Process Manager**: View and kill Node.js processes by port with real-time data
- **Interactive Navigation**: Select and kill processes using arrow keys and keyboard
- **Statistics Panel**: Live counters for Node processes, ports, and CPU usage
- **Interactive Controls**: Full keyboard navigation and control
- **Responsive Layout**: Flexbox-based terminal UI with borders and colors
- **State Management**: Full React hooks and state management in the terminal

## Running the Demo
```bash
pnpm dev:ink
```

## Dashboard Layout

```
┌─────────────────────────────────────┐
│     📊 SYSTEM DASHBOARD             │
│  ⏰ Time          ● LIVE/⏸ PAUSED   │
└─────────────────────────────────────┘

┌────────────────────────────────────┐
│  ⚡ System Metrics                  │
│  CPU:    ████████░░  58.3%         │
│  Memory: █████░░░░░  47.2%         │
│  Disk:   ██████░░░░  65%           │
│  Uptime: 2d 14:30:45               │
└────────────────────────────────────┘

┌──────────────────────┐  ┌──────────┐
│ 🔧 Process Manager   │  │ 📊 Stats │
│ PORT  | PID  | CPU   │  │ Nodes: 7 │
│ ▶54100| 69060| 0.1%  │  │ Demo: 5  │
│  54200| 69110| 0.2%  │  │ Ports: 7 │
│  54300| 69125| 0.3%  │  │ CPU: 2.1%│
│ ...                  │  └──────────┘
└──────────────────────┘

┌─────────────────────────────────────┐
│ [↑/↓] Select | [K] Kill | [Q] Quit  │
└─────────────────────────────────────┘
```

## Interactive Controls

- **Space** - Pause/Resume live updates
- **↑/↓ Arrow Keys** - Navigate through Node.js processes (when Process Manager focused)
- **K or Enter** - Kill selected process (SIGTERM, fallback to SIGKILL)
- **1** - Focus System Metrics panel
- **2** - Focus Process Manager panel
- **3** - Focus Statistics panel
- **R** - Reset selection and clear status messages
- **Q** - Quit application

## How It Works

Ink implements a custom React reconciler that:
1. Maps React components to terminal primitives
   - `<Box>` → Terminal layout container (like `<div>`)
   - `<Text>` → Terminal text output with colors
   - Custom components for progress bars, panels, etc.
2. Uses Yoga layout engine for flexbox calculations
3. Renders to terminal stdout using ANSI escape codes
4. Handles terminal input via hooks (`useInput`)
5. Updates efficiently using React's reconciliation

## Component Architecture

```
App (main container)
├── Header (title, timestamp, status)
├── MetricsPanel (CPU, memory, disk, uptime)
│   └── ProgressBar × 3 (custom component)
├── Middle Row (flex container)
│   ├── ProcessManager (Node.js processes, 65% width)
│   └── StatsPanel (counters, 35% width)
└── Footer (keyboard controls guide)
```

## Custom Hooks

- `useSystemMetrics(isPaused)` - Real system metrics from Node.js `os` module
  - CPU: Load average divided by CPU cores
  - Memory: Real memory usage percentage
  - Disk: Real disk usage via `df` command (macOS/Linux)
  - Uptime: System uptime in seconds
- `useNodeProcesses(isPaused)` - Discovers Node.js processes with listening ports
  - Uses `lsof` to find TCP listening ports
  - Filters for Node.js processes
  - Gets detailed info via `ps` command
  - Refreshes every 3 seconds
- `useInput()` - Handles keyboard input (from Ink)
- `useApp()` - Access to app lifecycle (from Ink)

## Key Components

### ProgressBar
- Color-coded based on thresholds (green < 70%, yellow < 90%, red ≥ 90%)
- Animated block characters (█ for filled, ░ for empty)
- Shows percentage with dynamic width

### MetricsPanel
- **Real CPU data** from `os.loadavg()` divided by CPU core count
- **Real Memory data** from Node.js `os` module
- **Real Disk data** from `df` command (macOS/Linux)
- Updates every second when not paused
- Human-readable uptime formatting

### ProcessManager (replaces ActivityFeed)
- **Real-time process discovery** via `lsof` command
- Shows Node.js processes listening on TCP ports
- Displays: Port, PID, Uptime, CPU%, Memory%, Command
- **Interactive selection** with arrow keys
- **Kill functionality** with K or Enter
  - Tries graceful SIGTERM first
  - Falls back to SIGKILL if needed
  - Shows success/error messages
  - Auto-refreshes after kill
- Excludes the dashboard itself from the list
- Updates every 3 seconds

### StatsPanel
- **Node Processes**: Total count of Node.js processes found
- **Demo Services**: Count of processes on ports 54000-55000
- **Active Ports**: Total listening ports discovered
- **Avg CPU Usage**: Average CPU across all processes
- Color-coded CPU indicator (green < 20%, yellow < 50%, red ≥ 50%)

## Technical Details

### Reconciler Implementation
- Ink uses `react-reconciler` package to target the terminal
- React elements map to terminal output primitives
- Layout calculations via Facebook's Yoga engine
- ANSI escape codes for colors and formatting
- Efficient diffing and updates like browser React

### State Updates
- Metrics: Every 1 second
- Processes: Every 3 seconds
- Process kill: Immediate refresh after 500ms
- Stats: Calculated from process data
- Timestamp: Every 1 second
- All updates pause when paused

### Visual Feedback
- Focused panels show double borders (cyan)
- Unfocused panels show round borders (gray)
- Pause indicator in header
- Real-time data streaming
- Smooth terminal updates

## Use Cases

- Interactive CLI tools
- **Process management and monitoring**
- **Development server management**
- **Port conflict resolution**
- System monitoring dashboards
- Build tools with live progress
- Development tool UIs
- CI/CD pipeline visualizations
- **Node.js process inspection and cleanup**

## Platform Requirements

**Supported Platforms**: macOS and Linux

This demo uses Unix-specific commands:
- `lsof` - List open files and network connections
- `ps` - Process status information
- `df` - Disk usage statistics

**Windows**: Not currently supported due to command dependencies. Consider using WSL2.

## Real-World Usage

Companies using Ink in production:
- **GitHub Copilot CLI** - AI command generation
- **Cloudflare Wrangler** - Workers deployment
- **Gatsby** - Site generation progress
- **Linear** - Internal deployment tools
- **Prisma** - Database toolkit UI

## Benefits of Ink

✓ **Declarative** - Build UIs with familiar React patterns
✓ **Component Reusability** - Share logic across projects
✓ **Stateful** - Full React state management and hooks
✓ **Type-Safe** - First-class TypeScript support
✓ **Testable** - Use `ink-testing-library` for tests
✓ **Flexbox Layout** - Familiar CSS-like layouts
✓ **Hot Reload** - Fast development with tsx
✓ **Real System Integration** - Access Node.js APIs and system commands

## Safety Warnings

⚠️ **Process Killing**: This dashboard can kill Node.js processes running on your system. Use with caution:
- Always verify the process before killing
- The dashboard filters itself out of the list
- SIGTERM is tried first (graceful shutdown)
- SIGKILL is used as fallback (force kill)
- You may need elevated permissions to kill some processes

## Demo Tips

1. **Start the other demos first** to have processes to manage:
   ```bash
   pnpm dev  # Starts all web-based demos
   ```

2. **Then run this dashboard** in a separate terminal:
   ```bash
   pnpm dev:ink
   ```

3. **Try the features**:
   - Press `2` to focus the Process Manager
   - Use `↑/↓` to select a process
   - Press `K` to kill it (try killing one of the demo servers)
   - Watch it disappear from the list
   - Start the demo again and see it reappear

