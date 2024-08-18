
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
          <p className="text-xl font-semibold">
            <Link href={"/"}>Slothhub</Link>
          </p>
          {/* Large screen menu */}
          <div className="hidden md:flex space-x-8">
            <p className="hover:text-gray-400 cursor-pointer">About</p>
            <p className="hover:text-gray-400 cursor-pointer">How to use?</p>
            {!session.data ? (
              <div className="hover:text-gray-400 cursor-pointer">
                <p onClick={async () => await signIn()}>Login</p>
              </div>
            ) : (
              <p className="cursor-pointer hover:text-gray-400" onClick={handleLogout}>Logout</p>
            )}
          </div>
          {/* Small screen login/logout button */}
          <div className="md:hidden">
            {!session.data ? (
              <button
                className="bg-gray-700 px-3 py-2 rounded-md text-sm font-medium"
                onClick={async () => await signIn()}
              >
                Login
              </button>
            ) : (
              <button
                className="bg-gray-700 px-3 py-2 rounded-md text-sm font-medium"
                onClick={handleLogout}
              >
                Logout
              </button>
            )}
          </div>
        </div>
      </div>
    );
  };
  
  export default Appbar;
  