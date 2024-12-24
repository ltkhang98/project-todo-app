import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

// import {
//   Select,
//   SelectContent,
//   SelectGroup,
//   SelectItem,
//   SelectLabel,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select";

// import {
//   Dialog,
//   DialogClose,
//   DialogContent,
//   DialogFooter,
//   DialogHeader,
//   DialogTitle,
//   DialogTrigger,
// } from "@/components/ui/dialog";

import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
// import { Popover } from "@radix-ui/react-popover";
// import { PopoverContent, PopoverTrigger } from "@/components/ui/popover";
// import { CalendarIcon } from "lucide-react";
// import { Calendar } from "@/components/ui/calendar";
// import { format } from "date-fns";
import React from "react";
// import { cn } from "@/lib/utils";
// import {
//   Table,
//   TableBody,
//   TableCaption,
//   TableCell,
//   TableHead,
//   TableHeader,
//   TableRow,
// } from "@/components/ui/table";
import { columns, Task } from "./columns";
import { DataTable } from "./data-table";

// const tasks = [
//   {
//     todoId: "INV001",
//     todo_title: "Xây dựng DATABASE",
//     todo_description: "Thiết kế DATABASE cho ứng dụng",
//     todo_status: "Chưa bắt đầu",
//     todo_start_date: "24/12/2024",
//     todo_end_date: "24/12/2024",
//   },
//   {
//     todoId: "INV002",
//     todo_title: "Thiết kế UI/UX",
//     todo_description: "Thiết kế UI/UX cho dự án ",
//     todo_status: "Hoàn thành",
//     todo_start_date: "01/12/2024",
//     todo_end_date: "02/12/2024",
//   },
//   {
//     todoId: "INV003",
//     todo_title: "Chỉnh sửa website",
//     todo_description: "Chỉnh sửa giao diện page home website",
//     todo_status: "Đang thực hiện",
//     todo_start_date: "14/12/2024",
//     todo_end_date: "18/12/2024",
//   },
//   {
//     todoId: "INV004",
//     todo_title: "Chỉnh sửa website",
//     todo_description: "Chỉnh sửa giao diện page home website",
//     todo_status: "Hủy bỏ",
//     todo_start_date: "14/12/2024",
//     todo_end_date: "18/12/2024",
//   },
//   {
//     todoId: "INV005",
//     todo_title: "Chỉnh sửa website",
//     todo_description: "Chỉnh sửa giao diện page home website",
//     todo_status: "Đang thực hiện",
//     todo_start_date: "14/12/2024",
//     todo_end_date: "18/12/2024",
//   },
//   {
//     todoId: "INV006",
//     todo_title: "Chỉnh sửa website",
//     todo_description: "Chỉnh sửa giao diện page home website",
//     todo_status: "Hủy bỏ",
//     todo_start_date: "14/12/2024",
//     todo_end_date: "18/12/2024",
//   },
//   {
//     todoId: "INV007",
//     todo_title: "Chỉnh sửa website",
//     todo_description: "Chỉnh sửa giao diện page home website",
//     todo_status: "Đang thực hiện",
//     todo_start_date: "14/12/2024",
//     todo_end_date: "18/12/2024",
//   },
//   {
//     todoId: "INV008",
//     todo_title: "Chỉnh sửa website",
//     todo_description: "Chỉnh sửa giao diện page home website",
//     todo_status: "Hủy bỏ",
//     todo_start_date: "14/12/2024",
//     todo_end_date: "18/12/2024",
//   },
//   {
//     todoId: "INV009",
//     todo_title: "Chỉnh sửa website",
//     todo_description: "Chỉnh sửa giao diện page home website",
//     todo_status: "Đang thực hiện",
//     todo_start_date: "14/12/2024",
//     todo_end_date: "18/12/2024",
//   },
//   {
//     todoId: "INV010",
//     todo_title: "Chỉnh sửa website",
//     todo_description: "Chỉnh sửa giao diện page home website",
//     todo_status: "Hủy bỏ",
//     todo_start_date: "14/12/2024",
//     todo_end_date: "18/12/2024",
//   },
// ];

