"use client";

import { TrendingUp } from "lucide-react";
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

export const description = "A multiple bar chart";

const chartData = [
  { month: "Julho", received: 2987654, debt: 1323125 },
  { month: "Agosto", received: 1567890, debt: 5635353 },
  { month: "Setembro", received: 2678912, debt: 1234657 },
  { month: "Outubro", received: 1789456, debt: 989237 },
  { month: "Novembro", received: 2345678, debt: 1293120 },
  { month: "Dezembro", received: 2891234, debt: 293897 },
];

const chartConfig = {
  received: {
    label: "Recebido",
    color: "var(--primary)",
  },
  debt: {
    label: "Debito",
    color: "var(--accent-soft)",
  },
};

export function ChartHorizontalBar() {
  return (
    <Card className="w-full @container/card">
      <CardHeader>
        <CardTitle>Recebido x Devido</CardTitle>
        <CardDescription>Comparativo dos ultimos 6 meses</CardDescription>
      </CardHeader>
      <CardContent className="px-2 pt-4 sm:px-6 sm:pt-6">
        <ChartContainer config={chartConfig} className="h-[250px] w-full">
          <BarChart accessibilityLayer data={chartData}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
            <Bar dataKey="received" fill="var(--color-primary)" radius={8} />
            <Bar dataKey="debt" fill="var(--color-accent-soft)" radius={8} />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
