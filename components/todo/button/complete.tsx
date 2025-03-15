"use client";

import { Button } from "@/components/ui/button";
import { updateTodo } from "@/lib/todos";
import { Todo } from "@/types/Todo";
import { CircleCheckBig } from "lucide-react";
import { useRouter } from "next/navigation";
const CompleteButton = ({ todo }: { todo: Todo }) => {
  const router = useRouter();
  const handleComplete = async (todo: Todo) => {
    const updatedTodo = {
      ...todo,
      isDone: true,
    };
    try {
      await updateTodo(updatedTodo);
    } catch (error) {
      console.error(error);
    } finally {
      router.refresh();
    }
  };

  return (
    <Button onClick={() => handleComplete(todo)}>
      <CircleCheckBig />
      完了
    </Button>
  );
};

export default CompleteButton;
