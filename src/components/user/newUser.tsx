import { useState, useEffect } from "react";
import { Dropdown } from "flowbite-react";
import { useRouter } from "next/router";
import Image from "next/image";

const newUser = (): JSX.Element => {
  const [localUser, setLocalUser] = useState<string | null>();
  const router = useRouter;

  useEffect(() => {
    if (typeof window !== undefined) {
      let localStorageValue: string | null = localStorage.getItem("token");
      setLocalUser(localStorageValue);
    }
  }, []);

  const SignOut = () => {
    localStorage.removeItem("token");
    window.location.href = "/";
  };

  return (
    <div className="flex items-center">
      <button
        onClick={SignOut}
        data-dropdown-toggle="dropdownAvatarName"
        className="flex items-center text-sm font-medium text-gray-900 rounded-full hover:text-blue-600 dark:hover:text-blue-500 md:mr-0 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:text-white"
        type="button"
      >
        <span className="sr-only">Open user menu</span>
        <img
          className="w-8 h-8 mr-2 rounded-full"
          src="/images/log.jpg"
          alt="user photo"
        />
        Sign Out
        <svg
          className="w-4 h-4 mx-1.5"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clip-rule="evenodd"
          ></path>
        </svg>
      </button>

      <div
        id="dropdownAvatarName"
        className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600"
      >
        <div className="px-4 py-3 text-sm text-gray-900 dark:text-white">
          <div className="font-medium ">Pro User</div>
          <div className="truncate">name@flowbite.com</div>
        </div>
        <ul
          className="py-2 text-sm text-gray-700 dark:text-gray-200"
          aria-labelledby="dropdownInformdropdownAvatarNameButtonationButton"
        >
          <li>
            <a
              href="#"
              className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              Dashboard
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              Settings
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              Earnings
            </a>
          </li>
        </ul>
        <div className="py-2">
          <a
            href="#"
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
          >
            Sign out
          </a>
        </div>
      </div>

      {/* <Dropdown label="Sign Out">
        <Dropdown.Item>Хэрэглэгчийн хуудас</Dropdown.Item>
        <Dropdown.Item>Засварлах</Dropdown.Item>
        <Dropdown.Item onClick={SignOut}>Гарах</Dropdown.Item>
      </Dropdown> */}

      {/* <div>
        <img
          className="rounded-full"
          height="60"
          width="60"
          alt="Avatar"
          src="/images/log.jpg"
        />
      </div> */}
    </div>
  );
};
export default newUser;
