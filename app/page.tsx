"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function Home() {
  return (
    <div className="bg-gray-50 dark:bg-gray-900 min-h-screen">
      <main className="pt-16">
        <Hero />
        <Problem />
        <TestTypes />
        <Benefits />
        <Stats />
        <Faq />
      </main>
    </div>
  );
}

function Hero() {
  return (
    <>
      <section className="relative overflow-hidden bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 py-20 md:py-28">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <div className="relative">
                <div className="absolute -top-10 -left-10 w-20 h-20 bg-green-100 dark:bg-green-900/20 rounded-full blur-xl"></div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-900 dark:text-white">
                  <span className="relative">
                    Soil{" "}
                    <span className="text-green-600 dark:text-green-400">
                      Connect
                    </span>
                  </span>
                </h1>
                <div className="mt-2 inline-block px-3 py-1 bg-green-100 dark:bg-green-900/50 text-green-800 dark:text-green-300 rounded-full text-sm font-medium">
                  Smart Soil Testing
                </div>
              </div>

              <p className="mt-6 text-lg text-gray-600 dark:text-gray-300">
                Connecting farmers with certified soil testing centers for comprehensive NPK, pH, and micronutrient analysis to maximize crop yields.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Link href="/farmer">
                  <Button size="lg" className="cursor-pointer">
                    Join as Farmer
                  </Button>
                </Link>
                <Link href="/buyer">
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-2 cursor-pointer border-green-600 text-green-700 dark:text-green-400 hover:bg-green-50 dark:hover:bg-green-900/20"
                  >
                    Join as Testing Center
                  </Button>
                </Link>
              </div>
            </div>

            <div className="order-1 md:order-2 relative">
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-green-200/50 dark:bg-green-800/20 rounded-full blur-3xl"></div>
              <div className="relative bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/30 dark:to-emerald-900/30 rounded-2xl p-2 shadow-xl">
                <Image
                  src="/a.jpg"
                  alt="Soil testing for farmers"
                  width={600}
                  height={400}
                  className="rounded-xl w-full h-auto object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-white dark:bg-gray-800 rounded-lg p-3 shadow-lg">
                <div className="flex items-center space-x-2">
                  <span className="text-xs font-medium text-gray-600 dark:text-gray-300">
                    5,000+ soil tests completed
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function Problem() {
  return (
    <>
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="inline-block px-3 py-1 bg-green-100 dark:bg-green-900/50 text-green-800 dark:text-green-300 rounded-full text-sm font-medium mb-4">
              Our Mission
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Smart Soil Testing Made Simple & Accessible
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              SoilConnect bridges the gap between farmers and soil testing labs, making professional soil analysis accessible to all farmers for better crop outcomes.
            </p>
          </div>

          <div className="relative">
            <div className="absolute top-0 bottom-0 left-1/2 w-0.5 bg-gray-200 dark:bg-gray-700 transform -translate-x-1/2 hidden md:block"></div>

            <div className="space-y-12 relative">
              <div className="md:flex items-center">
                <div className="md:w-1/2 pr-12 md:text-right">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                    Limited Access to Soil Testing
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Many farmers lack convenient access to quality soil testing services, leading to suboptimal fertilizer usage and crop selection.
                  </p>
                </div>

                <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-14 h-14 rounded-full border-4 border-white dark:border-gray-900 bg-green-100 dark:bg-green-900 items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-green-600 dark:text-green-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                    />
                  </svg>
                </div>

                <div className="mt-6 md:mt-0 md:w-1/2 pl-12">
                  <div className="bg-green-50 dark:bg-green-900/20 rounded-xl p-6 shadow-sm">
                    <Image
                      src="/a.webp"
                      alt="Soil testing challenges"
                      width={300}
                      height={200}
                      className="rounded-lg w-full h-auto object-cover mb-4"
                    />
                  </div>
                </div>
              </div>

              <div className="md:flex items-center">
                <div className="md:w-1/2 pr-12">
                  <div className="bg-green-50 dark:bg-green-900/20 rounded-xl p-6 shadow-sm">
                    <Image
                      src="/a.webp"
                      alt="Reduced crop yields"
                      width={300}
                      height={200}
                      className="rounded-lg w-full h-auto object-cover mb-4"
                    />
                  </div>
                </div>

                <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-14 h-14 rounded-full border-4 border-white dark:border-gray-900 bg-green-100 dark:bg-green-900 items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-green-600 dark:text-green-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </div>

                <div className="mt-6 md:mt-0 md:w-1/2 pl-12 md:text-left">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                    Reduced Crop Yields
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Without proper soil analysis, farmers often experience lower yields, nutrient imbalances, and increased susceptibility to crop diseases.
                  </p>
                </div>
              </div>

              <div className="md:flex items-center">
                <div className="md:w-1/2 pr-12 md:text-right">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                    Inefficient Resource Usage
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Farmers waste money on unnecessary fertilizers or apply incorrect nutrients when they lack accurate soil data for decision-making.
                  </p>
                </div>

                <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-14 h-14 rounded-full border-4 border-white dark:border-gray-900 bg-green-100 dark:bg-green-900 items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-green-600 dark:text-green-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>

                <div className="mt-6 md:mt-0 md:w-1/2 pl-12">
                  <div className="bg-green-50 dark:bg-green-900/20 rounded-xl p-6 shadow-sm">
                    <Image
                      src="/a.webp"
                      alt="Resource inefficiency"
                      width={300}
                      height={200}
                      className="rounded-lg w-full h-auto object-cover mb-4"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function TestTypes() {
  return (
    <section className="py-16 bg-green-50 dark:bg-gray-800/30 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 rounded-md text-sm font-medium">
            Available Tests
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6 text-gray-900 dark:text-white">
            Comprehensive Soil Analysis
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Our network of certified testing centers provides a complete range of soil tests to help you maximize crop productivity.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 relative">
          {/* Card 1 */}
          <div className="bg-white dark:bg-gray-800 border-l-4 border-green-500 dark:border-green-400 rounded-lg overflow-hidden">
            <div className="p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-md flex items-center justify-center mr-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-green-600 dark:text-green-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                    />
                  </svg>
                </div>
                <div className="flex-1">
                  <span className="inline-block px-2 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-xs font-semibold rounded">
                    Basic
                  </span>
                </div>
              </div>

              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                NPK Analysis
              </h3>

              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Primary nutrient testing for Nitrogen, Phosphorus, and Potassium levels - the fundamental nutrients for all crop growth.
              </p>

              <div className="flex items-center mt-4">
                <div className="h-0.5 w-full bg-green-100 dark:bg-green-900/30"></div>
                <div className="flex-shrink-0 ml-2">
                  <div className="h-6 w-6 rounded-full bg-green-500 dark:bg-green-400 flex items-center justify-center text-white text-xs font-bold">
                    1
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white dark:bg-gray-800 border-l-4 border-blue-500 dark:border-blue-400 rounded-lg overflow-hidden">
            <div className="p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-md flex items-center justify-center mr-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-blue-600 dark:text-blue-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                    />
                  </svg>
                </div>
                <div className="flex-1">
                  <span className="inline-block px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 text-xs font-semibold rounded">
                    Standard
                  </span>
                </div>
              </div>

              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                pH & EC Testing
              </h3>

              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Electrical conductivity and pH level analysis for optimal growing conditions, crucial for nutrient availability and plant health.
              </p>

              <div className="flex items-center mt-4">
                <div className="h-0.5 w-full bg-blue-100 dark:bg-blue-900/30"></div>
                <div className="flex-shrink-0 ml-2">
                  <div className="h-6 w-6 rounded-full bg-blue-500 dark:bg-blue-400 flex items-center justify-center text-white text-xs font-bold">
                    2
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white dark:bg-gray-800 border-l-4 border-purple-500 dark:border-purple-400 rounded-lg overflow-hidden">
            <div className="p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-md flex items-center justify-center mr-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-purple-600 dark:text-purple-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                </div>
                <div className="flex-1">
                  <span className="inline-block px-2 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-400 text-xs font-semibold rounded">
                    Premium
                  </span>
                </div>
              </div>

              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                Micronutrient Test
              </h3>

              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Analysis of Zinc, Boron, Copper, Iron, and other essential micronutrients that are critical for plant development and disease resistance.
              </p>

              <div className="flex items-center mt-4">
                <div className="h-0.5 w-full bg-purple-100 dark:bg-purple-900/30"></div>
                <div className="flex-shrink-0 ml-2">
                  <div className="h-6 w-6 rounded-full bg-purple-500 dark:bg-purple-400 flex items-center justify-center text-white text-xs font-bold">
                    3
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Benefits() {
  const [activeTab, setActiveTab] = useState("farmers");
  return (
    <section className="py-16 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <span className="inline-block px-3 py-1 bg-green-100 dark:bg-green-900/50 text-green-800 dark:text-green-300 rounded-full text-sm font-medium mb-4">
            Benefits
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
            Join Our Community
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Whether you&apos;re a farmer seeking soil analysis or a testing center providing services, our platform connects the agricultural community for better crop outcomes.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Tabs
            defaultValue="farmers"
            onValueChange={setActiveTab}
            className="w-full"
          >
            <TabsList className="grid w-full grid-cols-2 mb-8">
              <TabsTrigger
                value="farmers"
                className={`py-4 px-6 text-center font-medium text-sm md:text-base rounded-t-lg transition ${
                  activeTab === "farmers"
                    ? "bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-400 border-b-2 border-green-600 dark:border-green-500"
                    : "text-gray-600 dark:text-gray-400 hover:text-green-600 dark:hover:text-green-400"
                }`}
              >
                For Farmers
              </TabsTrigger>
              <TabsTrigger
                value="providers"
                className={`py-4 px-6 text-center font-medium text-sm md:text-base rounded-t-lg transition ${
                  activeTab === "providers"
                    ? "bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-400 border-b-2 border-green-600 dark:border-green-500"
                    : "text-gray-600 dark:text-gray-400 hover:text-green-600 dark:hover:text-green-400"
                }`}
              >
                For Testing Centers
              </TabsTrigger>
            </TabsList>

            <Card className="bg-green-50 dark:bg-green-900/10 border-none">
              <TabsContent value="farmers" className="mt-0">
                <CardContent className="p-8 grid md:grid-cols-2 gap-8">
                  <div>
                    <Image
                      src="/a.webp"
                      alt="Farmer benefits"
                      width={400}
                      height={300}
                      className="rounded-xl w-full h-auto object-cover shadow-md"
                    />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                      Farmer Advantages
                    </h3>
                    <ul className="space-y-4">
                      <li className="flex">
                        <div className="flex-shrink-0 h-8 w-8 rounded-full bg-green-100 dark:bg-green-900/50 flex items-center justify-center mr-3 mt-0.5">
                          <svg
                            className="h-5 w-5 text-green-600 dark:text-green-400"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                        </div>
                        <span className="text-gray-700 dark:text-gray-300">
                          Access to certified soil testing labs in your area
                        </span>
                      </li>
                      <li className="flex">
                        <div className="flex-shrink-0 h-8 w-8 rounded-full bg-green-100 dark:bg-green-900/50 flex items-center justify-center mr-3 mt-0.5">
                          <svg
                            className="h-5 w-5 text-green-600 dark:text-green-400"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                        </div>
                        <span className="text-gray-700 dark:text-gray-300">
                          Comprehensive soil reports with actionable recommendations
                        </span>
                      </li>
                      <li className="flex">
                        <div className="flex-shrink-0 h-8 w-8 rounded-full bg-green-100 dark:bg-green-900/50 flex items-center justify-center mr-3 mt-0.5">
                          <svg
                            className="h-5 w-5 text-green-600 dark:text-green-400"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                        </div>
                        <span className="text-gray-700 dark:text-gray-300">
                          Optimized fertilizer usage for better ROI
                        </span>
                      </li>
                      <li className="flex">
                        <div className="flex-shrink-0 h-8 w-8 rounded-full bg-green-100 dark:bg-green-900/50 flex items-center justify-center mr-3 mt-0.5">
                          <svg
                            className="h-5 w-5 text-green-600 dark:text-green-400"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                        </div>
                        <span className="text-gray-700 dark:text-gray-300">
                          Higher crop yields through informed decision-making
                        </span>
                      </li>
                      <li className="flex">
                        <div className="flex-shrink-0 h-8 w-8 rounded-full bg-green-100 dark:bg-green-900/50 flex items-center justify-center mr-3 mt-0.5">
                          <svg
                            className="h-5 w-5 text-green-600 dark:text-green-400"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                        </div>
                        <span className="text-gray-700 dark:text-gray-300">
                          Digital records of all soil tests for long-term planning
                        </span>
                      </li>
                    </ul>
                  </div>
                </CardContent>
              </TabsContent>

              <TabsContent value="providers" className="mt-0">
                <CardContent className="p-8 grid md:grid-cols-2 gap-8">
                  <div className="order-2 md:order-1">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                      Testing Center Advantages
                    </h3>
                    <ul className="space-y-4">
                      <li className="flex">
                        <div className="flex-shrink-0 h-8 w-8 rounded-full bg-green-100 dark:bg-green-900/50 flex items-center justify-center mr-3 mt-0.5">
                          <svg
                            className="h-5 w-5 text-green-600 dark:text-green-400"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                        </div>
                        <span className="text-gray-700 dark:text-gray-300">
                          Connect with farmers who need reliable soil testing
                        </span>
                      </li>
                      <li className="flex">
                        <div className="flex-shrink-0 h-8 w-8 rounded-full bg-green-100 dark:bg-green-900/50 flex items-center justify-center mr-3 mt-0.5">
                          <svg
                            className="h-5 w-5 text-green-600 dark:text-green-400"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                        </div>
                        <span className="text-gray-700 dark:text-gray-300">
                          Grow your customer base and testing service volume
                        </span>
                      </li>
                      <li className="flex">
                        <div className="flex-shrink-0 h-8 w-8 rounded-full bg-green-100 dark:bg-green-900/50 flex items-center justify-center mr-3 mt-0.5">
                          <svg
                            className="h-5 w-5 text-green-600 dark:text-green-400"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                        </div>
                        <span className="text-gray-700 dark:text-gray-300">
                          Showcase your testing expertise and capabilities
                        </span>
                      </li>
                      <li className="flex">
                        <div className="flex-shrink-0 h-8 w-8 rounded-full bg-green-100 dark:bg-green-900/50 flex items-center justify-center mr-3 mt-0.5">
                          <svg
                            className="h-5 w-5 text-green-600 dark:text-green-400"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                        </div>
                        <span className="text-gray-700 dark:text-gray-300">
                          Simplified digital report delivery and customer management
                        </span>
                      </li>
                      <li className="flex">
                        <div className="flex-shrink-0 h-8 w-8 rounded-full bg-green-100 dark:bg-green-900/50 flex items-center justify-center mr-3 mt-0.5">
                          <svg
                            className="h-5 w-5 text-green-600 dark:text-green-400"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                        </div>
                        <span className="text-gray-700 dark:text-gray-300">
                          Help improve agricultural productivity in your region
                        </span>
                      </li>
                    </ul>
                  </div>
                  <div className="order-1 md:order-2">
                    <Image
                      src="/a.webp"
                      alt="Testing center benefits"
                      width={400}
                      height={300}
                      className="rounded-xl w-full h-auto object-cover shadow-md"
                    />
                  </div>
                </CardContent>
              </TabsContent>
            </Card>
          </Tabs>
        </div>
      </div>
    </section>
  );
}

function Stats() {
  return (
    <section className="py-16 bg-gradient-to-b from-white to-green-50 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block px-3 py-1 bg-green-100 dark:bg-green-900/50 text-green-800 dark:text-green-300 rounded-full text-sm font-medium mb-4">
            Our Impact
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
            Growing Together
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Join the SoilConnect community and be part of the agricultural revolution that&apos;s improving crop yields across the country.
          </p>
        </div>

        <Card className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden border-none">
          <div className="md:flex">
            <div className="md:w-1/2">
              <Image
                src="/n.jpg"
                alt="Soil testing impact"
                width={600}
                height={400}
                className="w-full h-full object-cover"
              />
            </div>
            <CardContent className="md:w-1/2 p-8 md:p-12">
              <div className="inline-block px-3 py-1 bg-green-100 dark:bg-green-900/50 text-green-800 dark:text-green-300 rounded-full text-sm font-medium mb-4">
                Growing Network
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Our Growth Story
              </h3>

              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="bg-green-50 dark:bg-green-900/30 p-4 rounded-lg text-center">
                  <span className="block text-3xl font-bold text-green-600 dark:text-green-400">5,000+</span>
                  <span className="text-gray-600 dark:text-gray-400">Happy Farmers</span>
                </div>
                <div className="bg-green-50 dark:bg-green-900/30 p-4 rounded-lg text-center">
                  <span className="block text-3xl font-bold text-green-600 dark:text-green-400">150+</span>
                  <span className="text-gray-600 dark:text-gray-400">Testing Centers</span>
                </div>
                <div className="bg-green-50 dark:bg-green-900/30 p-4 rounded-lg text-center">
                  <span className="block text-3xl font-bold text-green-600 dark:text-green-400">12,000+</span>
                  <span className="text-gray-600 dark:text-gray-400">Tests Completed</span>
                </div>
                <div className="bg-green-50 dark:bg-green-900/30 p-4 rounded-lg text-center">
                  <span className="block text-3xl font-bold text-green-600 dark:text-green-400">30%</span>
                  <span className="text-gray-600 dark:text-gray-400">Yield Increase</span>
                </div>
              </div>

              <div className="mt-8">
                <Button
                  variant="link"
                  asChild
                  className="p-0 text-green-600 dark:text-green-400 font-medium hover:text-green-700 dark:hover:text-green-300"
                >
                  <Link href="/" className="inline-flex items-center">
                    Learn more about our impact
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 ml-1"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </Link>
                </Button>
              </div>
            </CardContent>
          </div>
        </Card>
      </div>
    </section>
  );
}

function Faq() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <section className="py-16 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block px-3 py-1 bg-green-100 dark:bg-green-900/50 text-green-800 dark:text-green-300 rounded-full text-sm font-medium mb-4">
            FAQ
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Find answers to common questions about SoilConnect and our soil testing services.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {[
              {
                question: "How does SoilConnect work?",
                answer:
                  "SoilConnect connects farmers with certified soil testing centers. Farmers can request soil tests through our platform, and testing centers provide comprehensive analysis with actionable recommendations for improving crop yields.",
              },
              {
                question: "What types of soil tests are available?",
                answer:
                  "We offer various soil tests including NPK analysis, pH and electrical conductivity testing, micronutrient analysis, organic carbon testing, and comprehensive soil health assessments with detailed recommendations.",
              },
              {
                question: "How long does it take to get soil test results?",
                answer:
                  "Most standard soil tests are completed within 3-5 business days after the testing center receives your soil sample. Premium and specialized tests may take 7-10 days depending on the complexity.",
              },
              {
                question: "How do I collect a soil sample correctly?",
                answer:
                  "We provide detailed soil sampling instructions in our app. Generally, you'll need to collect multiple sub-samples from your field at the right depth, mix them thoroughly, and package approximately 500g of soil in a clean container.",
              },
            ].map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden"
              >
                <AccordionTrigger
                  onClick={() => toggleFaq(index)}
                  className="flex justify-between items-center w-full px-6 py-4 text-left font-medium text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-800 transition"
                >
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4">
                  <p className="text-gray-600 dark:text-gray-400">
                    {faq.answer}
                  </p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="mt-10 text-center">
            <Button asChild size="lg">
              <Link
                href="/"
                className="inline-flex items-center justify-center"
              >
                View all FAQs
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 ml-2"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
