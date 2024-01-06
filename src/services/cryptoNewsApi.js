import {createApi , fetchBaseQuery} from "@reduxjs/toolkit/query/react"

const cryptoNewsApiHeaders = {
    'X-BingApis-SDK': 'true',
    'X-RapidAPI-Key': 'a543904fa6msh61bce95fcc26813p19c704jsne880d6c55bbc',
    'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com'
}

const baseUrl = 'https://bing-news-search1.p.rapidapi.com/news';

const createRequest = (url) => ({url , headers : cryptoNewsApiHeaders})

export const cryptoNewsApi = createApi({
    reducerPath : "cryptoNewsApi",
    baseQuery : fetchBaseQuery({baseUrl}),
    endpoints : (builder) => ({
        getCryptoNews : builder.query({
            query : ({newsCategory , count }) => createRequest(`/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`)
        })
    })
})

export const { useGetCryptoNewsQuery } = cryptoNewsApi ;