async function getData(): Promise<Task[]> {
  // Fetch data from your API here.
  return [
    {
      todoId: "INV001",
      todo_title: "Xây dựng DATABASE",
      todo_description: "Thiết kế DATABASE cho ứng dụng",
      todo_status: "Chưa bắt đầu",
      todo_start_date: "24/12/2024",
      todo_end_date: "24/12/2024",
    },
    {
      todoId: "INV002",
      todo_title: "Thiết kế UI/UX",
      todo_description: "Thiết kế UI/UX cho dự án ",
      todo_status: "Hoàn thành",
      todo_start_date: "01/12/2024",
      todo_end_date: "02/12/2024",
    },
    {
      todoId: "INV003",
      todo_title: "Chỉnh sửa website",
      todo_description: "Chỉnh sửa giao diện page home website",
      todo_status: "Đang thực hiện",
      todo_start_date: "14/12/2024",
      todo_end_date: "18/12/2024",
    },
    {
      todoId: "INV004",
      todo_title: "Chỉnh sửa website",
      todo_description: "Chỉnh sửa giao diện page home website",
      todo_status: "Hủy bỏ",
      todo_start_date: "14/12/2024",
      todo_end_date: "18/12/2024",
    },
    {
      todoId: "INV005",
      todo_title: "Chỉnh sửa website",
      todo_description: "Chỉnh sửa giao diện page home website",
      todo_status: "Đang thực hiện",
      todo_start_date: "14/12/2024",
      todo_end_date: "18/12/2024",
    },
    {
      todoId: "INV006",
      todo_title: "Chỉnh sửa website",
      todo_description: "Chỉnh sửa giao diện page home website",
      todo_status: "Hủy bỏ",
      todo_start_date: "14/12/2024",
      todo_end_date: "18/12/2024",
    },
    {
      todoId: "INV007",
      todo_title: "Chỉnh sửa website",
      todo_description: "Chỉnh sửa giao diện page home website",
      todo_status: "Đang thực hiện",
      todo_start_date: "14/12/2024",
      todo_end_date: "18/12/2024",
    },
    {
      todoId: "INV008",
      todo_title: "Chỉnh sửa website",
      todo_description: "Chỉnh sửa giao diện page home website",
      todo_status: "Hủy bỏ",
      todo_start_date: "14/12/2024",
      todo_end_date: "18/12/2024",
    },
    {
      todoId: "INV009",
      todo_title: "Chỉnh sửa website",
      todo_description: "Chỉnh sửa giao diện page home website",
      todo_status: "Đang thực hiện",
      todo_start_date: "14/12/2024",
      todo_end_date: "18/12/2024",
    },
    {
      todoId: "INV010",
      todo_title: "Chỉnh sửa website",
      todo_description: "Chỉnh sửa giao diện page home website",
      todo_status: "Hủy bỏ",
      todo_start_date: "14/12/2024",
      todo_end_date: "18/12/2024",
    },
    {
      todoId: "INV011",
      todo_title: "Chỉnh sửa website",
      todo_description: "Chỉnh sửa giao diện page home website",
      todo_status: "Hủy bỏ",
      todo_start_date: "14/12/2024",
      todo_end_date: "18/12/2024",
    },
    {
      todoId: "INV012",
      todo_title: "Chỉnh sửa website",
      todo_description: "Chỉnh sửa giao diện page home website",
      todo_status: "Hủy bỏ",
      todo_start_date: "14/12/2024",
      todo_end_date: "18/12/2024",
    },
    // ...
  ];
}

