'use server'

export async function getUser() {
     const response = await fetch(`http://127.0.0.1:5555/painel`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    });
    
    if (!response.ok) {
        throw Error(`Erro ao fazer requisição: ${response.status}`);
    }

    const result = await response.json(); 
    console.log(result)

    return result
}