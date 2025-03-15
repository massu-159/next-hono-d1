"use client";

import { Button } from "@/components/ui/button";
import { deleteTodo } from "@/lib/todos";
import { Trash2 } from "lucide-react";
import { useRouter } from "next/navigation";

const DeleteButton = ({ id }: { id: number }) => {
  const router = useRouter();
  const handleDelete = async (id: number) => {
    try {
      await deleteTodo(id);
    } catch (error) {
      console.error(error);
    } finally {
      router.refresh();
    }
  };

  return (
    <Button variant='outline' className='text-red-500' onClick={() => handleDelete(id)}>
      <Trash2 />
    </Button>
  );
};

export default DeleteButton;
