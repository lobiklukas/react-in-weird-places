import { useState, useEffect } from 'react';
import { Activity, ActivityType } from '../types/dashboard.js';

const activityMessages = [
    { type: 'success' as ActivityType, message: 'Database connection established' },
    { type: 'info' as ActivityType, message: 'User session initiated' },
    { type: 'success' as ActivityType, message: 'Cache updated successfully' },
    { type: 'warning' as ActivityType, message: 'High memory usage detected' },
    { type: 'info' as ActivityType, message: 'Backup process started' },
    { type: 'success' as ActivityType, message: 'API request completed' },
    { type: 'error' as ActivityType, message: 'Failed to connect to external service' },
    { type: 'info' as ActivityType, message: 'New deployment detected' },
    { type: 'success' as ActivityType, message: 'Configuration reloaded' },
    { type: 'warning' as ActivityType, message: 'SSL certificate expires in 30 days' },
    { type: 'info' as ActivityType, message: 'Scheduled task executed' },
    { type: 'success' as ActivityType, message: 'File upload completed' },
];

export const useActivityFeed = (isPaused: boolean) => {
    const [activities, setActivities] = useState<Activity[]>([]);

    useEffect(() => {
        if (isPaused) return;

        const addActivity = () => {
            const message = activityMessages[Math.floor(Math.random() * activityMessages.length)];
            const newActivity: Activity = {
                id: Date.now().toString() + Math.random(),
                timestamp: new Date(),
                type: message.type,
                message: message.message
            };

            setActivities(prev => [...prev, newActivity]);
        };

        // Add initial activity
        addActivity();

        // Add new activity every 2-5 seconds
        const interval = setInterval(() => {
            addActivity();
        }, 2000 + Math.random() * 3000);

        return () => clearInterval(interval);
    }, [isPaused]);

    return activities;
};
