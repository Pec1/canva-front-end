"use client"
import { useEffect, useState } from "react";

export default function Profile() {
    const [cookie, setCookie] = useState<string | null>(null);

    useEffect(() => {
      const accessToken = localStorage.getItem('accessToken');
      setCookie(accessToken);
    }, []);
  
    return (
      <div>
        <h1>Valor do token:</h1>
        <p>{cookie}</p>
      </div>
    );
}