import ProductCard from "./ProductCard";

export function ProductList({ category }) {
    const products = [
        {
            name: "Laptop XYZ",
            price: 999.99,
            image: "https://m.media-amazon.com/images/I/612vM0pdKCL.jpg"
        },
        {
            name: "Smartphone ABC",
            price: 699.99,
            image: "https://i.pcmag.com/imagery/reviews/043DROGFihmSgG7S6LUb006-1.fit_lim.size_919x518.v1709854231.jpg"
        },
        {
            name: "Tablet 123",
            price: 499.99,
            image: "https://tienda.claro.com.co/wcsstore/Claro/images/catalog/equipos/646x1000/70056838.jpg"
        },
        {
            name: "Smartwatch 789",
            price: 199.99,
            image: "https://teknopolis.vtexassets.com/arquivos/ids/212030/Celular-Tecno-Spark-20-8GB--256GB-Negro-1.jpg?v=638412808232800000"
        },
        {
            name: "Gaming PC Ultimate",
            price: 1499.99,
            image: "https://www.shutterstock.com/image-photo/antalya-turkey-september-14-2023-600nw-2361673217.jpg"
        },
        {
            name: "Wireless Earbuds",
            price: 129.99,
            image: "https://www.losdistribuidores.com/wp-content/uploads/2023/09/iphone-15-azul-ambas-caras.webp"
        },
        {
            name: "External Hard Drive",
            price: 89.99,
            image: "https://multipoint.com.ar/Image/0/750_750-d143.jpg"
        }
    ];


    return (
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {products
                .filter((product) => category === 'All' || product.category === category)
                .map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
        </div>
    );
}

export default ProductList;
