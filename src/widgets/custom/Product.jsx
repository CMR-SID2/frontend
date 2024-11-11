import React from 'react';
import { Card, CardHeader, CardBody, Typography, Chip, Button } from '@material-tailwind/react';
import { HeartIcon, ShoppingCartIcon } from '@heroicons/react/24/outline';

export function Product({ product }) {
    return (
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Product Image */}
            <div className="relative">
                <img
                    src={product.image}
                    alt={product.name}
                    className="w-full rounded-lg shadow-lg"
                />
                <Chip
                    value="Nuevo"
                    className="absolute top-8 right-8"
                    color="blue"
                />
            </div>

            {/* Product Info */}
            <div className="space-y-6">
                <div>
                    <Typography variant="h2" color="blue-gray" className="mb-2">
                        {product.name}
                    </Typography>
                    <Typography variant="h4" color="blue" className="font-normal">
                        ${product.price}
                    </Typography>
                </div>

                <div className="grid grid-cols-2 gap-4">
                    {Object.entries(product.specifications).map(([key, value]) => (
                        <div key={key} className="space-y-1">
                            <Typography
                                variant="small"
                                color="blue-gray"
                                className="font-medium"
                            >
                                {key}
                            </Typography>
                            <Typography variant="paragraph" className="text-gray-700">
                                {value}
                            </Typography>
                        </div>
                    ))}
                </div>

                <div className="flex gap-4">
                    <Button size="lg" className="flex items-center gap-2">
                        <ShoppingCartIcon strokeWidth={2} className="h-5 w-5" />
                        Agregar al Carrito
                    </Button>
                    <Button
                        size="lg"
                        variant="outlined"
                        className="flex items-center gap-2"
                    >
                        <HeartIcon strokeWidth={2} className="h-5 w-5" />
                        Favoritos
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default Product;
