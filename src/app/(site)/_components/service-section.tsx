import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { urlForImage } from "../../../../sanity/lib/image";
import Section from "@/components/ui/section";
import { IconArrowRight } from "@tabler/icons-react";

const ServiceSection = ({
  serviceCategory,
  index,
}: {
  serviceCategory: ServiceCategory;
  index: number;
}) => {
  return (
    <Section
      defaultPadding
      className={cn(
        "relative",
        index % 2 === 0,
        " wrapper border-border md:px-6 "
      )}
    >
      <Heading size={"lg"} className=" text-primary text-center mb-16 -mt-20">
        {serviceCategory.subTitle}
      </Heading>
      <div className="flex md:flex-row flex-col  gap-10">
        <div
          className={cn(
            "flex flex-col gap-2 max-w-md md:shrink-0 w-full",
            index % 2 === 0 ? "order-1 md:order-2" : "order-1"
          )}
        >
          <img
            src="https://i0.wp.com/saral.pro/wp-content/uploads/2022/03/GST.png?resize=500%2C500&ssl=1"
            className="w-400 h-400 object-contain"
          />
        </div>

        <ul
          className={cn(
            "grid md:grid-cols-2 gap-4  flex-1",
            index % 2 === 0 ? "order-1" : "order-2"
          )}
        >
          {serviceCategory.services.map((service) => {
            return (
              <li
                key={service.title}
                className="hover:-translate-y-5 transition ease-in-out duration-500 hover:shadow-2xl hover:shadow-indigo-600/80 rounded-sm "
              >
                <Link
                  href={`/services/${serviceCategory.slug.current}/${service.slug.current}`}
                  className={cn(
                    "h-full flex flex-col space-between bg-card  rounded-sm p-6"
                  )}
                >
                  <div className="flex flex-row items-start justify-start gap-5  h-full whitespace-normal w-full">
                    <img
                      alt={service?.icon?.alt ?? ""}
                      src={urlForImage(service?.icon)}
                      width={200}
                      height={200}
                      className="w-14 h-14 shrink-0 aspect-square object-contain"
                    />
                    <div className="flex gap-2 flex-col">
                      <Heading size={"md"} className="  text-gray-800">
                        {service.title}
                      </Heading>
                      <Text size={"sm"} className="line-clamp-4 text-gray-400">
                        {service?.description}
                      </Text>
                    </div>
                  </div>

                  <button
                    className={cn(
                      buttonVariants({ variant: "link" }),
                      "w-fit gap-2 items-center p-0 mt-auto"
                    )}
                  >
                    Know More <IconArrowRight className="w-4 h-4" />
                  </button>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </Section>
  );
};

export default ServiceSection;
