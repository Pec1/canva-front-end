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

    const token = localStorage.getItem('accessToken')
    useEffect(() => {
        async function fetchData() {
          try {
            const response = await getUser(token);
            setUser(response.user); 
          } catch (error) {
            console.error('Erro ao buscar dados:', error);
          }
        }
    
        fetchData();
      }, [token]);
    return (
        <div>
            {user && (
                <div>
                    <h1>Nome: {user.userName}</h1>
                    <p>Id: {user.id}</p>
                </div>
            )}
        </div>
    );
}
