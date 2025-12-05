export interface SystemMetrics {
    cpu: number;
    memory: number;
    disk: number;
    uptime: number;
}

export interface NetworkMetrics {
    connections: number;
    bytesIn: number;
    bytesOut: number;
    packetsIn: number;
    packetsOut: number;
}

export type ActivityType = 'info' | 'warning' | 'error' | 'success';

export interface Activity {
    id: string;
    timestamp: Date;
    type: ActivityType;
    message: string;
}

export interface Stats {
    processes: number;
    requests: number;
    completed: number;
    errorRate: number;
}

export interface NodeProcess {
    pid: number;
    port: number;
    command: string;
    uptime: string;
    cpu: number;
    memory: number;
}

export type TaskStatus = 'pending' | 'running' | 'success' | 'error';

export interface Task {
    id: string;
    name: string;
    status: TaskStatus;
    duration?: number;
    startTime?: Date;
    subtasks?: Task[];
}

export interface DashboardState {
    isPaused: boolean;
    selectedPanel: number;
    metrics: SystemMetrics;
    activities: Activity[];
    stats: Stats;
    tasks: Task[];
}
