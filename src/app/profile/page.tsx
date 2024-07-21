"use client"
import { useEffect, useState } from "react";
import { getUser } from "./actions";
import { MessageInput } from "../components/message-input";
import { MessageCard } from "../components/message-card";

type User = {
  id: string;
  userName: string;
  email: string;
  login: string;
  password: string;
  slug: string;
  createdAt: string;
};

interface Message {
  id: string,
  content: string,
  date: Date,
  user: User
}

export default function Profile() {
  const [user, setUser] = useState<User | null>(null);
  const [messages, setMessages] = useState<Message[]>(() => {
    const messagesOnStorage = localStorage.getItem('messages')

    if (messagesOnStorage) {
      return JSON.parse(messagesOnStorage)
    }

    return []
  })
  const [ws, setWs] = useState<WebSocket | null>(null);

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
  
  useEffect(() => {
    const newWs = new WebSocket('ws://localhost:5555');
    setWs(newWs);

    newWs.onmessage = async (event) => {
      const text = await event.data.text();
      const newMessage = JSON.parse(text);
      setMessages(prevMessages => {
        const updatedMessages = [newMessage, ...prevMessages];
        localStorage.setItem('messages', JSON.stringify(updatedMessages));
        return updatedMessages;
      });
    };

    return () => {
      newWs.close();
    };
  }, []);

  function onMessageCreated(content: string) {
    const  newMessage = {
      id: crypto.randomUUID(),
      content,
      date: new Date(),
      user: user!,
    }

    const messagesArray = [newMessage, ...messages]
/*       setMessages(messagesArray)
    localStorage.setItem('messages', JSON.stringify(messagesArray)) */
    
    if (ws && ws.readyState === WebSocket.OPEN) {
      ws.send(JSON.stringify(newMessage));
    } else {
      console.error("WebSocket não está conectada para enviar mensagem");
    }
  }

/*  const filteredMessages = search !== ''
    ? messages.filter(message => message.content.toLocaleLowerCase().includes(search.toLocaleLowerCase()))
    : messages     */  
  
  return (
    <div className="flex justify-center items-center w-screen h-screen text-zinc-300">
      <div className="flex flex-col w-[300px] h-[450px]">
        <div className="relative w-[300px] h-[135px] border-[1px] border-b-0 rounded-t-xl border-[#FFFFFF] bg-[#1C1C1C]">
          <div className="absolute flex justify-center items-center top-2/3 left-1/3 w-[100px] h-[100px] rounded-xl bg-[#B055B2] font-bold text-6xl">
            UT
          </div>
        </div>

        <div className="flex flex-col items-center w-[300px] h-[315px] border-[1px] border-t-0 rounded-b-xl border-[#FFFFFF] bg-[#313338]">
          <div className="flex flex-col justify-center items-center mt-16">
            <h1 className="font-bold text-3xl">{user?.userName}</h1>
            <p className="opacity-65">@{user?.slug}</p>
            <p className="opacity-65">{user?.email}</p>
            <p className="opacity-65">{user?.login}</p>
            <p className="opacity-65">{user?.password}</p>
            <p className="opacity-65">{user?.createdAt}</p>
          </div>
        </div>
      </div>                  

      <div className="flex flex-col justify-end items-center w-[700px] h-[600px] p-5 border-[1px] rounded-xl border-[#FFFFFF] bg-[#1c1c1c]">
        <div className="flex flex-col-reverse w-[650px] h-full">
          {messages.map(message => {
            return (
              <MessageCard key={message.id} message={message} />
            )
          })}
        </div>
        <MessageInput onMessageCreated={onMessageCreated} />
      </div>
    </div>
  );
}
{/* <h1>Token de acesso: {token}</h1>*/}