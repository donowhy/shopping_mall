import {useRoutes} from "react-router-dom"
import {routes} from './routes.tsx'
import {getQueryClient} from "./queryClient.tsx";
import {QueryClientProvider} from "@tanstack/react-query";
import React from "react";
import Gnb from "./components/cart/gnb.tsx";
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

const App = () => {
    const elem =  useRoutes(routes)
    const queryClient = getQueryClient()
    return (
        <QueryClientProvider client={queryClient}>
        <Gnb/>
            {elem}
        <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
    )
}

export default App