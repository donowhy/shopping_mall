import {QueryClient,} from '@tanstack/react-query';

type AnyOBJ = {[key: string]: never};

const BASE_URL = 'https://fakestoreapi.com'
// singleton
export const getQueryClient = (() => {
    let client: QueryClient | null = null;
    return () => {
        if (!client) {
            client = new QueryClient({
                defaultOptions : {
                    queries : {
                        gcTime : 1000 * 60 * 10,
                        staleTime : 1000 * 60 * 5,
                        refetchOnMount : false,
                        refetchOnReconnect : false,
                        refetchOnWindowFocus : false
                    }
                }
            });
        }
        return client;
    };
})();

export const fetcher = async ({
    method,
    path,
    body,
    params
} : {
    method : 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';
    path : string;
    body?: AnyOBJ;
    params?: AnyOBJ;
})=> {
    try{
        let url = `${BASE_URL}${path}`
        const fetchOptions: RequestInit = {
            method,
            headers : {
                'Content-Type' : 'application/json',
                'Access-Control-Allow-Origin' : BASE_URL
            }
        }

        if(params) {
            const searchParams = new URLSearchParams(params)
            url += '?' + searchParams.toString()
        }

        if(body)fetchOptions.body = JSON.stringify(body)

        const res = await fetch(url, fetchOptions)
        return await res.json()
    }catch (err) {
        console.error(err)
    }
}

export const QueryKeys = {
    PRODUCTS: 'PRODUCTS',
}
