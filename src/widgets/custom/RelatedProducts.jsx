import { Button, Card, CardBody, CardFooter, CardHeader, Typography } from "@material-tailwind/react"
import { useNavigate } from "react-router-dom"

export function RelatedProducts({ relatedProducts }) {
    const navigate = useNavigate();
    return (
        <section className="mt-16">
            <Typography variant="h4" color="blue-gray" className="mb-6">
                Productos Relacionados
            </Typography>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {relatedProducts.map((relatedProduct, index) => (
                    <Card key={index} className="overflow-hidden">
                        <CardHeader
                            floated={false}
                            shadow={false}
                            color="transparent"
                            className="m-0 rounded-none"
                        >
                            <img
                                src={relatedProduct.image}
                                alt={relatedProduct.name}
                                className="w-full h-48 object-cover"
                            />
                        </CardHeader>
                        <CardBody>
                            <Typography variant="h5" color="blue-gray">
                                {relatedProduct.name}
                            </Typography>
                            <Typography color="blue" className="mt-2 font-medium">
                                ${relatedProduct.price}
                            </Typography>
                        </CardBody>
                        <CardFooter className="pt-0">
                            <Button
                                ripple={false}
                                fullWidth={true}
                                className="bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:shadow-none hover:scale-105 focus:shadow-none focus:scale-105 active:scale-100"
                                onClick={() => navigate(`/products/${relatedProduct.id}`)}
                            >
                                Ver Detalles
                            </Button>
                        </CardFooter>
                    </Card>
                ))}
            </div>
        </section>
    )
}

export default RelatedProducts
