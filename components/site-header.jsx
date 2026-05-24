import { Separator } from "@/components/ui/separator";
import { SidebarTrigger } from "@/components/ui/sidebar";
import getDate from "@/lib/getDate";
import { ComboxboxInputGroup } from "./combox-group";
import { ModeToggle } from "./mode-toggle";

export function SiteHeader() {
  const horaAtual = getDate();

  if (horaAtual >= 6 && horaAtual < 12) {
    console.log("Bom dia!");
  } else if (horaAtual >= 12 && horaAtual < 18) {
    console.log("Boa tarde!");
  } else {
    console.log("Boa noite!");
  }

  return (
    <header className="flex h-(--header-height) shrink-0 items-center gap-2 border-b transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-(--header-height)">
      <div className="flex w-full items-center gap-1 px-4 lg:gap-2 lg:px-6">
        <SidebarTrigger className="-ml-1" />
        <Separator
          orientation="vertical"
          className="mx-2 data-[orientation=vertical]:h-9"
        />
        <div className="hidden md:flex flex-col gap-0 ">
          <p className="text-xs font-medium text-muted-foreground">
            Boa noite, Ricardo
          </p>
          <h1 className="text-base font-semibold">
            Aqui está o resumo financeiro de hoje
          </h1>
        </div>
      </div>
      <div className="flex flex-row gap-3">
        <ComboxboxInputGroup />
        <ModeToggle />
      </div>
    </header>
  );
}
