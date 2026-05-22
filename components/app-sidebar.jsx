"use client";

import * as React from "react";

import IconLopes from "./iconLopes";

import { NavMain } from "@/components/nav-main";
import { NavSecondary } from "@/components/nav-secondary";
import { NavUser } from "@/components/nav-user";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
} from "@/components/ui/sidebar";
import {
  LayoutDashboardIcon,
  WalletIcon,
  ReceiptIcon,
  TrendingUpIcon,
  PieChartIcon,
  TargetIcon,
  UsersIcon,
  SettingsIcon,
  HelpCircleIcon,
} from "lucide-react";

import { Separator } from "./ui/separator";

const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  navMain: [
    {
      title: "Visão Geral",
      url: "home",
      icon: <LayoutDashboardIcon />,
    },
    {
      title: "Recebimento",
      url: "#",
      icon: <WalletIcon />,
    },
    {
      title: "Dívida",
      url: "#",
      icon: <ReceiptIcon />,
    },
    {
      title: "Fluxo de caixa",
      url: "#",
      icon: <TrendingUpIcon />,
    },
    {
      title: "Receitas",
      url: "#",
      icon: <PieChartIcon />,
    },
    {
      title: "Metas",
      url: "#",
      icon: <TargetIcon />,
    },
    {
      title: "Clientes",
      url: "#",
      icon: <UsersIcon />,
    },
  ],
  navSecondary: [
    {
      title: "Settings",
      url: "#",
      icon: <SettingsIcon />,
    },
    {
      title: "Get Help",
      url: "#",
      icon: <HelpCircleIcon />,
    },
  ],
};

export function AppSidebar({ ...props }) {
  return (
    <Sidebar collapsible="offcanvas" {...props}>
      <SidebarHeader className="flex flex-row items-center w-full">
        <IconLopes className="size-5" />
        <div className="flex flex-col">
          <span className="text-base font-semibold">LPS HUB</span>
          <span className="text-sm font-extralight">Lopes Soluções</span>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <Separator className="mt-auto" />
        <NavSecondary items={data.navSecondary} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  );
}
