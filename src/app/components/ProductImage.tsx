"use client"

import Image from "next/image"
import { useState } from "react"
import { ProductType } from "../../../ProductType"

type ProductImageProps = {
    product: ProductType;
    fill?: boolean;
}

export function ProductImage({ product, fill }: ProductImageProps) {
    const [loading, setLoading] = useState(true)

    return fill ? (
        <Image
            src={product.image}
            fill
            alt={product.title}
            className={`object-cover ${loading ? 'scale-110 blur-3xl grayscale' : 'scale-100 blur-0 grayscale-0'}`}
            onLoadingComplete={() => setLoading(false)}
        />
    ) : (
        <Image
            src={product.image}
            width={400}
            height={700}
            fill
            alt={product.title}
            className={`object-cover ${loading ? 'scale-110 blur-3xl grayscale' : 'scale-100 blur-0 grayscale-0'}`}
            onLoadingComplete={() => setLoading(false)}
        />
    )
}