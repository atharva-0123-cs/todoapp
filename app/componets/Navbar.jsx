'use client'

import {usePathname} from "next/navigation";
import Link from "next/link";

const Navbar = () => {
  const pathname = usePathname();
  // console.log(isActive);
  const isActive = pathname.startsWith("/NewTopic");

  return (
    <nav className="flex m-auto p-4 my-8 bg-slate-900 justify-between max-w-xl rounded items-center">
      <h4 className=" text-white">Topics</h4>
      {!isActive && <Link href="/NewTopic" className=" text-white bg-indigo-900 p-2 rounded hover:bg-indigo-700 transition ease-in-out">
          Add Topic
        </Link>}
    </nav>
  );
};
export default Navbar;
