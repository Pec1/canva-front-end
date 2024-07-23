'use server'

interface DataProps {
    login: string,
    password: string
}

export async function loginUser(data: FormData) {
    const login = data.get('login');
    const password = data.get('password');

    const response = await fetch(`http://localhost:5555/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({login, password}),
    });

    //await new Promise(resolve => setTimeout(resolve, 3000))

    const result = await response.json();
    console.log(result);
    
    return result
}