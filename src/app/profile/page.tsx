"use client"
import { useEffect, useState } from "react";
import { getUser } from "./actions";
import { useCookies } from 'react-cookie';

type User = {
  id: string;
  userName: string;
  login: string;
  password: string;
  slug: string;
  createdAt: string;
};

export default function Profile() {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);

      const cookie = localStorage.getItem('accessToken');
      console.log(cookie)
      try {
        const userData = await getUser(cookie);
        setUser(userData);
      } catch (error) {
        console.error("Error fetching user data:", error);
      } finally {
        setIsLoading(false); 
      }
    }
    fetchData();
  }, []); 

  return (
    <div>
      {isLoading ? (
        <div>Loading user profile...</div>
      ) : (
        <h1>{user?.userName}</h1>
      )}
    </div>
  )

}
