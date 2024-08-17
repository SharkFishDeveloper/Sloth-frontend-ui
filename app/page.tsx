"use client"
import { useRouter } from "next/navigation";

export default function Home() {
  const router  = useRouter();
  return (
    //TODO : fix this, make UI good
    <div className="text-black  h-[90%]">
      
    <div className="flex justify-center items-center   h-[90%] ">

      <div className="text-white font-bold h-[3.5rem] w-[7rem] bg-green-700 rounded-lg hover:scale-105 transition-all flex items-center justify-center cursor-pointer" onClick={()=>router.push("/search")}>
        Search
      </div>

      <div className="text-black font-bold h-[3.5rem] w-[7rem] rounded-lg transition-all flex items-center justify-center cursor-pointer hover:text-gray-600">
        Profile
      </div>

    </div>

    </div>
  );
}
