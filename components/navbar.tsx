// import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";

export default function Navbar() {
  return (
    <>
      {/* Header */}
      <header className="fixed w-full top-0 z-50 bg-white/80 dark:bg-gray-900/90 shadow-sm">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2">
              <div className="bg-green-600 rounded-full p-2 flex items-center justify-center"></div>
              <span className="text-xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-emerald-500 dark:from-green-400 dark:to-emerald-300">
                UKI
              </span>
            </Link>

            <div className="hidden md:flex items-center space-x-1">
              <Link
                href="/data"
                className="px-4 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-green-600 hover:bg-green-50 dark:text-gray-200 dark:hover:text-green-400 dark:hover:bg-gray-800 transition"
              >
                See Data
              </Link>
              <Button asChild className="ml-3">
                <Link href="/">Login</Link>
              </Button>
            </div>

            <button className="md:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </header>
    </>
  );
}
