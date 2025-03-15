"use client";

import { Button } from "@/components/ui/button";
import { Todo } from "@/types/Todo";
// import { updateTodo } from "@/lib/todos";
import { SquarePen } from "lucide-react";
import { useRouter } from "next/navigation";

const UpdateButton = ({ todo }: { todo: Todo }) => {
  const router = useRouter();
  const handleUpdate = async (todo: Todo) => {
    try {
      // await updateTodo(id);
      console.log("更新", todo);
    } catch (error) {
      console.error(error);
    } finally {
      router.refresh();
    }
  };

  return (
    <Button variant='secondary' onClick={() => handleUpdate(todo)}>
      <SquarePen />
    </Button>
  );
};

export default UpdateButton;
