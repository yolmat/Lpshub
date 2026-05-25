"use client";

import { Label, Legend, Pie, PieChart } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

export const description = "A pie chart with a legend";

const chartData = [
  { reference: "royalties", value: 275, fill: "var(--chart-1)" },
  { reference: "marketing", value: 200, fill: "var(--chart-2)" },
  { reference: "admFiduciário", value: 187, fill: "var(--chart-3)" },
  { reference: "sistema", value: 173, fill: "var(--chart-4)" },
  { reference: "taxaInicial", value: 90, fill: "var(--chart-5)" },
];

const chartConfig = {
  value: {
    label: "Valor Recebido",
  },
  royalties: {
    label: "Royalties",
    color: "var(--chart-1)",
  },
  marketing: {
    label: "Marketing",
    color: "var(--chart-2)",
  },
  admFiduciário: {
    label: "Adm Fiduciário",
    color: "var(--chart-3)",
  },
  sistema: {
    label: "Sistema",
    color: "var(--chart-4)",
  },
  taxaInicial: {
    label: "taxa inicial",
    color: "var(--chart-5)",
  },
};

export function ChartPieLegend() {
  return (
    <Card className="flex flex-col w-full col-span-2 @5xl/main:col-span-1">
      <CardHeader className="items-center pb-0">
        <CardTitle>Composição de receitas</CardTitle>
        <CardDescription>Distribuição por categoria</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[300px]"
        >
          <PieChart>
            <ChartTooltip
              content={<ChartTooltipContent nameKey="reference" hideLabel />}
            />
            <Pie data={chartData} dataKey="value" />
            <ChartLegend
              content={<ChartLegendContent nameKey="reference" />}
              className="-translate-y-2 flex-wrap gap-2 *:basis-1/4 *:justify-center"
            />
          </PieChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
