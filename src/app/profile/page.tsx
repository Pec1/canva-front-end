"use client"
import { useEffect, useState } from "react";

export default function Profile() {

  const cookies = document.cookie.split('; ');
  for (const cookie of cookies) {
    const [name, value] = cookie.split('=');
    if (name === 'sessionId') {
      console.log('Valor do cookie:', value);
      break;
    }
  }

  
    return (
      <div>
        <h1>Valor do token:</h1>

      </div>
    );
}