import React from 'react'
import { Repo } from '../search/page'
import Link from 'next/link';

const RepoCard = (repository:Repo) => {
    const {name,forks,description,createdAt,creatorName} = repository;


    const capitalizeFirstLetter = (str: string) => {
        return str.charAt(0).toUpperCase() + str.slice(1);
    };

    return (
        <div className="max-w-[30rem] mx-auto bg-white shadow-md rounded-lg overflow-hidden my-4 transform transition duration-500 hover:shadow-lg hover:scale-105">
          <div className="px-4 py-4 bg-blue-100">
            <h3 className="text-xl font-semibold text-gray-800">
              {capitalizeFirstLetter(name)}
            </h3>
            <p className="text-sm text-gray-600">
              By {capitalizeFirstLetter(creatorName)}
            </p>
          </div>
          <div className="px-6 py-4">
            <p className="text-gray-700 text-sm mb-4">{description}</p>
            <div className="flex justify-between items-center text-gray-700">
              <span className="text-sm">
                <strong>Forks:</strong> {forks}
              </span>
              <span className="text-sm">
                <strong>Created:</strong> {new Date(createdAt).toLocaleDateString()}
              </span>
            </div>
          </div>
          <div className="px-6 py-3 hover:scale-105 transition-all">
            <button className="w-full text-white bg-black font-semibold py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 hover:text-gray-300">
              <Link
                href={{
                  pathname: "/SingleRepoCard",
                  query: {
                    name,
                    description,
                    forks,
                    createdAt,
                    creatorName
                  }
                }}
              >
                View details
              </Link>
            </button>
          </div>
        </div>
      );
}

export default RepoCard