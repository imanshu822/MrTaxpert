import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";
import { cn } from "@/lib/utils";
import {
  BanknoteIcon,
  BuildingIcon,
  DollarSignIcon,
  FileTextIcon,
  PencilRuler,
  PercentIcon,
  PiggyBankIcon,
  SearchCheck,
  UserIcon,
  WalletIcon,
} from "lucide-react";
import React from "react";
const services = [
  {
    service: "Account Payable",
    icon: BanknoteIcon,
    color: "text-green-500",
    bgColor: "bg-green-500/10",
    description:
      "Streamline your financial processes with our Account Payable services. Efficiently manage and process your payable transactions, ensuring accuracy, transparency, and compliance with industry standards.",
  },
  {
    service: "MaxITC",
    icon: PiggyBankIcon,
    color: "text-yellow-500",
    bgColor: "bg-yellow-500/10",
    description:
      "Revolutionize your IT landscape with MaxITC services. From expert consultations to cost optimization and infrastructure management, we tailor solutions to elevate your technology infrastructure, keeping you at the forefront of innovation.",
  },
  {
    service: "E-Invoicing and E-Way Bill",
    icon: FileTextIcon,
    color: "text-blue-500",
    bgColor: "bg-blue-500/10",
    description:
      "Embrace the future of business transactions with our E-Invoicing and E-Way Bill solutions. Digitize your invoicing process, ensure compliance, and simplify logistics with our user-friendly and advanced digital solutions.",
  },
  {
    service: "TDS (Tax Deducted at Source)",
    icon: PercentIcon,
    color: "text-rose-500",
    bgColor: "bg-rose-500/10",
    description:
      "Ensure compliance with tax regulations through our TDS services. We provide expert assistance in calculating, deducting, and remitting TDS, helping you navigate tax obligations seamlessly and efficiently.",
  },
  {
    service: "Financing",
    icon: WalletIcon,
    color: "text-violet-500",
    bgColor: "bg-violet-500/10",
    description:
      "Fuel your business growth with our Financing solutions. Whether you're a startup or an established enterprise, we offer tailored business loans, financial planning, and investment advisory services to unlock your financial potential.",
  },
];
const businessServices = [
  {
    service: "Business Registration",
    icon: PencilRuler,
    color: "text-purple-500",
    bgColor: "bg-purple-500/10",
    description:
      "Streamline your financial processes with our Account Payable services. Efficiently manage and process your payable transactions, ensuring accuracy, transparency, and compliance with industry standards.",
  },
  {
    service: "Compliance",
    icon: SearchCheck,
    color: "text-teal-500",
    bgColor: "bg-teal-500/10",
    description:
      "Revolutionize your IT landscape with MaxITC services. From expert consultations to cost optimization and infrastructure management, we tailor solutions to elevate your technology infrastructure, keeping you at the forefront of innovation.",
  },
  {
    service: "Change in business",
    icon: FileTextIcon,
    color: "text-blue-500",
    bgColor: "bg-blue-500/10",
    description:
      "Embrace the future of business transactions with our E-Invoicing and E-Way Bill solutions. Digitize your invoicing process, ensure compliance, and simplify logistics with our user-friendly and advanced digital solutions.",
  },
];
const complianceServices = [
  {
    service: "Annual Compliance of LLP",
    icon: PencilRuler,
    color: "text-purple-500",
    bgColor: "bg-purple-500/10",
    description:
      "Streamline your financial processes with our Account Payable services. Efficiently manage and process your payable transactions, ensuring accuracy, transparency, and compliance with industry standards.",
  },
  {
    service: "Annual Compliance For Private Limited",
    icon: SearchCheck,
    color: "text-teal-500",
    bgColor: "bg-teal-500/10",
    description:
      "Revolutionize your IT landscape with MaxITC services. From expert consultations to cost optimization and infrastructure management, we tailor solutions to elevate your technology infrastructure, keeping you at the forefront of innovation.",
  },
  {
    service: "Nidhi Company Annual Compliance",
    icon: FileTextIcon,
    color: "text-blue-500",
    bgColor: "bg-blue-500/10",
    description:
      "Embrace the future of business transactions with our E-Invoicing and E-Way Bill solutions. Digitize your invoicing process, ensure compliance, and simplify logistics with our user-friendly and advanced digital solutions.",
  },
];
const changeinBusinessServices = [
  {
    service: "Change In Directors",
    icon: PencilRuler,
    color: "text-purple-500",
    bgColor: "bg-purple-500/10",
    description:
      "Streamline your financial processes with our Account Payable services. Efficiently manage and process your payable transactions, ensuring accuracy, transparency, and compliance with industry standards.",
  },
  {
    service: "Change in Registered Office",
    icon: SearchCheck,
    color: "text-teal-500",
    bgColor: "bg-teal-500/10",
    description:
      "Revolutionize your IT landscape with MaxITC services. From expert consultations to cost optimization and infrastructure management, we tailor solutions to elevate your technology infrastructure, keeping you at the forefront of innovation.",
  },
  {
    service: "Increase in Authorized Share Capital",
    icon: PencilRuler,
    color: "text-purple-500",
    bgColor: "bg-purple-500/10",
    description:
      "Streamline your financial processes with our Account Payable services. Efficiently manage and process your payable transactions, ensuring accuracy, transparency, and compliance with industry standards.",
  },
  {
    service: "Winding Up of a Company",
    icon: SearchCheck,
    color: "text-teal-500",
    bgColor: "bg-teal-500/10",
    description:
      "Revolutionize your IT landscape with MaxITC services. From expert consultations to cost optimization and infrastructure management, we tailor solutions to elevate your technology infrastructure, keeping you at the forefront of innovation.",
  }
];
const consumerServices = [
  {
    service: "ITR filing",
    icon: PencilRuler,
    color: "text-purple-500",
    bgColor: "bg-purple-500/10",
    description:
      "Streamline your financial processes with our Account Payable services. Efficiently manage and process your payable transactions, ensuring accuracy, transparency, and compliance with industry standards.",
  },
  {
    service: "Tax consultant service",
    icon: SearchCheck,
    color: "text-teal-500",
    bgColor: "bg-teal-500/10",
    description:
      "Revolutionize your IT landscape with MaxITC services. From expert consultations to cost optimization and infrastructure management, we tailor solutions to elevate your technology infrastructure, keeping you at the forefront of innovation.",
  },
];

