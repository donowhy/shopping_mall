import {useQuery,} from "@tanstack/react-query";
import {fetcher, QueryKeys} from "../../queryClient.tsx";
import {Product} from "../../types.ts";
import React from "react";
import ProductItem from "../../components/products/item.tsx"

const  ProductList= () => {
    const {data} = useQuery<Product[]>(
        {
            queryKey : [QueryKeys.PRODUCTS],
        queryFn: () => fetcher({
        method:'GET',
        path: '/products'
    })
});

    return (
        <div>
            <h2>상품목록 페이지</h2>
            <ul className="products">
            {data?.map((product) => (
                <ProductItem {...product} key={product.id} />
            ))}
            </ul>
        </div>
    );
}
export default ProductList