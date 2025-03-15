"use client";

import { useForm } from "react-hook-form";
import { Button } from "../ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "../ui/card";
import { FormField, FormItem, FormLabel, FormControl, FormMessage, Form } from "../ui/form";
import { Input } from "../ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { createTodo } from "@/lib/todos";
import { useRouter } from "next/navigation";

const formSchema = z.object({
  todo: z.string().min(1, { message: "入力必須です" }),
});

const CreateForm = () => {
  const router = useRouter();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      todo: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      await createTodo({todo: values.todo});
    } catch (error) {
      console.error(error);
    } finally {
      form.reset();
      router.refresh();
    }
  };

  return (
    <Card className='w-full max-w-md'>
      <CardHeader>
        <CardTitle>TODO APP</CardTitle>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <FormField
              control={form.control}
              name='todo'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    TODO<span className='text-red-500'>*</span>
                  </FormLabel>
                  <FormControl>
                    <Input placeholder='食材の買い物に行く' {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button className='my-2 w-1/3' type='submit'>
              登録する
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};

export default CreateForm;