export default async function TaskList() {
  // const [startdate, setStartDate] = React.useState<Date>();
  // const [enddate, setEndDate] = React.useState<Date>();
  const task = await getData();
  return (
    <div className="flex space-x-5">
      <Card className="w-[600px]">
        <CardHeader>
          <CardTitle>Thêm mới công việc</CardTitle>
        </CardHeader>
        <CardContent>
          <form action="">
            <div className="flex flex-col gap-4">
              <Label>Tiêu đề</Label>
              <Input type="text" placeholder="Tiêu đề" />
              <Label>Nội dung công việc</Label>
              <Textarea
                className="h-[200px]"
                placeholder="Nội dung công việc"
              />
              <div className="flex">
                <div>
                  <Label>Ngày bắt đầu</Label>
                  {/* <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant={"outline"}
                        className={cn(
                          "w-[240px] justify-start text-left font-normal",
                          !startdate && "text-muted-foreground"
                        )}
                      >
                        <CalendarIcon />
                        {startdate ? (
                          format(startdate, "PPP")
                        ) : (
                          <span>Chọn ngày</span>
                        )}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={startdate}
                        onSelect={setStartDate}
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover> */}
                </div>
                <div>
                  <Label>Ngày kết thúc</Label>
                  {/* <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant={"outline"}
                        className={cn(
                          "w-[240px] justify-start text-left font-normal",
                          !enddate && "text-muted-foreground"
                        )}
                      >
                        <CalendarIcon />
                        {enddate ? (
                          format(enddate, "PPP")
                        ) : (
                          <span>Chọn ngày</span>
                        )}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={enddate}
                        onSelect={setEndDate}
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover> */}
                </div>
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter>
          <Button>Thêm mới</Button>
        </CardFooter>
      </Card>
      <Card className="w-[1150px]">
        <CardHeader>
          <CardTitle>Danh sách công việc</CardTitle>
        </CardHeader>
        <CardContent>
          {/* <Table>
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
                  <TableCell>
                    <TableCell>{task.todo_status}</TableCell>
                  </TableCell>
                  <TableCell>
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button className="mr-[10px]">Chi tiết</Button>
                      </DialogTrigger>
                      <DialogContent className="sm:max-w-[425px]">
                        <DialogHeader>
                          <DialogTitle>{task.todo_title}</DialogTitle>
                        </DialogHeader>
                        <form action="">
                          <div className="flex flex-col gap-4">
                            <Label>
                              <b>Nội dung công việc:</b>
                            </Label>
                            <Label>{task.todo_description}</Label>
                            <div className="flex">
                              <div className="mr-[20px]">
                                <Label>
                                  <b>Ngày bắt đầu:</b> {task.todo_start_date}
                                </Label>
                              </div>
                              <div>
                                <Label>
                                  <b>Ngày kết thúc:</b> {task.todo_end_date}
                                </Label>
                              </div>
                            </div>
                            <div className="flex">
                              <div className="mr-[20px] mt-[8px]">
                                <Label>
                                  <b>Trạng thái:</b>
                                </Label>
                              </div>

                              <Select defaultValue={task.todo_status}>
                                <SelectTrigger className="w-[150px] h-[40px]">
                                  <SelectValue />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectGroup>
                                    <SelectLabel>
                                      Trạng thái công việc
                                    </SelectLabel>
                                    <SelectItem value="Hoàn thành">
                                      Hoàn thành
                                    </SelectItem>
                                    <SelectItem value="Đang thực hiện">
                                      Đang thực hiện
                                    </SelectItem>
                                    <SelectItem value="Chưa bắt đầu">
                                      Chưa bắt đầu
                                    </SelectItem>
                                    <SelectItem value="Hủy bỏ">
                                      Hủy bỏ
                                    </SelectItem>
                                  </SelectGroup>
                                </SelectContent>
                              </Select>
                            </div>
                          </div>
                        </form>
                        <DialogFooter>
                          <Button type="submit">Lưu</Button>
                          <DialogClose>
                            <Button type="button">Đóng</Button>
                          </DialogClose>
                        </DialogFooter>
                      </DialogContent>
                    </Dialog>
                    <Button className="mr-[10px]">Xóa</Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table> */}
          <DataTable columns={columns} data={task} />
        </CardContent>
      </Card>
    </div>
  );
}
