'use client';
import { useEffect, useState } from 'react';

export default function Clock() {
    const [hour, setHour] = useState(new Date().toLocaleTimeString());

    useEffect(() => {
        const interval = setInterval(() => {
            setHour(new Date().toLocaleTimeString());
        },1000);

        return () => {
            clearInterval(interval);
        };
    },[]);

    return <time>{hour}</time>;
}