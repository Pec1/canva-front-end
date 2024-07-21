'use server'

interface DataProps {
    login: string,
    password: string
}

export async function loginUser(data: DataProps) {

    const response = await fetch(`http://127.0.0.1:5555/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });

    const result = await response.json();
    console.log(result);
    
    return result
}