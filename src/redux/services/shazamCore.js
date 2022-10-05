import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

    export const shazamCoreApi = createApi({
        reducerPath: 'shazamCoreApi',
        baseQuery: fetchBaseQuery({
            baseUrl: 'https://shazam-core.p.rapidapi.com/v1',
            prepareHeaders: (headers) => {
                headers.set('X-RapidAPI-Key', 'c03a2e4613mshaec2909cdce0fd3p19f1a8jsn62c4a0c4c971');

                return headers;
            }
        }),
        endpoints: (builder) => ({
            getTopCharts: builder.query({ query: () => `/charts/world` }),
        }),
    })

export const {
    useGetTopChartsQuery,
} = shazamCoreApi;