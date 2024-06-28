'use server'

export async function loginUser(data: FormData) {
    // console.log(Object.fromEntries(data))

    const login = data.get('login');
    const password = data.get('password');

    const response = await fetch(`http://127.0.0.1:5555/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ login, password }),
    });

    const result = await response.json();
    console.log(result);
    
    return result
}