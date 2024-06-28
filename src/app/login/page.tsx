"use client"
import { ArrowRight } from "lucide-react";
import { Input } from "../components/Input";
import { loginUser } from "./actions";
import { useState } from "react";
import Image from "next/image";
import { useForm } from "react-hook-form";

export default function Login() {
 const { register, handleSubmit } = useForm()

  function handleSignin(values) {
    console.log(values)
  }

  return (
    <div className="flex justify-center items-center w-screen h-screen bg-[#1c1c1c] font-sans">
      <div className="flex flex-col justify-center items-center gap-12 w-[500px] h-[700px] rounded-[50px] bg-white">
        <div className="flex justify-center items-center w-[145px] h-[145px] rounded-[100px] bg-[#1c1c1c]">
          <Image width={100} height={100} src="./logo_lizard.svg" alt="Logo do projeto" title="Logo de um calango roxo" />
        </div>

        <h1 className="text-4xl text-black">Faça login</h1>

        <form onSubmit={handleSubmit(handleSignin)} className="flex flex-col justify-center items-center gap-5">
          <Input text="NOME DE USUÁRIO" type="text" {...register('login')} />
          <Input text="SENHA" type="password" {...register('password')} />

          <button type="submit" className="flex justify-center items-center w-[150px] h-[100px] rounded-[25px] bg-[#B055B2]">
            <ArrowRight color="#1c1c1c" size={'50px'} />
          </button>
        </form>
      </div>
    </div>      
  );
}