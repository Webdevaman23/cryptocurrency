import {createApi , fetchBaseQuery} from "@reduxjs/toolkit/query/react"

const cryptoNewsHeaders = {
    'X-RapidAPI-Key': 'a543904fa6msh61bce95fcc26813p19c704jsne880d6c55bbc',
    'X-RapidAPI-Host': 'cryptocurrency-news2.p.rapidapi.com'
}

const baseUrl = 'https://cryptocurrency-news2.p.rapidapi.com/v1/coindesk';


const createRequest = (url) => ({ url, headers: cryptoNewsHeaders });

export const cryptoNewsApi = createApi({
    reducerPath: 'cryptoNewsApi',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        getCryptoNews: builder.query({
            query: ({ count }) => createRequest(`?limit=${count}`),
        }),
    }),
});

export const { useGetCryptoNewsQuery } = cryptoNewsApi;



// /search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}