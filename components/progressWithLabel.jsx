import { Field, FieldLabel } from "@/components/ui/field";
import { Progress } from "@/components/ui/progress";

export function ProgressWithLabel({
  title,
  progress,
  valuePresent,
  valueTarget,
  percentage,
}) {
  return (
    <Field className="w-full gap-3">
      <FieldLabel htmlFor="progress-upload">
        <div className="flex flex-col md:flex-row justify-between w-full">
          <span className="capitalize">{title}</span>
          <div>
            {percentage ? (
              <span>
                {valuePresent}%{" "}
                <span className="text-muted-foreground">| {valueTarget}%</span>
              </span>
            ) : (
              <span>
                R${" "}
                {Intl.NumberFormat("pt-BR", {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                }).format(valuePresent)}{" "}
                <span className="text-muted-foreground">
                  | R${" "}
                  {Intl.NumberFormat("pt-BR", {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                  }).format(valueTarget)}
                </span>
              </span>
            )}
          </div>
        </div>
      </FieldLabel>
      <Progress value={progress} id="progress-upload" />
      <span className="text-muted-foreground">{progress}% concluído</span>
    </Field>
  );
}
