import React, { useState } from 'react';
import {
    Navbar,
    Typography,
    Button,
    IconButton,
    Breadcrumbs,
    Input,
    Card,
    CardBody,
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter,
    Chip,
    Tabs,
    TabsHeader,
    TabsBody,
    Tab,
    TabPanel,
    Tooltip
} from "@material-tailwind/react";
import {
    ShoppingCartIcon,
    HeartIcon,
    TrashIcon,
    PlusIcon,
    MinusIcon,
    XMarkIcon,
    UserCircleIcon,
    ShoppingBagIcon,
    Bars3Icon
} from "@heroicons/react/24/outline";
import { Link } from 'react-router-dom';

export function CartAndFavorites() {
    const [activeTab, setActiveTab] = useState("carrito");
    const [isCheckoutDialogOpen, setIsCheckoutDialogOpen] = useState(false);

    // Estado para los productos del carrito
    const [cartItems, setCartItems] = useState([
        {
            id: 1,
            name: "Laptop Ultra Pro",
            price: 1299.99,
            image: "https://cdn.thewirecutter.com/wp-content/media/2023/07/4kmonitors-2048px-9794.jpg",
            quantity: 1,
            specifications: {
                Procesador: "Intel Core i7",
                RAM: "16 GB"
            }
        },
        {
            id: 2,
            name: "Mouse Gaming Pro",
            price: 59.99,
            image: "https://media.gq.com.mx/photos/61e70ca25def32c5619cef06/16:9/w_1280,c_limit/Lenovo%20Yoga%20Slim%207%20Pro.jpg",
            quantity: 2,
            specifications: {
                DPI: "16000",
                "Botones programables": "8"
            }
        }
    ]);

    // Estado para los productos favoritos
    const [favoriteItems, setFavoriteItems] = useState([
        {
            id: 3,
            name: "Laptop Gaming X",
            price: 1499.99,
            image: "https://multipoint.com.ar/Image/0/750_750-d143.jpg",
            specifications: {
                Procesador: "Intel Core i9",
                RAM: "32 GB"
            },
            stock: true
        },
        {
            id: 4,
            name: "Teclado Mecánico RGB",
            price: 129.99,
            image: "https://tienda.claro.com.co/wcsstore/Claro/images/catalog/equipos/646x1000/70056838.jpg",
            specifications: {
                Switches: "Cherry MX Blue",
                Formato: "TKL"
            },
            stock: false
        }
    ]);

    // Funciones para el carrito
    const updateQuantity = (id, change) => {
        setCartItems(items =>
            items.map(item =>
                item.id === id
                    ? { ...item, quantity: Math.max(1, item.quantity + change) }
                    : item
            )
        );
    };

    const removeFromCart = (id) => {
        setCartItems(items => items.filter(item => item.id !== id));
    };

    const calculateTotal = () => {
        return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
    };

    // Funciones para favoritos
    const removeFromFavorites = (id) => {
        setFavoriteItems(items => items.filter(item => item.id !== id));
    };

    const moveToCart = (item) => {
        removeFromFavorites(item.id);
        setCartItems(current => [...current, { ...item, quantity: 1 }]);
    };


    return (
        <div className="h-full w-full bg-gray-50">
            {/* Main Content */}
            <main className="container mx-auto px-4 py-8">
                {/* Breadcrumbs */}
                <Breadcrumbs className="bg-transparent">
                    <Link to="/">
                        Inicio
                    </Link>
                    <Link to="">
                        Mi Cuenta
                    </Link>

                </Breadcrumbs>

                {/* Tabs Section */}
                <div className="mt-8">
                    <Tabs value={activeTab} className="max-w-[40rem] mx-auto">
                        <TabsHeader>
                            <Tab value="carrito" onClick={() => setActiveTab("carrito")}>
                                <div className="flex items-center gap-2">
                                    <ShoppingBagIcon className="w-5 h-5" />
                                    Carrito ({cartItems.length})
                                </div>
                            </Tab>
                            <Tab value="favoritos" onClick={() => setActiveTab("favoritos")}>
                                <div className="flex items-center gap-2">
                                    <HeartIcon className="w-5 h-5" />
                                    Favoritos ({favoriteItems.length})
                                </div>
                            </Tab>
                        </TabsHeader>

                        <TabsBody>
                            <TabPanel value="carrito">
                                {cartItems.length > 0 ? (
                                    <div className="space-y-6">
                                        {cartItems.map((item) => (
                                            <Card key={item.id} className="p-4">
                                                <CardBody className="flex flex-col md:flex-row gap-4">
                                                    <img
                                                        src={item.image}
                                                        alt={item.name}
                                                        className="w-full md:w-48 h-48 object-cover rounded-lg"
                                                    />
                                                    <div className="flex-grow space-y-4">
                                                        <div className="flex justify-between items-start">
                                                            <div>
                                                                <Typography variant="h6" color="blue-gray">
                                                                    {item.name}
                                                                </Typography>
                                                                <Typography variant="small" color="gray">
                                                                    {Object.entries(item.specifications).map(([key, value]) => (
                                                                        `${key}: ${value}`
                                                                    )).join(' | ')}
                                                                </Typography>
                                                            </div>
                                                            <IconButton
                                                                variant="text"
                                                                color="red"
                                                                onClick={() => removeFromCart(item.id)}
                                                            >
                                                                <TrashIcon className="h-5 w-5" />
                                                            </IconButton>
                                                        </div>
                                                        <div className="flex justify-between items-center">
                                                            <div className="flex items-center gap-2">
                                                                <IconButton
                                                                    variant="outlined"
                                                                    size="sm"
                                                                    onClick={() => updateQuantity(item.id, -1)}
                                                                >
                                                                    <MinusIcon className="h-4 w-4" />
                                                                </IconButton>
                                                                <Typography className="w-12 text-center">
                                                                    {item.quantity}
                                                                </Typography>
                                                                <IconButton
                                                                    variant="outlined"
                                                                    size="sm"
                                                                    onClick={() => updateQuantity(item.id, 1)}
                                                                >
                                                                    <PlusIcon className="h-4 w-4" />
                                                                </IconButton>
                                                            </div>
                                                            <Typography variant="h6" color="blue-gray">
                                                                ${(item.price * item.quantity).toFixed(2)}
                                                            </Typography>
                                                        </div>
                                                    </div>
                                                </CardBody>
                                            </Card>
                                        ))}

                                        {/* Total y Checkout */}
                                        <Card className="p-4">
                                            <CardBody>
                                                <div className="flex justify-between items-center">
                                                    <Typography variant="h6">Total</Typography>
                                                    <Typography variant="h4" color="blue">
                                                        ${calculateTotal().toFixed(2)}
                                                    </Typography>
                                                </div>
                                                <Button
                                                    className="mt-4 w-full"
                                                    size="lg"
                                                    onClick={() => setIsCheckoutDialogOpen(true)}
                                                >
                                                    Proceder al Pago
                                                </Button>
                                            </CardBody>
                                        </Card>
                                    </div>
                                ) : (
                                    <div className="text-center py-8">
                                        <ShoppingBagIcon className="h-16 w-16 mx-auto text-blue-gray-300" />
                                        <Typography variant="h6" className="mt-4">
                                            Tu carrito está vacío
                                        </Typography>
                                        <Button className="mt-4" variant="outlined">
                                            Continuar Comprando
                                        </Button>
                                    </div>
                                )}
                            </TabPanel>

                            <TabPanel value="favoritos">
                                {favoriteItems.length > 0 ? (
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        {favoriteItems.map((item) => (
                                            <Card key={item.id} className="p-4">
                                                <CardBody>
                                                    <div className="relative">
                                                        <img
                                                            src={item.image}
                                                            alt={item.name}
                                                            className="w-full h-48 object-cover rounded-lg"
                                                        />
                                                        <Chip
                                                            value={item.stock ? "En Stock" : "Sin Stock"}
                                                            color={item.stock ? "green" : "red"}
                                                            className="absolute top-2 right-2"
                                                        />
                                                    </div>
                                                    <div className="mt-4 space-y-2">
                                                        <Typography variant="h6" color="blue-gray">
                                                            {item.name}
                                                        </Typography>
                                                        <Typography variant="small" color="gray">
                                                            {Object.entries(item.specifications).map(([key, value]) => (
                                                                `${key}: ${value}`
                                                            )).join(' | ')}
                                                        </Typography>
                                                        <Typography variant="h6" color="blue">
                                                            ${item.price}
                                                        </Typography>
                                                        <div className="flex gap-2 mt-4">
                                                            <Button
                                                                variant="outlined"
                                                                className="flex-1"
                                                                onClick={() => moveToCart(item)}
                                                                disabled={!item.stock}
                                                            >
                                                                Añadir al Carrito
                                                            </Button>
                                                            <IconButton
                                                                variant="text"
                                                                color="red"
                                                                onClick={() => removeFromFavorites(item.id)}
                                                            >
                                                                <TrashIcon className="h-5 w-5" />
                                                            </IconButton>
                                                        </div>
                                                    </div>
                                                </CardBody>
                                            </Card>
                                        ))}
                                    </div>
                                ) : (
                                    <div className="text-center py-8">
                                        <HeartIcon className="h-16 w-16 mx-auto text-blue-gray-300" />
                                        <Typography variant="h6" className="mt-4">
                                            No tienes productos favoritos
                                        </Typography>
                                        <Button className="mt-4" variant="outlined">
                                            Explorar Productos
                                        </Button>
                                    </div>
                                )}
                            </TabPanel>
                        </TabsBody>
                    </Tabs>
                </div>
            </main>

            {/* Diálogo de Checkout */}
            <Dialog open={isCheckoutDialogOpen} handler={() => setIsCheckoutDialogOpen(false)}>
                <DialogHeader>Finalizar Compra</DialogHeader>
                <DialogBody divider className="grid gap-4">
                    <Input label="Nombre Completo" />
                    <Input label="Correo Electrónico" />
                    <Input label="Dirección de Envío" />
                    <Input label="Número de Tarjeta" />
                    <div className="grid grid-cols-2 gap-4">
                        <Input label="Fecha de Expiración" />
                        <Input label="CVV" />
                    </div>
                </DialogBody>
                <DialogFooter>
                    <Button
                        variant="text"
                        color="red"
                        onClick={() => setIsCheckoutDialogOpen(false)}
                        className="mr-1"
                    >
                        Cancelar
                    </Button>
                    <Button onClick={() => setIsCheckoutDialogOpen(false)}>
                        Confirmar Pedido
                    </Button>
                </DialogFooter>
            </Dialog>
        </div>
    );
}
