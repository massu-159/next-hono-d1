
import CreateForm from "@/components/todo/createForm";
import DoneList from "@/components/todo/doneList";
import TodoList from "@/components/todo/todoList";

export default function Home() {
  return (
    <div className='grid items-center justify-items-center p-12 font-[family-name:var(--font-geist-sans)]'>
      <CreateForm />
      <TodoList />
      <DoneList />
    </div>
  );
}
