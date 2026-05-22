"use client";

import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

import { usePathname } from "next/navigation";

export function NavMain({ items }) {
  const pathname = usePathname();
  const url = `/dashboard/`;

  console.log(pathname);

  return (
    <SidebarGroup>
      <SidebarGroupContent className="flex flex-col gap-2">
        <SidebarGroupLabel className="font-medium opacity-80">
          Painel
        </SidebarGroupLabel>

        <SidebarMenu className="gap-1">
          {items.map((item) => (
            <SidebarMenuItem key={item.title}>
              <SidebarMenuButton
                tooltip={item.title}
                className={`transition cursor-pointer py-7 md:py-5 ${pathname === url + item.url ? "bg-primary text-muted font-semibold hover:opacity-80 hover:bg-primary hover:text-muted" : "hover:bg-surface-hover"}`}
              >
                {console.log(pathname === url + item.url)}
                {item.icon}
                <span
                  className={`${pathname === url + item.url ? "text-red" : "text-blue"}`}
                >
                  {item.title}
                </span>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  );
}
