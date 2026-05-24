"use client";

import { CalendarIcon } from "lucide-react";

import {
  Combobox,
  ComboboxCollection,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxGroup,
  ComboboxInput,
  ComboboxItem,
  ComboboxLabel,
  ComboboxList,
  ComboboxTrigger,
  ComboboxValue,
} from "@/components/ui/combobox";
import { InputGroupAddon } from "@/components/ui/input-group";
import { Button } from "./ui/button";

const timezones = [
  {
    value: "2026",
    items: ["Jan/2026", "Fev/2026", "Mar/2026", "Abr/2026", "Mai/2026"],
  },
  {
    value: "2025",
    items: [
      "Jan/2025",
      "Fev/2025",
      "Mar/2025",
      "Abr/2025",
      "Mai/2025",
      "Jun/2025",
      "Jul/2025",
      "Ago/2025",
      "Set/2025",
      "Out/2025",
      "Nov/2025",
      "Dez/2025",
    ],
  },
  {
    value: "2024",
    items: [
      "Jan/2024",
      "Fev/2024",
      "Mar/2024",
      "Abr/2024",
      "Mai/2024",
      "Jun/2024",
      "Jul/2024",
      "Ago/2024",
      "Set/2024",
      "Out/2024",
      "Nov/2024",
      "Dez/2024",
    ],
  },
];

export function ComboxboxInputGroup() {
  return (
    <Combobox items={timezones} defaultValue={timezones[0].items[0]}>
      <ComboboxTrigger
        render={
          <Button
            variant="outline"
            className=" w-auto justify-between font-medium"
          >
            <CalendarIcon />
            <ComboboxValue />
          </Button>
        }
      />
      <ComboboxContent alignOffset={-28} className="w-60">
        <ComboboxInput showTrigger={false} placeholder="Search">
          <InputGroupAddon></InputGroupAddon>
        </ComboboxInput>
        <ComboboxEmpty>No timezones found.</ComboboxEmpty>
        <ComboboxList>
          {(group) => (
            <ComboboxGroup key={group.value} items={group.items}>
              <ComboboxLabel>{group.value}</ComboboxLabel>
              <ComboboxCollection>
                {(item) => (
                  <ComboboxItem key={item} value={item}>
                    {item}
                  </ComboboxItem>
                )}
              </ComboboxCollection>
            </ComboboxGroup>
          )}
        </ComboboxList>
      </ComboboxContent>
    </Combobox>
  );
}
