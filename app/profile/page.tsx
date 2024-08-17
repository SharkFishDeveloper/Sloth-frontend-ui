"use client"
import { backend_url } from '@/util/backendUrl';
import axios from 'axios';
import { useSession } from 'next-auth/react';
import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import Loader from '../components/Loader';

interface Profile {
  name: string;
  forks: string;
  createdAt: string;
}

const ProfilePage = () => {
  const { data: session } = useSession();
  const [profile, setProfile] = useState<Profile[] | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (session) {
      const userProfile = async () => {
        setLoading(true);
        try {
          const id = session.user.id;
          const result = await axios.post(`${backend_url}/api/profile`, { id });
          if (result.data.status === 200) {
            setProfile(result.data.message);
          }
        } catch (error) {
          toast.error("Please try again later");
        } finally {
          setLoading(false);
        }
      };
      userProfile();
    }
  }, [session]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      {!session ? (
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Please sign in first</h2>
        </div>
      ) : (
        <div className="w-full max-w-3xl p-8 bg-white shadow-lg rounded-lg">
          {loading ? (
            <div className="flex justify-center">
              <Loader />
            </div>
          ) : (
            <div>
              <h2 className="text-2xl font-bold mb-6">User Profile</h2>
              <p className="text-lg mb-4"><strong>Username:</strong> {
              //@ts-ignore
              session.user.name}</p>
              <p className="text-lg mb-3"><strong>Email:</strong> {
              //@ts-ignore
              session.user.email}</p>

                <p className="text-sm text-yellow-400 ">Only 10 repositories are selected by default</p>

              <h3 className="text-xl font-semibold mt-3 mb-4">Repositories</h3>

              {profile ? (
                <ul className="space-y-4">
                  {profile.map((repo, index) => (
                    <li key={index} className="p-4 border rounded-lg shadow-sm bg-gray-50">
                      <h4 className="text-lg font-bold">{repo.name.slice(0,1).toUpperCase() + repo.name.slice(1)}</h4>
                      <p className="text-sm"><strong>Forks:</strong> {repo.forks}</p>
                      <p className="text-sm"><strong>Created At:</strong> {new Date(repo.createdAt).toLocaleDateString()}</p>
                    </li>
                  ))}
                </ul>
              ) : (
                <p>No repositories found.</p>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default ProfilePage;
