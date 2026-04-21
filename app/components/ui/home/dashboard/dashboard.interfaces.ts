import { ReactNode } from "react";

interface StatCardProps {
    label: string;
    value: string | number;
    change: string;
    isPositive: boolean;
    icon: ReactNode;
    iconTone?: "blue" | "emerald" | "amber" | "violet";
}

export type { StatCardProps };