import Testimonials from "./_components/Testimonials";
import Pricing from "./_components/Pricing";
import { getServiceCategories } from "@/lib/sanity-fns";
import ServiceSection from "./_components/service-section";
import Hero from "./_components/Hero";
import ServicesMarquee from "@/components/marquee/ServicesMarquee";
import Review from "./_components/Review";

export const revalidate = 1;

const page = async () => {
  const [serviceCategories] = await Promise.all([getServiceCategories()]);

  return (
    <main className="flex flex-col">
      <Hero />
      <Pricing />
      <ul className="border-y-2 border-border divide-y-2 divide-border">
        {serviceCategories.map((category, index) => {
          return (
            <li key={category._id}>
              <ServiceSection index={index} serviceCategory={category} />
            </li>
          );
        })}
      </ul>
      <Testimonials />
      <Review />
      <div className="px-4 2xl:px-0">{/* <CTA /> */}</div>
    </main>
  );
};

export default page;
