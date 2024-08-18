"use client";
import { backend_url } from '@/util/backendUrl';
import axios from 'axios';
import { useSearchParams } from 'next/navigation';
import { Suspense, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import Simpleloader from '../components/Simpleloader';
import { PullRequest } from '../search/page';
import { NODE_URL } from '@/util/nodeUrl';

const SingleRepoCard = () => {
  const searchParams =  useSearchParams();
  const name = searchParams.get("name") || "";
  const forks = searchParams.get("forks");
  const userID = searchParams.get("userId") || "";
  const description = searchParams.get("description") || "";
  const createdAt = searchParams.get("createdAt");
  const creatorName = searchParams.get("creatorName") || "";
  const [pr, setPr] = useState<PullRequest[] | null>(null);
  const [loading, setLoading] = useState(false);
  const [downloadUrl,setDownloadUrl] = useState("");
  const [loadingDownload,setLoadingDownload] = useState(false);

  const formattedDate = createdAt 
    ? new Date(createdAt).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
      })
    : "Unknown Date";

  useEffect(() => {
    const fetchPullRequests = async () => {
      setLoading(true);
      try {
        const result = await axios.post(`${backend_url}/api/pr`, {
          name,
          creatorName,
        });
        if (result.data.status === 200) {
          console.log(result.data.message[0].pullRequest)
          setPr(result.data.message[0].pullRequest);
        } else {
          toast.error(`Something went wrong`);
        }
      } catch (error) {
        toast.error(`Something went wrong`);
      } finally {
        setLoading(false);
      }
    };
    fetchPullRequests();
  }, [creatorName, forks, name]);

  const handleDownload = async ()=>{
    setLoadingDownload(true);
    try {
      const response = await axios.post(`${backend_url}/api/fork`,{userID,name});
      console.log(response.data)
      if(response.data.status===200){
        setDownloadUrl(response.data.message)
        const newTab = window.open(response.data.message, '_blank');
        window.URL.revokeObjectURL(response.data.message);
      }else {
        return toast.error("Try again after some time")
      }
    } catch (error) {
      return toast.error("Try again after some time")
    }finally{
      setLoadingDownload(false);

    }
  }


  return (
    <div className="max-w-3xl mx-auto mt-12 bg-white p-10 rounded-lg shadow-xl">
      <h1 className="text-4xl font-bold text-gray-800 mb-6">
        {name.slice(0, 1).toUpperCase() + name.slice(1)}
      </h1>

      <p className="text-lg text-gray-700 mb-4">
        <span className="font-semibold">Creator -</span> 
        <span>{creatorName.slice(0, 1).toUpperCase() + creatorName.slice(1)}</span>
      </p>
      <p className="text-lg text-gray-700 mb-4">
        <span className="font-semibold">Description -</span> 
        <span>{description.slice(0, 1).toUpperCase() + description.slice(1)}</span>
      </p>

      <div className="flex justify-between items-center mt-6">
        <p className="text-gray-600 text-lg">
          Forks: <span className="font-semibold text-gray-800">{forks}</span>
        </p>
        <p className="text-gray-600 text-lg">
          Created At: <span className="font-semibold text-gray-800">{formattedDate}</span>
        </p>
      </div>

      <button className="mt-8 bg-green-600 hover:bg-green-700 w-[5rem] text-white py-3 px-6 rounded-lg text-xl focus:outline-none justify-center items-center flex" onClick={()=>handleDownload()}>
        Fork
      </button>
      <p className="text-sm text-gray-500 mt-4 text-center"
      >
        By clicking <span className="text-green-600 font-bold">Fork</span> you will fork (download) this repository.
      </p>

      {loading ? (
        <Simpleloader />
      ) : (
        pr && (
          <div className="mt-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Pull Requests</h2>
            {pr.length === 0 ? (
              <p className="text-gray-600">No pull requests found for this repository.</p>
            ) : (
              <div className="space-y-4">
                {pr.map((request, index) => (
                  <div
                    key={index}
                    className="p-4 bg-gray-100 rounded-lg shadow-md"
                  >
                    <p className="text-gray-700">
                      <strong>Id:</strong>{" "}
                      {request.id}
                    </p>
                    <p className="text-gray-700">
                      <strong>Contributor:</strong>{" "}
                      {request.contributor.slice(0, 1).toUpperCase() +
                        request.contributor.slice(1)}
                    </p>
                    <p className="text-gray-700">
                      <strong>Message:</strong> {request.message}
                    </p>
                    <p className="text-gray-700">
                      <strong>Total Commits:</strong> {request.totalCommits}
                    </p>
                    <p className="text-gray-700">
                      <strong>Parent Branch:</strong> {request.parentBranch}
                    </p>
                    <p className="text-gray-700">
                      <strong>Child Branch:</strong> {request.childBranch}
                    </p>
                    <p className="text-gray-700">
                      <strong>Created At:</strong>{" "}
                      {new Date(request.createdAt).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                        hour: '2-digit',
                        minute: '2-digit',
                      })}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>
        )
      )}
    </div>
  );
};

export default function SingleRepoCardPage() {
  return (
    <Suspense fallback={<Simpleloader />}>
      <SingleRepoCard />
    </Suspense>
  );
}