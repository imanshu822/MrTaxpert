"use client";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button, buttonVariants } from "../ui/button";
import { MenuIcon } from "lucide-react";
import { Heading } from "../ui/heading";
import Link from "next/link";
import { Text } from "../ui/text";
import { FancyButton } from "../ui/fancy-button";
import { useState } from "react";
import { cn } from "@/lib/utils";
const MobileMenu = ({
  serviceCategories,
}: {
  serviceCategories: ServiceCategory[];
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild className="md:hidden block">
        <Button
          variant={"secondary"}
          size={"icon"}
          className="flex items-center text-foreground/75 justify-center"
        >
          <MenuIcon className="w-6 h-6" />
        </Button>
      </SheetTrigger>
      <SheetContent
        side={"left"}
        className="flex overflow-scroll p-4 flex-col gap-6"
      >
        {serviceCategories.map((category) => {
          return (
            <div key={category._id} className="flex flex-col gap-4">
              <Heading size={"sm"}>{category.title}</Heading>
              <ul className="  w-full flex flex-col">
                {category.services.map((service) => {
                  return (
                    <li key={service._id}>
                      <Link
                        href={`/services/${category.slug.current}/${service.slug.current}`}
                        onClick={() => {
                          setIsOpen(false);
                        }}
                        className="flex  p-2 rounded-sm hover:bg-muted items-center gap-4"
                      >
                        {/* <div
                      className={cn(
                        "p-1 rounded-sm w-fit",
                      )}
                    >
                      <service.icon className="w-4 h-4" />
                    </div> */}
                        <Text size={"sm"} className="text-foreground">
                          {service.title}
                        </Text>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          );
        })}

        <div className="mt-auto flex flex-col gap-4">
          {/* <FancyButton size={"lg"} className="w-full">
            Get Started
          </FancyButton> */}
          <Link
            href={"/contact-us"}
            className={cn(
              buttonVariants({
                variant: "default",
                size: "lg",
              }),
              "w-full"
            )}
          >
            Contact Us
          </Link>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileMenu;
