import { ProductType } from "../../../ProductType"
import { ProductImage } from "./ProductImage"

type ProductProps = {
    product: ProductType
}

export function Product({ product } : ProductProps){
    return(
        <div className="flex flex-col shadow-lg h-96 bg-slate-800 p-5">
            <div className="relative max-h-72 flex-1">
                <ProductImage product={product} fill />
            </div>
            <div className="flex justify-between font-bold my-3 text-white">
                <p className="w-40 truncate">{product.title}</p>
                <p className="text-md text-teal-300">{product.price}</p>
            </div>
            <button className="rounded-md bg-teal-600 text-white px-3.5 py-2.5 text-sm text-center">Adicionar ao carrinho</button>
        </div>
    )
}