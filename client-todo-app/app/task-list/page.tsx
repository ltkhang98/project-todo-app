import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const tasks = [
  {
    todoId: "INV001",
    todo_title: "Chỉnh sửa website",
    todo_description: "Chỉnh sửa giao diện page home website",
    todo_status: "Not Started",
    todo_start_date: "24/12/2024",
    todo_end_date: "24/12/2024",
  },
  {
    todoId: "INV002",
    todo_title: "Chỉnh sửa website",
    todo_description: "Chỉnh sửa giao diện page home website",
    todo_status: "Completed",
    todo_start_date: "01/12/2024",
    todo_end_date: "02/12/2024",
  },
  {
    todoId: "INV003",
    todo_title: "Chỉnh sửa website",
    todo_description: "Chỉnh sửa giao diện page home website",
    todo_status: "Progress",
    todo_start_date: "14/12/2024",
    todo_end_date: "18/12/2024",
  },
];

export default function TaskList() {
  return (
    <div>
      <Button className="p-[20px] mb-[20px]">Thêm mới công việc</Button>
      <Card className="w-[auto]">
        <CardHeader>
          <CardTitle>Danh sách công việc</CardTitle>
          <CardDescription>Danh sách tổng hợp các công việc</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableCaption>Danh sách công việc của bạn.</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px]">ID</TableHead>
                <TableHead>Tiêu đề</TableHead>
                <TableHead>Mô tả</TableHead>
                <TableHead>Ngày bắt đầu</TableHead>
                <TableHead>Ngày kết thúc</TableHead>
                <TableHead>Trạng thái</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {tasks.map((task) => (
                <TableRow key={task.todoId}>
                  <TableCell className="font-medium">{task.todoId}</TableCell>
                  <TableCell>{task.todo_title}</TableCell>
                  <TableCell>{task.todo_description}</TableCell>
                  <TableCell>{task.todo_start_date}</TableCell>
                  <TableCell>{task.todo_end_date}</TableCell>
                  <TableCell>{task.todo_status}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
