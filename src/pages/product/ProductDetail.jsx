import React, { useState } from 'react';
import {
    Navbar,
    Typography,
    Button,
    IconButton,
    Breadcrumbs,
    Input,
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Tooltip,
    Chip
} from "@material-tailwind/react";
import {
    ShoppingCartIcon,
    HeartIcon,
    MagnifyingGlassIcon,
    Bars3Icon,
    UserCircleIcon
} from "@heroicons/react/24/outline";
import { Footer } from '../../widgets/layout';
import RelatedProducts from '../../widgets/custom/RelatedProducts';
import { Product } from '../../widgets/custom';
import { Link } from 'react-router-dom';

export function ProductDetail() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const product = {
        name: "Laptop Ultra Pro",
        price: 1299.99,
        image: "https://www.alkosto.com/medias/4711387556658-002-750Wx750H?context=bWFzdGVyfGltYWdlc3wzMzkzOHxpbWFnZS93ZWJwfGFEaGtMMmhqTkM4eE5EUTRORFF5TmpnNE16RXdNaTgwTnpFeE16ZzNOVFUyTmpVNFh6QXdNbDgzTlRCWGVEYzFNRWd8MTU1OThlZjY3ZWM3NjA5ZTBmZjBjMDZjOTY5Nzg0OThmZmNlYjM0N2JhMTI1YmVjYjkzNDQ3NzZjNTY5NjQxNg",
        specifications: {
            Procesador: "Intel Core i7",
            RAM: "16 GB",
            Almacenamiento: "512 GB SSD",
            Pantalla: "15.6 pulgadas 4K",
            "Tarjeta Gráfica": "NVIDIA GeForce RTX 3060",
            Batería: "10 horas",
            "Sistema Operativo": "Windows 11",
        },
    };



    const relatedProducts = [
        {
            id: 1,
            name: "Laptop Pro Light",
            price: 999.99,
            image: "https://cdn.mos.cms.futurecdn.net/3kcgKLkfPRbskpsYzW239d.jpg",
        },
        {
            id: 2,
            name: "Laptop Gaming X",
            price: 1499.99,
            image: "https://i.pcmag.com/imagery/reviews/07f8FmuWzIKHir2YRAXsK7G-1.fit_lim.size_919x518.v1716757237.jpg",
        },
        {
            id: 3,
            name: "Laptop Business",
            price: 1199.99,
            image: "https://cdn.thewirecutter.com/wp-content/media/2024/07/laptopstopicpage-2048px-3685-2x1-1.jpg?width=2048&quality=75&crop=2:1&auto=webp",
        },
    ];

    return (
        <div className="min-h-screen w-full bg-gray-50">

            {/* Main Content */}
            <main className="container mx-auto px-4 py-8">
                {/* Breadcrumbs */}
                <Breadcrumbs className="bg-transparent">
                    <Link to="/">
                        Inicio
                    </Link>
                    <Link to="/products">
                        Productos
                    </Link>
                    <Link to="">
                        {product.name}
                    </Link>
                </Breadcrumbs>

                <Product product={product} />

                <RelatedProducts relatedProducts={relatedProducts} />

            </main>
            <Footer />
        </div>
    );
};

export default ProductDetail;