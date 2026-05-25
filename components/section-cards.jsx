"use client";

import CardKpi from "./cardKpi";
import {
  WalletIcon,
  TrendingUpIcon,
  TrendingDownIcon,
  ReceiptIcon,
  CircleDollarSignIcon,
  BarChart3Icon,
} from "lucide-react";

const spark = (seed) =>
  Array.from({ length: 10 }).map((_, i) => ({
    v: 20 + (Math.sin(i + seed) + 1) * 30 + i * 2,
  }));

export function SectionCards() {
  return (
    <div className="grid grid-cols-1 gap-4 px-4 *:data-[slot=card]:bg-gradient-to-t *:data-[slot=card]:from-primary/5 *:data-[slot=card]:to-card *:data-[slot=card]:shadow-xs lg:px-6 @xl/main:grid-cols-2 @5xl/main:grid-cols-3 dark:*:data-[slot=card]:bg-card">
      <div className="order-1">
        <CardKpi
          label={"Recebimentos do mês"}
          icon={WalletIcon}
          value={153465}
          delta={1.9}
          spark={spark(1)}
        />
      </div>
      <div className="order-4">
        <CardKpi
          label={"Recebimentos anuais"}
          icon={TrendingUpIcon}
          value={10892398}
          delta={5.9}
          spark={spark(2)}
        />
      </div>
      <div className="order-2">
        <CardKpi
          label={"Dívidas mensais"}
          icon={ReceiptIcon}
          value={23414}
          delta={-10.6}
          spark={spark(3)}
        />
      </div>
      <div className="order-5">
        <CardKpi
          label={"Dívida total acumulada"}
          icon={TrendingDownIcon}
          value={545464}
          delta={-90.5}
          spark={spark(4)}
        />
      </div>
      <div className="order-3">
        <CardKpi
          label={"Saldo líquido mensal"}
          icon={CircleDollarSignIcon}
          value={124125}
          delta={25.2}
          spark={spark(5)}
        />
      </div>
      <div className="order-6">
        <CardKpi
          label={"Saldo líquido anual"}
          icon={BarChart3Icon}
          value={34323}
          delta={-9.5}
          spark={spark(6)}
        />
      </div>
    </div>
  );
}
