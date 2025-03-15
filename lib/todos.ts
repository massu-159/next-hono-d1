import { Todo } from "@/types/Todo";

// 1件取得
export async function getTodo(id: Todo["id"]) {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/todos/${id}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}

// 全件取得
export async function getTodos() {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/todos`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}

// 新規作成
export async function createTodo({ todo }: { todo: Todo["todo"] }) {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/todos`, {
      method: 'POST',
      body: JSON.stringify({ todo }),
    });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
  } catch (error) {
    console.error(error);
  }
}

// 更新
export async function updateTodo(todoItem: Todo) {
  const { id, todo, isDone } = todoItem;
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/todos/${id}`, {
      method: 'PUT',
      body: JSON.stringify({ todo, isDone }),
    });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
  } catch (error) {
    console.error(error);
  }
}

// 削除
export async function deleteTodo(id: Todo["id"]) {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/todos/${id}`, {
      method: 'DELETE',
    });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
  } catch (error) {
    console.error(error);
  }
}

