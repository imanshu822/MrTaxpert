"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { FancyButton } from "@/components/ui/fancy-button";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Toaster } from "@/components/ui/sonner";
import { Text } from "@/components/ui/text";
import { cn } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { PhoneCallIcon, UserIcon } from "lucide-react";
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { client } from "../../../../../../../sanity/lib/client";
import { toast } from "sonner";

const formSchema = z.object({
  name: z.string(),
  phone: z.string(),
});

const CTAForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      phone: "",
    },
  });

  const handleSubmit = (values: z.infer<typeof formSchema>) => {
    toast.loading("Sending Message");
    const contact = {
      _type: "enquiry",
      name: values.name,
      phone: values.phone,
    };
    client
      .create(contact)
      .then(() => {
        form.reset();
        toast.success("Our Team member will contact you soon");
        form.reset();
      })
      .catch((err) => {
        toast.error("Unable to Send message");
        console.log(err);
      })
      .finally(() => {
        toast.dismiss();
      });
  };

  return (
    <Form {...form}>
      <Toaster />
      <form
        onSubmit={form.handleSubmit(handleSubmit)}
        className="flex flex-col gap-4  w-full"
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => {
            return (
              <FormItem className="flex-1">
                <FormControl>
                  <Input icon={UserIcon} {...field} placeholder="Your Name" />
                </FormControl>
              </FormItem>
            );
          }}
        />
        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => {
            return (
              <FormItem className="flex-1">
                <FormControl>
                  <Input
                    icon={PhoneCallIcon}
                    {...field}
                    placeholder="Your Phone number"
                  />
                </FormControl>
              </FormItem>
            );
          }}
        />
        <FancyButton className="rounded-full px-6 mt-10">Enquiry</FancyButton>
      </form>
    </Form>
  );
};

const CTA = ({ className }: { className?: string }) => {
  return (
    <Card className={cn(className)}>
      <CardHeader>
        <CardTitle>
          Submit your Details to get an Instant All-inclusive Quote
        </CardTitle>
      </CardHeader>
      <CardContent>
        <CTAForm />
      </CardContent>
    </Card>
  );
};

export default CTA;
