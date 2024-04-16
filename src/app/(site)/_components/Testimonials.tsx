import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";
import { QuoteIcon, StarIcon } from "lucide-react";
import React from "react";

const testimonials = [
  {
    name: "Aarav Sharma",
    company: "Sharma Enterprises",
    text: "MrTaxpert has been a game-changer for our business. Their GST services are top-notch, and the support team is always ready to assist. Highly recommended!",
    date: "January 15, 2023",
  },
  {
    name: "Neha Patel",
    company: "Patel & Associates",
    text: "Invoicing used to be a headache until we discovered MrTaxpert's invoicing solutions. It's simplified our billing process, saving us time and effort. Fantastic service!",
    date: "February 28, 2023",
  },
  {
    name: "Raj Singhania",
    company: "Singhania & Co.",
    text: "I can't thank MrTaxpert enough for their expert tax consultation. They've been instrumental in helping us navigate complex tax scenarios. Trustworthy and professional!",
    date: "March 10, 2023",
  },
  {
    name: "Ananya Verma",
    company: "Verma Innovations",
    text: "MrTaxpert's ITR filing services are prompt and accurate. They make tax season a breeze. Their platform is user-friendly, and their team is always responsive.",
    date: "April 5, 2023",
  },
];

const Testimonials = () => {
  return (
    <section className="py-[clamp(4rem,5vw,6rem)]">
      <div className="wrapper flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          {/* <Heading
            size={"sm"}
            className="font-normal text-center text-primary mx-auto"
          >
            Discover how MrTaxpert has empowered individuals and businesses
          </Heading> */}
          <Heading size={"xl"} className="text-center mx-auto max-w-3xl">
            Client Success Stories
          </Heading>
          <Text className="text-center max-w-md mx-auto">
            Explore how MrTaxpert has been a catalyst for success in the
            financial journeys of our clients.
          </Text>
        </div>
        <div className="bg-primary/10 my-4 rounded-full p-6 w-fit mx-auto">
          <QuoteIcon className="w-6 text-primary h-6" />
        </div>
        <Carousel>
          <CarouselContent>
            {testimonials.map((testimonial) => {
              return (
                <CarouselItem key={testimonial.name}>
                  <div className="flex flex-col items-center justify-center text-center gap-6">
                    <div className="flex gap-1 items-center">
                      {Array.from({ length: 5 }).map((_, i) => {
                        return (
                          <StarIcon
                            className="fill-yellow-400 w-4 h-4 text-yellow-400"
                            key={i}
                          />
                        );
                      })}
                    </div>
                    <Text className="text-foreground max-w-xs" size={"md"}>
                      {testimonial.text}
                    </Text>

                    <div className="flex flex-col gap-1 items-center justify-center">
                      <div className="w-10 h-10 rounded-full bg-primary aspect-square mb-2 "></div>
                      <Heading size={"sm"}>{testimonial.name}</Heading>
                      <Text size={"sm"}>{testimonial.company}</Text>
                    </div>
                  </div>
                </CarouselItem>
              );
            })}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
};

export default Testimonials;
