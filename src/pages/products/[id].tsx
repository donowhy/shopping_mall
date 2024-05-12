import {useQuery} from "@tanstack/react-query";
import {Product} from "../../types.ts";
import {fetcher, QueryKeys} from "../../queryClient.tsx";
import React from "react";
import {useParams} from "react-router-dom";
import ProductDetail from "../../components/products/detail.tsx";

const ProductDetailPage = () => {
    const {id} = useParams()

    const {data} = useQuery<Product>(
        {
            queryKey: [QueryKeys.PRODUCTS, id],
            queryFn: () => fetcher({
                method: 'GET',
                path: `/products/${id}`
            })
        });

    if (!data) return null;


    return <ProductDetail item={data}/>;
}
export default ProductDetailPage