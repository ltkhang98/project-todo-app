"use client";

import * as React from "react";
import {
  AudioWaveform,
  Bot,
  Command,
  GalleryVerticalEnd,
  SquareTerminal,
} from "lucide-react";

import { NavMain } from "@/components/nav-main";
import { NavUser } from "@/components/nav-user";
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
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
      title: "Groups",
      url: "#",
      icon: Bot,
      items: [
        {
          title: "Groups List",
          url: "#",
        },
        {
          title: "My Groups",
          url: "#",
        },
      ],
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <NavUser user={data.user} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  );
}
