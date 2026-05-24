"use client";

import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { TrendingUpIcon, TrendingDownIcon, WalletIcon } from "lucide-react";
import { Area, AreaChart, ResponsiveContainer } from "recharts";
import CardKpi from "./cardKpi";

const spark = (seed) =>
  Array.from({ length: 10 }).map((_, i) => ({
    v: 20 + (Math.sin(i + seed) + 1) * 30 + i * 2,
  }));

export function SectionCards() {
  return (
    <div className="grid grid-cols-1 gap-4 px-4 *:data-[slot=card]:bg-gradient-to-t *:data-[slot=card]:from-primary/5 *:data-[slot=card]:to-card *:data-[slot=card]:shadow-xs lg:px-6 @xl/main:grid-cols-2 @5xl/main:grid-cols-3 dark:*:data-[slot=card]:bg-card">
      <CardKpi />
    </div>
  );
}
