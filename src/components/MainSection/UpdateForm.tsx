import React, { useState } from "react";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { LiaEdit } from "react-icons/lia";
import { useTodo } from "@/context/todoContext";

function UpdateForm({ todo }: { todo: todo }) {
  const { updateTodos, todos }: any = useTodo();
  const [updateTitle, setUpdateTitle] = useState(todo.title);
  const [updateDescription, setUpdateDescription] = useState(todo.description);
  const [isTodoEditable, setIsTodoEditable] = useState(false);

  const editForm = () => {
    if (!updateTitle && !updateDescription)
      return alert("Something Write here..");
    updateTodos(todo.id, {
      ...todo,
      title: updateTitle,
      description: updateDescription,
    });
    setIsTodoEditable(false);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <LiaEdit
          className={` text-green-500 hover:rotate-12 hover:text-green-600 hover:duration-300 hover:delay-75 flex transition-all ease-in-out text-xl `}
        />
      </DialogTrigger>

      <DialogContent className="sm:max-w-[425px]">
        <div className="grid gap-4 py-4">
          <div className="w-full items-center gap-4">
            <Input
              required
              id="title"
              placeholder="Task Title"
              value={updateTitle}
              onChange={(e) => setUpdateTitle(e.target.value)}
            />
          </div>
          <div className="w-full items-center gap-4">
            <Textarea
              placeholder="Enter Your Task Details..."
              value={updateDescription}
              onChange={(e) => setUpdateDescription(e.target.value)}
              cols={30}
              rows={6}
            />
          </div>
        </div>
        <DialogFooter className=" text-white  flex justify-end">
          <Button
            type="submit"
            variant={"outline"}
            className={`flex justify-end w-fit bg-green-400 hover:bg-green-500 hover:duration-300 hover:delay-75 transition-all ease-in-out `}
            onClick={() => {
              if (todo.completed) return;
              if (isTodoEditable) {
                editForm();
              } else {
                return setIsTodoEditable((prev: any) => !prev);
              }
            }}
          >
            Update
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default UpdateForm;
