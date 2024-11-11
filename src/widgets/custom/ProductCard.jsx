import { Card, CardHeader, CardBody, CardFooter, Button, Typography } from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";

export function ProductCard({ product }) {
    const navigate = useNavigate();
    return (
        <Card className="shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <CardHeader color="white" className="relative h-48 mt-4">
                <img src={product.image} alt={product.name} className="h-full w-full object-cover" />
            </CardHeader>
            <CardBody className="text-center p-6">
                <Typography variant="h5" color="blue-gray" className="font-semibold mb-2">
                    {product.name}
                </Typography>
                <Typography color="gray" className="text-md">
                    ${product.price}
                </Typography>
            </CardBody>
            <CardFooter className="flex justify-center">
                <Button color="blue" variant="gradient" fullWidth onClick={() => navigate(`/products/${product.id}`)}>
                    Ver Detalles
                </Button>
            </CardFooter>
        </Card>
    );
}

export default ProductCard;
