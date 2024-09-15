// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


// Define a service using a base URL and expected endpoints
export const productsAPi = createApi({
  reducerPath: 'productsAPi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://fakestoreapi.com/' }),
  endpoints: (builder) => ({
    Products: builder.query({
      query: () => `products`,
    }),
  }),
})

export const { useProductsQuery } = productsAPi;