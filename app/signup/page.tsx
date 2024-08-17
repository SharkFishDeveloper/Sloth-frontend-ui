"use client"
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import { backend_url } from '@/util/backendUrl';
import toast from 'react-hot-toast';
import Loader from '../components/Loader';
import { signIn } from 'next-auth/react';
import Simpleloader from '../components/Simpleloader';

const Signup = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string|null>(null);
  const router = useRouter();
  const [loading,setLoading] = useState(false);

  const handleSubmit = async (e:any) => {
    setLoading(true);
    e.preventDefault();
    setError(null);
    try {
      if( username.length < 6  || password.length < 6){
        return toast.error("Name or password is too small ")
      }
      const response = await axios.post(`${backend_url}/api/signup`,{
        email,password,username
      })
      if (response.data.status===200) {
        toast.success("Signup successfull !! Now login")
        await new Promise((resolve) => setTimeout(resolve, 400));
        return await signIn(); 
      }
      else if (response.data.status===300) {
        return toast.error("User already exists !!")
      } 
      else {
        console.log(response.data.message)
        toast.error('An unexpected error occurred')
        return setError('An unexpected error occurred');
      }
    } catch (error) {
        console.log(error)
        return toast.error('An unexpected error occurred')
    }finally{
        setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md p-8 bg-white shadow-lg rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Sign Up</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          {error && (
            <div className="text-red-500 mb-4">
              {error}
            </div>
          )}
          {loading && (
            <div  className="text-green-500 mb-4">
              <Simpleloader/>
            </div>
          )}
          <div>
            <label htmlFor="username" className="block text-sm font-medium text-gray-700">
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 bg-indigo-600 text-white font-semibold rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
