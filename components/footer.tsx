import Link from "next/link";

export default function Footer() {
  return (
    <>
      {/* Footer */}
      <footer className="bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 pt-12 pb-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            <div>
              <h4 className="text-gray-900 dark:text-white font-bold mb-4">
                About UKI
              </h4>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/"
                    className="text-gray-600 hover:text-green-600 dark:text-gray-400 dark:hover:text-green-400 text-sm"
                  >
                    Our Mission
                  </Link>
                </li>
                <li>
                  <Link
                    href="/"
                    className="text-gray-600 hover:text-green-600 dark:text-gray-400 dark:hover:text-green-400 text-sm"
                  >
                    Team
                  </Link>
                </li>
                <li>
                  <Link
                    href="/"
                    className="text-gray-600 hover:text-green-600 dark:text-gray-400 dark:hover:text-green-400 text-sm"
                  >
                    Partners
                  </Link>
                </li>
                <li>
                  <Link
                    href="/"
                    className="text-gray-600 hover:text-green-600 dark:text-gray-400 dark:hover:text-green-400 text-sm"
                  >
                    Impact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-gray-900 dark:text-white font-bold mb-4">
                Resources
              </h4>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/"
                    className="text-gray-600 hover:text-green-600 dark:text-gray-400 dark:hover:text-green-400 text-sm"
                  >
                    Blog
                  </Link>
                </li>
                <li>
                  <Link
                    href="/"
                    className="text-gray-600 hover:text-green-600 dark:text-gray-400 dark:hover:text-green-400 text-sm"
                  >
                    Case Studies
                  </Link>
                </li>
                <li>
                  <Link
                    href="/"
                    className="text-gray-600 hover:text-green-600 dark:text-gray-400 dark:hover:text-green-400 text-sm"
                  >
                    Guides
                  </Link>
                </li>
                <li>
                  <Link
                    href="/"
                    className="text-gray-600 hover:text-green-600 dark:text-gray-400 dark:hover:text-green-400 text-sm"
                  >
                    FAQ
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-gray-900 dark:text-white font-bold mb-4">
                Legal
              </h4>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/"
                    className="text-gray-600 hover:text-green-600 dark:text-gray-400 dark:hover:text-green-400 text-sm"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    href="/"
                    className="text-gray-600 hover:text-green-600 dark:text-gray-400 dark:hover:text-green-400 text-sm"
                  >
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link
                    href="/"
                    className="text-gray-600 hover:text-green-600 dark:text-gray-400 dark:hover:text-green-400 text-sm"
                  >
                    Cookie Policy
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-gray-900 dark:text-white font-bold mb-4">
                Connect
              </h4>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/"
                    className="text-gray-600 hover:text-green-600 dark:text-gray-400 dark:hover:text-green-400 text-sm"
                  >
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://twitter.com/uki"
                    className="text-gray-600 hover:text-green-600 dark:text-gray-400 dark:hover:text-green-400 text-sm"
                  >
                    Twitter
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://linkedin.com/company/uki"
                    className="text-gray-600 hover:text-green-600 dark:text-gray-400 dark:hover:text-green-400 text-sm"
                  >
                    LinkedIn
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://github.com/uki-network"
                    className="text-gray-600 hover:text-green-600 dark:text-gray-400 dark:hover:text-green-400 text-sm"
                  >
                    GitHub
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
