
"use client"
import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";
import toast from "react-hot-toast";
import { useEffect } from "react";

const Appbar = () => {
    const session =  useSession();
    const handleLogout = async ()=>{
      try {
        await signOut();
      } catch (error) {
        toast.error("Logout error")
      }
    }
    useEffect(()=>{

    },[session])

    return (
      <div className="bg-gray-500 text-white h-16 rounded-lg shadow-lg flex items-center px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto flex justify-between items-center">
          <p className="text-xl font-semibold" >
            <Link href={"/"}>Slothhub</Link>
          </p>
          <div className="hidden md:flex space-x-8">
            <p className="hover:text-gray-400 cursor-pointer">About</p>
            <p className="hover:text-gray-400 cursor-pointer">How to use ?</p>

            {!session.data  ? (
              <div className="hover:text-gray-400 cursor-pointer">
              {/* <Link href={"/signin"}>Login</Link> */}
              <p  onClick={async()=>await signIn()}>Login</p>
            </div>
            ):(<p className="cursor-pointer hover:text-gray-400" onClick={()=>handleLogout()}>Logout</p>)}

          </div>
          <div className="md:hidden flex items-center">
            <button className="text-white hover:text-gray-400">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>
          {/* {JSON.stringify(session.data)} */}
        </div>
      </div>
    );
  };
  
  export default Appbar;
  