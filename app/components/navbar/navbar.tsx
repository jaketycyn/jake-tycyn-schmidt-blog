import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import {
  ArrowDownOnSquareStackIcon,
  ChevronDownIcon,
  EnvelopeOpenIcon,
  PlayCircleIcon,
  RectangleGroupIcon,
} from "@heroicons/react/20/solid";
import {
  BookOpenIcon,
  BriefcaseIcon,
  CameraIcon,
  EnvelopeIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";

const menuOptions = [
  {
    name: "Work",
    description:
      "Explore my coding projects showcasing my passion for problem-solving.",
    href: "/work",
    icon: BriefcaseIcon,
  },
  {
    name: "Blog",
    description: "Speak directly to your customers with our engagement tool",
    href: "/blog",
    icon: BookOpenIcon,
  },

  {
    name: "Contact",
    description:
      "Need a passionate front-end designer? Have questions or want to pass along a friend comment? Get in touch!",
    href: "/contact",
    icon: EnvelopeIcon,
  },
  {
    name: "Photography",
    description:
      "Photography provides me with immense mental, physical and spiritual satisfaction. Check out some of my work",
    href: "/photography",
    icon: CameraIcon,
  },
];
const callsToAction = [
  { name: "Email me", href: "#", icon: EnvelopeOpenIcon },
  { name: "Download Resume", href: "#", icon: ArrowDownOnSquareStackIcon },
  {
    name: "LinkedIn",
    href: "http://www.linkedin.com/in/jake-tycyn-schmidt-198334133/",
    icon: RectangleGroupIcon,
  },
];

export default function NavBar() {
  return (
    <Popover className="relative z-50 shadow isolate">
      <div className="w-full py-5 bg-black">
        <div className="px-6 mx-auto max-w-7xl lg:px-8">
          {/* Navbar Divisions */}
          <div className="grid w-full grid-cols-3">
            {/* Col 1 */}
            <div>
              <Popover.Button className="inline-flex items-center text-sm font-semibold leading-6 text-center text-white transition duration-500 gap-x-1 hover:text-yellow-400 hover:scale-110 ">
                Menu
                <ChevronDownIcon className="w-5 h-5" aria-hidden="true" />
              </Popover.Button>
            </div>
            {/* Col 2 */}
            <Link
              href="/"
              className="text-center text-white transition duration-500 hover:text-yellow-400 hover:scale-110"
            >
              Jake TyCyn Schmidt
            </Link>
            {/* Col 3 */}
            {/* Needs to be linked in, github and direct contact maybe social media icons */}
            {/* <div className="w-full space-x-4 bg-pink-300 ">
              <ul className="flex flex-row items-end justify-end bg-green-400">
                <li>LinkedIn</li>
                <li>Github</li>
                <li>Email</li>
              </ul>
            </div> */}
          </div>
        </div>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-200"
        enterFrom="opacity-0 -translate-y-1"
        enterTo="opacity-100 translate-y-0"
        leave="transition ease-in duration-150"
        leaveFrom="opacity-100 translate-y-0"
        leaveTo="opacity-0 -translate-y-1"
      >
        <Popover.Panel className="absolute inset-x-0 top-0 pt-16 shadow-lg bg-neutral-900 -z-10 ring-1 ring-gray-900/5">
          <div className="grid grid-cols-1 gap-2 px-6 py-6 mx-auto max-w-7xl sm:grid-cols-2 sm:gap-x-6 sm:gap-y-0 sm:py-10 lg:grid-cols-4 lg:gap-4 lg:px-8 xl:gap-8">
            {menuOptions.map((item) => (
              <div
                key={item.name}
                className="relative flex gap-6 p-3 -mx-3 text-sm leading-6 transition duration-500 rounded-lg group hover:bg-gray-200 sm:flex-col sm:p-6"
              >
                <div className="flex items-center justify-center flex-none bg-gray-100 rounded-lg h-11 w-11 group-hover:bg-neutral-700 ">
                  <item.icon
                    className="w-6 h-6 text-gray-600 group-hover:text-white"
                    aria-hidden="true"
                  />
                </div>
                <div>
                  <a
                    href={item.href}
                    className="font-semibold text-white hover:text-black"
                  >
                    {item.name}
                    <span className="absolute inset-0" />
                  </a>
                  <p className="mt-1 text-gray-300 group-hover:text-gray-700">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="bg-black">
            <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 divide-y divide-gray-900/5 sm:grid-cols-3 sm:divide-x sm:divide-y-0 sm:border-x sm:border-gray-900/5">
                {callsToAction.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    target="_blank"
                    className="flex items-center gap-x-2.5 p-3 px-6 text-sm font-semibold leading-6 text-white hover:text-black hover:bg-gray-100 sm:justify-center sm:px-0 transition duration-300"
                  >
                    <item.icon
                      className="flex-none w-5 h-5 text-gray-400 group-hover:text-black"
                      aria-hidden="true"
                    />
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
}
