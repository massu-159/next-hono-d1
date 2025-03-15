import { getTodos } from "@/lib/todos";
import { Card, CardHeader, CardTitle } from "../ui/card";
import CompleteButton from "./button/complete";
import DeleteButton from "./button/delete";
import UpdateButton from "./button/update";
import { Todo } from "@/types/Todo";

const TodoList = async () => {
  const todos = await getTodos();
  return (
    <ul className='w-full max-w-md m-12'>
      {todos.length > 0 && todos.filter((todo: Todo) => !todo.isDone).map((todo: Todo) => (
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
      {todos.length === 0 && <p className='text-center'>TODOがありません</p>}
    </ul>
  );
}

export default TodoList