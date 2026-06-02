import { ProgressWithLabel } from "./progressWithLabel";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";

export function FinancialTarget() {
  return (
    <Card className="flex flex-col col-span-3 @5xl/main:col-span-1 gap-3">
      <CardHeader className="items-center">
        <CardTitle>Metas financeiras</CardTitle>
        <CardDescription>Progresso atualizado hoje</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-5">
        <ProgressWithLabel
          title="Meta mensal"
          progress={78}
          valuePresent={1500000}
          valueTarget={2000000}
        />
        <ProgressWithLabel
          title="Meta anual"
          progress={69}
          valuePresent={12 * 1500000}
          valueTarget={12 * 2000000}
        />
        <ProgressWithLabel
          title="Redução de dívidas"
          progress={60}
          valuePresent={60}
          valueTarget={100}
          percentage
        />
      </CardContent>
    </Card>
  );
}
