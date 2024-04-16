"use client";
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import { toast } from 'sonner';
import * as z from 'zod';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Toaster } from '@/components/ui/sonner';
import { Text } from '@/components/ui/text';
import { Heading } from '@/components/ui/heading';
import { Form, FormField, FormItem, FormControl, FormMessage } from '@/components/ui/form';
import { client } from '../../../../sanity/lib/client';





const formSchema = z.object({
  rating: z.number().int().min(1, "Rating is required").max(5, "Rating must be between 1 and 5"),
  review: z.string().min(2, "Review is required"),
});

const Review = () => {

    const [state, setState] = useState({
        review: '',
        rating: 0 // Initial value
      })
    
      function handleChange(selectedValue: any) {
        console.log(selectedValue)
    
        setState((prevState) => ({
          ...prevState,
          rating: selectedValue
        }))
      }

  const [rating, setRating] = useState(0) // Initial value

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      review: "",
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    toast.loading("Submitting Review");
    const review = {
      _type: "review",
      review: values.review,
      rating: rating
    };
    client
      .create(review)
      .then(() => {
        form.reset();
        toast.success("Thank you for submitting your review.");
      })
      .catch((err) => {
        toast.error("Unable to submit review");
        console.log(err);
      })
      .finally(() => {
        toast.dismiss();
      });
  };

  return (
    <section className="py-[clamp(4rem,5vw,6rem)]">
      <div className="text-center mx-auto max-w-3xl">
        <Heading size={"lg"}>Submit a Review</Heading>
        <Text className="max-w-md mx-auto">Be a Part of Our Story.</Text>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="grid grid-cols-1 gap-4 ">
            <Toaster />
            <div className="flex justify-center">
            <Rating onChange={handleChange} value={state.rating} style={{ maxWidth: 150 }}/>
            </div>
            <FormField
              control={form.control}
              name="review"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <div className="flex justify-center">
                      <Textarea className="w-1/2 resize-none" {...field} />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex justify-center">
              <Button size={"lg"}>Submit</Button>
            </div>
          </form>
        </Form>
      </div>
    </section>
  );
};

export default Review;
