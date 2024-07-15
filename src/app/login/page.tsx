"use client"
import { SubmitHandler, useForm } from "react-hook-form";
import { Input } from "../components/Input";
import { ArrowRight } from "lucide-react";
import { loginUser } from "./actions";
import { FormEvent, useState } from "react";
import Image from "next/image";
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';

type LoginResponse = {
  message: string;
  token: string;
};

type SignInFormData = {
  login: string;
  password: string;
}

const SignInFormSchema = z.object({
  login: z.string().min(1, 'Campo obrigatorio'),
  password: z.string().min(1, 'Campo obrigatorio'),
})

export default function Login() {
  const { register, handleSubmit, formState } = useForm<SignInFormData>({
    resolver: zodResolver(SignInFormSchema)
  })
  const { errors } = formState

  const handleSignIn: SubmitHandler<SignInFormData> = async (values) => {
    try {
      const formData = new FormData()
      
      formData.append('login', values.login)
      formData.append('password', values.password)

      const response = await loginUser(formData)
      console.log('Token JWT obtido:', response)
      localStorage.setItem('accessToken', response.token)
    } catch (error) {
      console.error('Error logging in:', error)
    }
  }

  return (
    <div className="flex justify-center items-center w-screen h-screen bg-[#1c1c1c] font-sans">
      <div className="flex flex-col justify-center items-center w-[500px] h-[700px] rounded-[50px] bg-white">
        <Image width={150} height={150} src="./logo-svg-pvldo.svg" alt="Logo do projeto" title="Logo de um calango roxo" />

        <h1 className="text-4xl text-black">Faça login</h1>

        <form onSubmit={handleSubmit(handleSignIn)} className="flex flex-col m-7 justify-center items-center gap-5">
          <Input 
            type="text" 
            placeholder="Login" 
            error={errors.login}
            {...register('login')}
          />

          <Input 
            type="text" 
            placeholder="Senha" 
            error={errors.password}
            {...register('password')}
          />

          <button type="submit" className="flex justify-center items-center w-[150px] h-[100px] rounded-[25px] bg-[#B055B2]">
            <ArrowRight color="#1c1c1c" size={'50px'} />
          </button>
        </form>
      </div>
    </div>      
  );
}