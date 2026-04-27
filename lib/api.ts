type fetchOptions = {
    method? : "GET" | "POST" | "PATCH" | "DELETE",
    body? : unknown
    headers? : HeadersInit,
}


export async function apiFetch<T>(
    url : string,
    options : fetchOptions = {}
) : Promise<T> { 

    const {method = "GET", body, headers} = options
    
    const response = await fetch(url, {
        method,
        headers : {
            "Content-Type": "application/json",
            ...headers,
        },
        body : body ? JSON.stringify(body) : undefined
    })

    if(!response.ok) {
        throw new Error (`Request failed : ${response.status}`)
    }

    const data = await response.json();

    return data
}