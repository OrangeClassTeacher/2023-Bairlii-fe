import { useState, useEffect } from "react";
import Link from "next/link";
import Navbar from "../../components/Navbar";
import Menu from "../../components/Menu";

const newUser = (): JSX.Element => {
  const [localUser, setLocalUser] = useState<string | null>();
  console.log(localStorage);

  useEffect(() => {
    if (typeof window !== undefined) {
      let localStorageValue: string | null = localStorage.getItem("token");
      setLocalUser(localStorageValue);
    }
  }, []);

  const userOut = () => {
    localStorage.clear();
    setLocalUser("");
  };

  console.log(localUser);

  return (
    <div className="flex items-center">
      <button
        onClick={userOut}
        // {...(localUser != "" ? <Menu /> : <newUser />)}
        {...(localUser != "" ? (
          <Link href="/" onClick={userOut}></Link>
        ) : (
          <Link href="/login"></Link>
        ))}
        data-dropdown-toggle="dropdown"
      >
        Sign Out
        <svg
          className="w-4 h-4 ml-2"
          aria-hidden="true"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M19 9l-7 7-7-7"
          ></path>
        </svg>
      </button>

      <div>
        <ul>
          <li>
            <a></a>
          </li>
        </ul>
      </div>
      <div>
        <img
          className="rounded-full"
          height="60"
          width="60"
          alt="Avatar"
          src="/images/log.jpg"
        />
      </div>
    </div>
  );
};
export default newUser;
