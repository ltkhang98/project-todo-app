"use client";

import * as React from "react";
import {
  AudioWaveform,
  Bot,
  Calendar,
  Command,
  GalleryVerticalEnd,
  Home,
  Inbox,
  Search,
  Settings,
  SquareTerminal,
} from "lucide-react";

import { NavMain } from "@/components/nav-main";
import { NavUser } from "@/components/nav-user";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar";

// This is sample data.
const data = {
  user: {
    name: "admin",
    email: "admin@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  teams: [
    {
      name: "Acme Inc",
      logo: GalleryVerticalEnd,
      plan: "Enterprise",
    },
    {
      name: "Acme Corp.",
      logo: AudioWaveform,
      plan: "Startup",
    },
    {
      name: "Evil Corp.",
      logo: Command,
      plan: "Free",
    },
  ],
  navMain: [
    {
      title: "Công việc",
      url: "#",
      icon: SquareTerminal,
      isActive: true,
      items: [
        {
          title: "Danh sách công việc",
          url: "/task-list",
        },
        {
          title: "Hoàn thành",
          url: "#",
        },
        {
          title: "Chưa bắt đầu",
          url: "#",
        },
        {
          title: "Đang thực hiện",
          url: "#",
        },
        {
          title: "Hủy bỏ",
          url: "#",
        },
      ],
    },
    {
      title: "Nhóm",
      url: "#",
      icon: Bot,
      items: [
        {
          title: "Danh sách nhóm",
          url: "#",
        },
        {
          title: "Nhóm của bạn",
          url: "#",
        },
      ],
    },
  ],
};

const items = [
  {
    title: "Dashboard",
    url: "/",
    icon: Home,
  },
  {
    title: "Inbox",
    url: "#",
    icon: Inbox,
  },
  {
    title: "Calendar",
    url: "#",
    icon: Calendar,
  },
  {
    title: "Search",
    url: "#",
    icon: Search,
  },
  {
    title: "Settings",
    url: "#",
    icon: Settings,
  },
];

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <NavUser user={data.user} />
      </SidebarHeader>
      <SidebarContent>
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupLabel>Application</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {items.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild>
                      <a href={item.url}>
                        <item.icon />
                        <span>{item.title}</span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
              <NavMain items={data.navMain} />
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  );
}
