"use client"
import { useEffect, useState } from "react";
import { getUser } from "./actions";
import { useCookies } from 'react-cookie';

type User = {
  id: string;
  userName: string;
  email: string;
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
                  <h1>Token de acesso: {token}</h1>
                  <p>Id: {user.id}</p>
                  <p>Nome: {user.userName}</p>
                  <p>Email: {user.email}</p>
                  <p>Login: {user.login}</p>
                  <p>Senha: {user.password}</p>
                  <p>Slug: {user.slug}</p>
                  <p>Criado em: {user.createdAt}</p>
                </div>
            )}
        </div>
    );
}
