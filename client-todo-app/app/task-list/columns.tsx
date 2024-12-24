"use client";

import { Button } from "@/components/ui/button";
import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown } from "lucide-react";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Task = {
  todoId: string;
  todo_title: string;
  todo_description: string;
  todo_status: string;
  todo_start_date: string;
  todo_end_date: string;
};

export const columns: ColumnDef<Task>[] = [
  {
    accessorKey: "todoId",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          ID
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    accessorKey: "todo_title",
    header: "Tiêu đề",
  },
  {
    accessorKey: "todo_start_date",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Ngày bắt đầu
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    accessorKey: "todo_end_date",
    header: "Ngày kết thúc",
  },
  {
    accessorKey: "todo_status",
    header: "Trạng thái",
  },
];
