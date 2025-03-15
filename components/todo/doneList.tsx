import { getTodos } from "@/lib/todos";
import { Card, CardHeader, CardTitle } from "../ui/card";
import CompleteButton from "./button/complete";
import DeleteButton from "./button/delete";
import UpdateButton from "./button/update";
import { Todo } from "@/types/Todo";

const DoneList = async () => {
  const todos = await getTodos();
  return (
    <>
      <h2 className='text-2xl font-bold'>完了したTODO</h2>
      <ul className='w-full max-w-md m-12'>
        {todos.length > 0 &&
          todos
            .filter((todo: Todo) => todo.isDone)
            .map((todo: Todo) => (
              <li key={todo.id} className='my-2'>
                <Card className='flex justify-between'>
                  <CardHeader>
                    <CardTitle>{todo.todo}</CardTitle>
                    <div className='flex justify-end gap-4'>
                      <CompleteButton todo={todo} />
                      <UpdateButton todo={todo} />
                      <DeleteButton id={todo.id} />
                    </div>
                  </CardHeader>
                </Card>
              </li>
            ))}
      </ul>
    </>
  );
};

export default DoneList;
