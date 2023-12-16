"use client";

import { useFormState } from "react-dom";
import * as actions from "@/actions";
import {
  Button,
  Input,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Textarea,
} from "@nextui-org/react";
import FormButton from "../common/form-button";

interface Props {
  slug: string;
}

export default function PostCreateForm({ slug }: Props) {
  const [formState, action] = useFormState(actions.createPost.bind(null, slug), { errors: {} });

  return (
    <Popover placement="left">
      <PopoverTrigger>
        <Button>Create a Post</Button>
      </PopoverTrigger>
      <PopoverContent>
        <form action={action}>
          <div className="flex flex-col gap-4 p-4 w-80">
            <h3 className="text-lg">Create a Post</h3>
            <Input
              name="title"
              label="Title"
              labelPlacement="outside"
              placeholder="Title"
              isInvalid={!!formState.errors.title}
              errorMessage={formState.errors.title?.join(", ")}
            >
              Title
            </Input>
            <Textarea
              name="content"
              label="Content"
              labelPlacement="outside"
              placeholder="Content"
              isInvalid={!!formState.errors.content}
              errorMessage={formState.errors.content?.join(", ")}
            />
            {formState.errors._form ? (
              <div className="p-2 bg-red-200 rounded border border-red-600 text-red-600">
                {formState.errors._form.join(", ")}
              </div>
            ) : null}
            <FormButton>Create</FormButton>
          </div>
        </form>
      </PopoverContent>
    </Popover>
  );
}
