"use client"
import { backend_url } from '@/util/backendUrl';
import axios from 'axios';
import React, { useState } from 'react'
import { toast } from 'react-hot-toast';
import Loader from '../components/Loader';
import RepoCard from '../components/RepoCard';
import Nothing from '../components/Nothing';
import { useSession } from 'next-auth/react';
import Signinerror from '../components/Signinerror';


export interface PullRequest {
  createdAt: Date;
  parentBranch: string;
  childBranch: string;
  totalCommits: number;
  message: string;
  contributor: string;
  id:string
}
export interface Repo{
  name:string,
  forks:string,
  createdAt:string,
  description:string,
  creatorName:string,
  userId:string
}

const Search = () => {
   const [search,setSearch] = useState("");
   const [loading,setLoading] = useState(false);
   const [repositories,setRepo] = useState<Repo[]|null>(null);
   const [nothing,setNoting] = useState(false);
   const session = useSession();

   const findRepo = async ()=>{
        setRepo(null);
        setNoting(false)
        if(search.length<6){
          return toast.error("Repository name is too short ...")
        }
        setLoading(true)
        const result = await axios.post(`${backend_url}/api/search`,{search});
        if(result.data.status===400){
          setLoading(false)
          return toast.error(result.data.message)
        }else if(result.data.status==200){
          setLoading(false)
          setRepo(result.data.message)
          if(result.data.message.length===0){
            setNoting(true)
            // return toast.success("Success")
          }
        }
        else{
          setLoading(false)
          setNoting(true)
          return toast.error("Something went wrong ...")
        }

   }

 
   return (
   <div>
     {session.data ? (
      <>
      <div className="relative w-[80%] max-w-lg mx-auto mt-8">
      <input
        type="text"
        placeholder="Search repositories ..."
        className="w-full py-3 px-5 border border-gray-300 rounded-full shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 ease-in-out"
        onChange={(e)=>setSearch(e.target.value)}
      />
      <button
        type="submit"
        className="absolute right-2 top-1/2 transform -translate-y-1/2 px-4 py-2 bg-black text-white rounded-full shadow-lg hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-transform duration-300 ease-in-out"
        onClick={async()=>findRepo()}
      >
         <svg
        className="w-6 h-6 text-white"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M15.232 15.232A6 6 0 1112 6a6 6 0 013.232 9.232zM18 18l-4.5-4.5"
        />
      </svg>
      </button>
    </div>
    <div>
      {loading && (<Loader/>)}
    </div>

    {repositories && repositories.map((repos:Repo,index)=>(
       <div key={index} >
        <RepoCard name={repos.name} createdAt={repos.createdAt} description={repos.description} forks={repos.forks} creatorName={repos.creatorName} userId={repos.userId}/>
       </div>
    ))}

    {nothing && (
      <Nothing/>
    )}

      </>
     ):(
      <Signinerror/>
     )}
   </div>
   )
}


export default Search