'use server'

export async function getUser(cookie: string) {;
    const response = await fetch(`http://127.0.0.1:5555/painel`, {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${cookie}`,
        },
    });
    console.log(response)
   /*  if (!response.ok) {
        throw new Error('Failed to fetch user data');
    }    */ 

    const result = await response.json(); 
    return result
}