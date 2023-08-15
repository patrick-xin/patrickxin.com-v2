/* eslint-disable */
// @ts-nocheck 
"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { useToast } from "@/components/ui/use-toast";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const COMMENT_FORM_SCHEMA = z.object({
  email: z.string().email({ message: "Invalid Email Address" }),
  nickname: z
    .string()
    .min(2, { message: "Are you sure this short name is yours?" })
    .max(15, { message: "Are you sure this long name is yours?" }),
  comment: z
    .string()
    .min(10, { message: "Leave something meaningful!" })
    .max(200, { message: "Wow, you've got lots to say!" }),
});

type FormSchemaType = z.infer<typeof COMMENT_FORM_SCHEMA>;

const CommentForm = () => {
  const form = useForm<FormSchemaType>({
    // eslint-disable-next-line
    resolver: zodResolver(COMMENT_FORM_SCHEMA),
  });
  const { toast } = useToast();
  // 2. Define a submit handler.
  function onSubmit(values: FormSchemaType) {
    toast({
      title: "Comment added!",
      description: "I'll get back to you soon. Remember to come back!",
    });
    console.log(values);
  }
  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="@your_email" {...field} />
                </FormControl>
                <FormDescription>
                  Don&lsquo;t worry. Your email will not display in public.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="nickname"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input type="text" placeholder="nickname" {...field} />
                </FormControl>
                <FormDescription>What shoud I call you?</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="comment"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Comment</FormLabel>
                <FormControl>
                  <Textarea
                    rows={10}
                    placeholder="Questions? Thoughts? Drop a comment here!"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="flex justify-end">
            <Button type="submit" variant="outline">
              Submit
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default CommentForm;
