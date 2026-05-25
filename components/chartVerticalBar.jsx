"use client";

import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "./ui/card";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "./ui/chart";
import { TrendingUp } from "lucide-react";

export const description = "A bar chart";
const chartData = [
  { month: "Janeiro", received: 1245789 },
  { month: "Fevereiro", received: 1984321 },
  { month: "Março", received: 2765432 },
  { month: "Abril", received: 1456789 },
  { month: "Maio", received: 2234567 },
  { month: "Junho", received: 1876543 },
  { month: "Julho", received: 2987654 },
  { month: "Agosto", received: 1567890 },
  { month: "Setembro", received: 2678912 },
  { month: "Outubro", received: 1789456 },
  { month: "Novembro", received: 2345678 },
  { month: "Dezembro", received: 2891234 },
];
const chartConfig = {
  received: {
    label: "Recebido",
    color: "var(--primary)",
  },
};

export default function ChartVerticalBar() {
  return (
    <Card className="@container/card p-5 w-full col-span-2">
      <CardHeader>
        <CardTitle>Recebimentos por mês</CardTitle>
        <CardDescription>
          <span className="@[540px]/card:block">Do ano de 2026</span>
        </CardDescription>
      </CardHeader>
      <CardContent className="px-2 pt-4 sm:px-6 sm:pt-6">
        <ChartContainer
          config={chartConfig}
          className="aspect-auto h-[250px] w-full"
        >
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
            <Bar dataKey="received" fill="var(--primary)" radius={8} />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
