import ProductCard from './ProductCard';

export function RecommendedProducts() {
    const recommendedProducts = [
        {
            id: 1,
            name: 'Laptop Gamer',
            price: 1200,
            image: 'https://images.unsplash.com/photo-1593642634367-d91a135587b5',
            category: 'Computadoras'
        },
        {
            id: 2,
            name: 'Smartphone Pro',
            price: 800,
            image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9',
            category: 'Celulares'
        },
        {
            id: 3,
            name: 'Tablet 10"',
            price: 300,
            image: 'https://media.gq.com.mx/photos/61e70ca25def32c5619cef06/16:9/w_1280,c_limit/Lenovo%20Yoga%20Slim%207%20Pro.jpg',
            category: 'Tablets'
        },
        {
            id: 4,
            name: 'Monitor 4K',
            price: 500,
            image: 'https://m.media-amazon.com/images/I/612vM0pdKCL.jpg',
            category: 'Accesorios'
        }
    ];


    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {recommendedProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
            ))}
        </div>
    );
}

export default RecommendedProducts;