const Services = () => {
  return (
    <section className="py-[clamp(4rem,5vw,6rem)] flex flex-col">
      <div className="wrapper flex flex-col gap-8">
        <div className="wrapper flex flex-col gap-4 items-center">
          <Heading size={"lg"} className="text-center max-w-2xl">
            Our services
          </Heading>
          {/* <Text>Effortless Taxation for Individuals and Businesses</Text> */}
        </div>{" "}
        <div className=" flex flex-col gap-6 mt-6">
          <Heading
            size={"lg"}
            className="text-start flex gap-2 items-center max-w-2xl"
          >
            <UserIcon className="w-5 h-5" /> For Individual
          </Heading>
          <ul className="w-full grid grid-cols-1 md:grid-cols-4 gap-4">
            {services.map((service, index) => {
              return (
                <li key={service.service}>
                  <Card className="hover:shadow-2xl hover:shadow-black/10 duration-300 ease-in-out">
                    <CardHeader className="flex flex-col gap-2 pb-2">
                      <div
                        className={cn(
                          "p-3 rounded-[.5rem] w-fit",
                          service.bgColor,
                          service.color
                        )}
                      >
                        <service.icon className="w-5 h-5" />
                      </div>
                      <Heading size={"md"} className="">
                        {service.service}
                      </Heading>
                    </CardHeader>
                    <CardContent className="">
                      <Text size={"xs"} className="line-clamp-3">
                        {service.description}
                      </Text>
                    </CardContent>
                  </Card>
                </li>
              );
            })}
          </ul>
        </div>
        <div className=" flex flex-col gap-6">
          <Heading
            size={"lg"}
            className="text-start flex gap-2 items-center max-w-2xl"
          >
            <BuildingIcon className="w-5 h-5" /> For Company
          </Heading>
          <ul className="w-full grid grid-cols-1 md:grid-cols-4 gap-4">
            {businessServices.map((service, index) => {
              return (
                <li key={service.service}>
                  <Card className="hover:shadow-2xl hover:shadow-black/10 duration-300 ease-in-out">
                    <CardHeader className="flex flex-col gap-2 pb-2">
                      <div
                        className={cn(
                          "p-3 rounded-[.5rem] w-fit",
                          service.bgColor,
                          service.color
                        )}
                      >
                        <service.icon className="w-5 h-5" />
                      </div>
                      <Heading size={"md"} className="">
                        {service.service}
                      </Heading>
                    </CardHeader>
                    <CardContent className="">
                      <Text size={"xs"} className="line-clamp-3">
                        {service.description}
                      </Text>
                    </CardContent>
                  </Card>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="flex flex-col gap-6">
          <Heading
            size={"lg"}
            className="text-start flex gap-2 items-center max-w-2xl"
          >
            <UserIcon className="w-5 h-5" /> For Consumer
          </Heading>
          <ul className="w-full grid grid-cols-1 md:grid-cols-4 gap-4">
            {consumerServices.map((service, index) => {
              return (
                <li key={service.service}>
                  <Card className="hover:shadow-2xl hover:shadow-black/10 duration-300 ease-in-out">
                    <CardHeader className="flex flex-col gap-2 pb-2">
                      <div
                        className={cn(
                          "p-3 rounded-[.5rem] w-fit",
                          service.bgColor,
                          service.color
                        )}
                      >
                        <service.icon className="w-5 h-5" />
                      </div>
                      <Heading size={"md"} className="">
                        {service.service}
                      </Heading>
                    </CardHeader>
                    <CardContent className="">
                      <Text size={"xs"} className="line-clamp-3">
                        {service.description}
                      </Text>
                    </CardContent>
                  </Card>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Services;
