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
            // const response = await getUser(token);
            // setUser(response.user); 
          } catch (error) {
            console.error('Erro ao buscar dados:', error);
          }
        }
    
        fetchData();
      }, [token]);
    return (
        <div className="flex justify-center items-center w-screen h-screen">
          <div className="flex flex-col w-[300px] h-[450px]">
            <div className="relative w-[300px] h-[135px] border-[1px] border-b-0 rounded-t-xl border-[#FFFFFF] bg-[#1C1C1C]">
              <div className="absolute flex justify-center items-center top-2/3 left-1/3 w-[100px] h-[100px] rounded-xl bg-[#B055B2] font-bold text-6xl text-zinc-300">
                UT
              </div>
            </div>

            <div className="flex flex-col items-center w-[300px] h-[315px] border-[1px] border-t-0 rounded-b-xl border-[#FFFFFF] bg-[#313338] text-zinc-300">
              <div className="flex flex-col justify-center items-center mt-16">
                <h1 className="font-bold text-3xl">{user?.userName}</h1>
                <p>@{user?.slug}</p>
                <p>{user?.email}</p>
                <p>{user?.login}</p>
                <p>{user?.password}</p>
              </div>

              {user?.createdAt}
            </div>
          </div>
        </div>
    );
}
{/* <h1>Token de acesso: {token}</h1>*/}