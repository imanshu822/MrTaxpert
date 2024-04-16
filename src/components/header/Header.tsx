import { Heading } from "../ui/heading";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { fancyButtonVariants } from "../ui/fancy-button";
import { getServiceCategories } from "@/lib/sanity-fns";
import MobileMenu from "./mobile-menu";
import DesktopHeaderNavigation from "./desktop-nav";
import { PartyPopperIcon } from "lucide-react";

const Header = async () => {
  const [serviceCategories] = await Promise.all([getServiceCategories()]);

  return (
    <header className="sticky w-full top-0 z-50 bg-card  border-b border-border">
      <div className="bg-primary flex items-center justify-center text-white py-2 px-4 shadow-primary/50 shadow-sm text-xs">
        <PartyPopperIcon className="w-5 h-5 mr-2 shrink-0" /> Buy one service get another one absolutey free!!*
      </div>
      <div className="wrapper flex  py-3 justify-between items-center">
        <div className="flex gap-2 items-center">
          <Link href={"/"}>
            <Heading size={"md"} className="logo-heading">
              <img
                src="/mrtaxpert.png"
                alt="logo"
                width="200px"
                className=" h-10 w-full object-contain"
              />
            </Heading>
          </Link>
        </div>
        <DesktopHeaderNavigation serviceCategories={serviceCategories} />
        <Link
          href={"/contact-us"}
          className={cn(fancyButtonVariants({}), "rounded-full md:flex hidden")}
        >
          Contact Us
        </Link>
        <MobileMenu serviceCategories={serviceCategories} />
      </div>
    </header>
  );
};

export default Header;
