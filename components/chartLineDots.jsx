"use client";

import { GitCommitVertical, TrendingUp } from "lucide-react";
import { CartesianGrid, Line, LineChart, XAxis } from "recharts";

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

export const description = "A line chart with custom dots";

const chartData = [
  { month: "Julho", received: 249876 },
  { month: "Agosto", received: 1546790 },
  { month: "Setembro", received: 2267912 },
  { month: "Outubro", received: 1729456 },
  { month: "Novembro", received: 2365478 },
  { month: "Dezembro", received: 2891234 },
];

const chartConfig = {
  received: {
    label: "Recebido",
    color: "var(--chart-1)",
  },
};

export function ChartLineDots() {
  return (
    <Card className="w-full @container/card">
      <CardHeader>
        <CardTitle>Evolução do saldo líquido</CardTitle>
        <CardDescription>Crescimento ao longo do ano</CardDescription>
      </CardHeader>
      <CardContent className="px-2 pt-4 sm:px-6 sm:pt-6">
        <ChartContainer config={chartConfig} className="h-[250px] w-full">
          <LineChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Line
              dataKey="received"
              type="natural"
              stroke="var(--color-chart-1)"
              strokeWidth={2}
              dot={({ cx, cy, payload }) => {
                if (cx == null || cy == null) {
                  return null;
                }

                const r = 24;

                return (
                  <GitCommitVertical
                    key={payload.month}
                    x={cx - r / 2}
                    y={cy - r / 2}
                    width={r}
                    height={r}
                    fill="hsl(var(--chart-1))"
                    stroke="var(--color-chart-1)"
                  />
                );
              }}
            />
          </LineChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
