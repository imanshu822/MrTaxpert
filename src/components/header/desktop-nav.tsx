"use client";
import {
  BanknoteIcon,
  BuildingIcon,
  CurrencyIcon,
  DollarSign,
  DollarSignIcon,
  FileTextIcon,
  MenuIcon,
  PencilRuler,
  PercentIcon,
  PiggyBankIcon,
  SearchCheck,
  UserIcon,
  WalletIcon,
} from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import { Text } from "../ui/text";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "../ui/button";
import category from "../../../sanity/schemaTypes/category";
import { Heading } from "../ui/heading";
import { cn } from "@/lib/utils";
import { urlForImage } from "../../../sanity/lib/image";
const DesktopHeaderNavigation = ({
  serviceCategories,
}: {
  serviceCategories: ServiceCategory[];
}) => {
  return (
    <NavigationMenu className="ml-6 md:block hidden">
      <NavigationMenuList>
        <NavigationMenuIndicator />
        {serviceCategories.map((category, index) => {
          return (
            <NavigationMenuItem
              key={category._id}
              className={cn(
                "hidden",
                index < 2 && "block",
                index >= 2 && "xl:block"
              )}
            >
              <NavigationMenuTrigger className="text-sm sm:text-base">{category.title}</NavigationMenuTrigger>
              <NavigationMenuContent className="p-2 flex flex-col gap-4 rounded-none w-full">
                <Heading size={"xs"} className=" px-4 pt-4 text-foreground/50 ">
                  Services we provide :
                </Heading>
                <ul className="min-w-[35rem]  gap-2 grid grid-cols-4">
                  {category.services.map((service) => {
                    return (
                      <li key={service._id}>
                        <NavigationMenuLink
                          href={`/services/${category.slug.current}/${service.slug.current}`}
                          className=" w-full p-4 rounded-sm hover:bg-muted flex flex-col max-w-xs items-center gap-2 text-center h-full"
                        >
                          <img
                            alt={service?.icon?.alt ?? ""}
                            src={urlForImage(service?.icon)}
                            width={200}
                            height={200}
                            className="w-6 h-6 aspect-square object-contain"
                          />
                          <Text
                            size={"sm"}
                            className="text-foreground line-clamp-2 font-medium"
                          >
                            {service.title}
                          </Text>
                        </NavigationMenuLink>
                      </li>
                    );
                  })}
                </ul>
                <div className="w-full flex flex-col gap-2 bg-secondary rounded-sm p-4">
                  <Heading size={"sm"}>{category.title}</Heading>
                  {/* <Text size={"xs"} className="text-foreground line-clamp-3">
                    {category.description}
                  </Text> */}
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>
          );
        })}
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default DesktopHeaderNavigation;
