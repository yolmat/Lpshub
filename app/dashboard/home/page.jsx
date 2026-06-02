import { AppSidebar } from "@/components/app-sidebar";
import { SectionCards } from "@/components/section-cards";
import { SiteHeader } from "@/components/site-header";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";

import ChartVerticalBar from "@/components/chartVerticalBar";
import { ChartPieLegend } from "@/components/chartPieLegend";
import { ChartHorizontalBar } from "@/components/chartHorizontalBar";
import { ChartLineDots } from "@/components/chartLineDots";
import { FinancialTarget } from "@/components/financialTarget";

export default function Page() {
  return (
    <SidebarProvider
      style={{
        "--sidebar-width": "calc(var(--spacing) * 72)",
        "--header-height": "calc(var(--spacing) * 12)",
      }}
    >
      <AppSidebar variant="inset" />
      <SidebarInset>
        <SiteHeader />
        <div className="flex flex-1 flex-col">
          <div className="@container/main flex flex-1 flex-col gap-2">
            <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
              <SectionCards />
              <div className="px-4 lg:px-6">
                <div className="grid grid-cols-1 gap-4 @xl/main:grid-cols-2 @5xl/main:grid-cols-3">
                  <ChartVerticalBar />
                  <ChartPieLegend />
                </div>
              </div>
              <div className="px-4 lg:px-6">
                <div className="flex flex-col @5xl/main:flex-row gap-4 justify-center items-center">
                  <ChartHorizontalBar />
                  <ChartLineDots />
                </div>
              </div>
              <div className="px-4 lg:px-6">
                <div className="grid grid-cols-1 gap-4 @xl/main:grid-cols-2 @5xl/main:grid-cols-2">
                  <FinancialTarget />
                </div>
              </div>
            </div>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
