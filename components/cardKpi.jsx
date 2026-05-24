import {
  Card,
  CardHeader,
  CardTitle,
  CardFooter,
  CardAction,
  CardContent,
} from "./ui/card";
import { Badge } from "@/components/ui/badge";
import { WalletIcon, TrendingDownIcon } from "lucide-react";
import { ResponsiveContainer, AreaChart, Area } from "recharts";

export default function CardKpi() {
  const spark = (seed) =>
    Array.from({ length: 10 }).map((_, i) => ({
      v: 20 + (Math.sin(i + seed) + 1) * 30 + i * 2,
    }));

  return (
    <Card className="group relative bg-card rounded-2xl border border-border p-5 shadow-soft hover:shadow-card transition-all">
      <CardHeader className="flex items-center justify-between">
        <CardTitle className="text-xs font-medium text-muted-foreground">
          Recebimentos do mês
        </CardTitle>

        <div className="w-9 h-9 rounded-lg grid place-items-center bg-accent text-primary">
          <WalletIcon className="w-4 h-4" strokeWidth={2.2} />
        </div>
      </CardHeader>
      <CardContent className="text-3xl font-semibold tracking-tight mb-2">
        R${" "}
        {Intl.NumberFormat("pt-BR", {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        }).format(1234)}
      </CardContent>
      <CardFooter className="justify-between gap-3">
        <CardAction className="self-center">
          <Badge className="inline-flex items-center gap-1 text-xs font-semibold px-2 py-1 rounded-md bg-success/12 text-success">
            <TrendingDownIcon className="w-4 h-4" strokeWidth={2.2} />
            {Math.abs(10.5235).toFixed(2)}%
          </Badge>
        </CardAction>
        <div className="h-10 w-24">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={spark(1)}>
              <defs>
                <linearGradient id="recebimento" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#000" stopOpacity={0.35} />
                  <stop offset="100%" stopColor="#000" stopOpacity={0} />
                </linearGradient>
              </defs>
              <Area
                type="monotone"
                dataKey="v"
                stroke="#000"
                strokeWidth={1}
                fill={`url(#recebimento)`}
                fillOpacity={1}
                activeDot={false}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </CardFooter>
    </Card>
  );
}
