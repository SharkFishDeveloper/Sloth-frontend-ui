"use client";
import { useSearchParams } from 'next/navigation';

const SingleRepoCard = () => {
  const searchParams = useSearchParams();
  const name = searchParams.get("name") || "";
  const forks = searchParams.get("forks");
  const description = searchParams.get("description") || "";
  const createdAt = searchParams.get("createdAt");
  const creatorName = searchParams.get("creatorName") || "";

  const formattedDate = createdAt 
    ? new Date(createdAt).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
      })
    : "Unknown Date";

  return (
    <div className="max-w-3xl mx-auto mt-12 bg-white p-10 rounded-lg shadow-xl">
      <h1 className="text-4xl font-bold text-gray-800 mb-6">
        {name.slice(0, 1).toUpperCase() + name.slice(1)}
      </h1>

      <p className="text-lg text-gray-700 mb-4">
        <span className="font-semibold">Creator -</span> 
        <span> {creatorName.slice(0, 1).toUpperCase() + creatorName.slice(1)}</span>
      </p>

      <p className="text-lg text-gray-700 mb-4">
        <span className="font-semibold">Description -</span> 
        <span> {description.slice(0, 1).toUpperCase() + description.slice(1)}</span>
      </p>

      <div className="flex justify-between items-center mt-6">
        <p className="text-gray-600 text-lg">
          Forks: <span className="font-semibold text-gray-800">{forks}</span>
        </p>
        <p className="text-gray-600 text-lg">
          Created At: <span className="font-semibold text-gray-800">{formattedDate}</span>
        </p>
      </div>

      <button className="mt-8 bg-green-600 hover:bg-green-700 w-[5rem] text-white py-3 px-6 rounded-lg text-xl focus:outline-none justify-center items-center flex">
        Fork
      </button>

      <p className="text-sm text-gray-500 mt-4 text-center">
        By clicking <span className="text-green-600 font-bold">Fork</span> you will fork (download) this repository.
      </p>
    </div>
  );
};

export default SingleRepoCard;
