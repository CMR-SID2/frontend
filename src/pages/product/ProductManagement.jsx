import { useState } from 'react';
import {
    Button,
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter,
    Input,
    Textarea,
    Select,
    Option,
    Alert,
    IconButton,
    Typography,
    Card,
    CardBody,
    CardFooter,
    Chip
} from "@material-tailwind/react";
import {
    PlusIcon,
    PencilSquareIcon,
    TrashIcon,
    ExclamationTriangleIcon,
    XMarkIcon
} from "@heroicons/react/24/outline";

export function ProductManagement() {
    // Estados para los diálogos
    const [isCreateOpen, setIsCreateOpen] = useState(false);
    const [isEditOpen, setIsEditOpen] = useState(false);
    const [isDeleteOpen, setIsDeleteOpen] = useState(false);
    const [showAlert, setShowAlert] = useState(false);
    const [alertData, setAlertData] = useState({ type: '', message: '' });

    // Estado para el producto seleccionado
    const [selectedProduct, setSelectedProduct] = useState(null);

    // Estado para la lista de productos
    const [products, setProducts] = useState([
        {
            id: 1,
            name: "Laptop Ultra Pro",
            price: 1299.99,
            image: "https://cdn.thewirecutter.com/wp-content/media/2023/07/4kmonitors-2048px-9794.jpg",
            category: "laptops",
            stock: 10,
            specifications: {
                Procesador: "Intel Core i7",
                RAM: "16 GB",
                Almacenamiento: "512 GB SSD",
                Pantalla: "15.6 pulgadas 4K",
            },
            description: "Laptop de alto rendimiento para profesionales",
            status: "active"
        },
        {
            id: 2,
            name: "Portatil Asus",
            price: 1400.99,
            image: "https://cdn.thewirecutter.com/wp-content/media/2024/07/laptopsunder500-2048px-5452.jpg?auto=webp&quality=75&width=1024",
            category: "laptops",
            stock: 14,
            specifications: {
                Procesador: "Intel Core i7",
                RAM: "16 GB",
                Almacenamiento: "512 GB SSD",
                Pantalla: "15.6 pulgadas 4K",
            },
            description: "Laptop de alto rendimiento para profesionales",
            status: "active"
        },

    ]);

    // Estado para el formulario
    const [formData, setFormData] = useState({
        name: '',
        price: '',
        category: '',
        stock: '',
        description: '',
        specifications: {
            Procesador: '',
            RAM: '',
            Almacenamiento: '',
            Pantalla: ''
        },
        status: 'active'
    });

    // Manejadores para los diálogos
    const handleCreateOpen = () => {
        setFormData({
            name: '',
            price: '',
            category: '',
            stock: '',
            description: '',
            specifications: {
                Procesador: '',
                RAM: '',
                Almacenamiento: '',
                Pantalla: ''
            },
            status: 'active'
        });
        setIsCreateOpen(true);
    };

    const handleEditOpen = (product) => {
        setSelectedProduct(product);
        setFormData({
            name: product.name,
            price: product.price,
            category: product.category,
            stock: product.stock,
            description: product.description,
            specifications: { ...product.specifications },
            status: product.status
        });
        setIsEditOpen(true);
    };

    const handleDeleteOpen = (product) => {
        setSelectedProduct(product);
        setIsDeleteOpen(true);
    };

    // Manejadores para el formulario
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSpecificationChange = (key, value) => {
        setFormData(prev => ({
            ...prev,
            specifications: {
                ...prev.specifications,
                [key]: value
            }
        }));
    };

    // Funciones para las operaciones CRUD
    const handleCreate = () => {
        const newProduct = {
            id: Date.now(),
            ...formData,
            image: "/api/placeholder/200/150" // Placeholder para la imagen
        };
        setProducts(prev => [...prev, newProduct]);
        setIsCreateOpen(false);
        showNotification('success', 'Producto creado exitosamente');
    };

    const handleEdit = () => {
        setProducts(prev =>
            prev.map(product =>
                product.id === selectedProduct.id
                    ? { ...product, ...formData }
                    : product
            )
        );
        setIsEditOpen(false);
        showNotification('success', 'Producto actualizado exitosamente');
    };

    const handleDelete = () => {
        setProducts(prev =>
            prev.filter(product => product.id !== selectedProduct.id)
        );
        setIsDeleteOpen(false);
        showNotification('success', 'Producto eliminado exitosamente');
    };

    // Función para mostrar notificaciones
    const showNotification = (type, message) => {
        setAlertData({ type, message });
        setShowAlert(true);
        setTimeout(() => setShowAlert(false), 3000);
    };

    return (
        <div className="container mx-auto px-4 py-8">
            {/* Botón para crear nuevo producto */}
            <div className="flex justify-between items-center mb-6">
                <Typography variant="h4" color="blue-gray">
                    Gestión de Productos
                </Typography>
                <Button
                    className="flex items-center gap-2"
                    onClick={handleCreateOpen}
                >
                    <PlusIcon className="h-5 w-5" />
                    Nuevo Producto
                </Button>
            </div>

            {/* Lista de productos */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {products.map((product) => (
                    <Card key={product.id} className="overflow-hidden">
                        <CardBody>
                            <div className="relative">
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="w-full h-48 object-cover rounded-lg"
                                />
                                <Chip
                                    value={product.stock > 0 ? "En Stock" : "Sin Stock"}
                                    color={product.stock > 0 ? "green" : "red"}
                                    className="absolute top-2 right-2"
                                />
                            </div>
                            <div className="mt-4 space-y-2">
                                <Typography variant="h6" color="blue-gray">
                                    {product.name}
                                </Typography>
                                <Typography variant="small" color="gray">
                                    Stock: {product.stock} unidades
                                </Typography>
                                <Typography variant="h6" color="blue">
                                    ${product.price}
                                </Typography>
                            </div>
                        </CardBody>
                        <CardFooter className="pt-0 flex justify-between">
                            <IconButton
                                variant="text"
                                color="blue"
                                onClick={() => handleEditOpen(product)}
                            >
                                <PencilSquareIcon className="h-5 w-5" />
                            </IconButton>
                            <IconButton
                                variant="text"
                                color="red"
                                onClick={() => handleDeleteOpen(product)}
                            >
                                <TrashIcon className="h-5 w-5" />
                            </IconButton>
                        </CardFooter>
                    </Card>
                ))}
            </div>

            {/* Diálogo de Crear Producto */}
            <Dialog open={isCreateOpen} handler={() => setIsCreateOpen(false)} size="lg">
                <DialogHeader className="flex items-center justify-between">
                    Crear Nuevo Producto
                    <IconButton
                        variant="text"
                        color="blue-gray"
                        onClick={() => setIsCreateOpen(false)}
                    >
                        <XMarkIcon className="h-5 w-5" />
                    </IconButton>
                </DialogHeader>
                <DialogBody divider className="grid gap-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <Input
                            label="Nombre del Producto"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                        />
                        <Input
                            label="Precio"
                            name="price"
                            type="number"
                            value={formData.price}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <Select
                            label="Categoría"
                            value={formData.category}
                            onChange={(value) => handleInputChange({ target: { name: 'category', value } })}
                        >
                            <Option value="laptops">Laptops</Option>
                            <Option value="smartphones">Smartphones</Option>
                            <Option value="accessories">Accesorios</Option>
                        </Select>
                        <Input
                            label="Stock"
                            name="stock"
                            type="number"
                            value={formData.stock}
                            onChange={handleInputChange}
                        />
                    </div>
                    <Textarea
                        label="Descripción"
                        name="description"
                        value={formData.description}
                        onChange={handleInputChange}
                    />
                    <Typography variant="h6" color="blue-gray" className="mb-2">
                        Especificaciones
                    </Typography>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {Object.keys(formData.specifications).map((key) => (
                            <Input
                                key={key}
                                label={key}
                                value={formData.specifications[key]}
                                onChange={(e) => handleSpecificationChange(key, e.target.value)}
                            />
                        ))}
                    </div>
                </DialogBody>
                <DialogFooter>
                    <Button
                        variant="text"
                        color="red"
                        onClick={() => setIsCreateOpen(false)}
                        className="mr-1"
                    >
                        Cancelar
                    </Button>
                    <Button onClick={handleCreate}>
                        Crear Producto
                    </Button>
                </DialogFooter>
            </Dialog>

            {/* Diálogo de Editar Producto */}
            <Dialog open={isEditOpen} handler={() => setIsEditOpen(false)} size="lg">
                <DialogHeader className="flex items-center justify-between">
                    Editar Producto
                    <IconButton
                        variant="text"
                        color="blue-gray"
                        onClick={() => setIsEditOpen(false)}
                    >
                        <XMarkIcon className="h-5 w-5" />
                    </IconButton>
                </DialogHeader>
                <DialogBody divider className="grid gap-4">
                    {/* Mismo contenido que el diálogo de crear */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <Input
                            label="Nombre del Producto"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                        />
                        <Input
                            label="Precio"
                            name="price"
                            type="number"
                            value={formData.price}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <Select
                            label="Categoría"
                            value={formData.category}
                            onChange={(value) => handleInputChange({ target: { name: 'category', value } })}
                        >
                            <Option value="laptops">Laptops</Option>
                            <Option value="smartphones">Smartphones</Option>
                            <Option value="accessories">Accesorios</Option>
                        </Select>
                        <Input
                            label="Stock"
                            name="stock"
                            type="number"
                            value={formData.stock}
                            onChange={handleInputChange}
                        />
                    </div>
                    <Textarea
                        label="Descripción"
                        name="description"
                        value={formData.description}
                        onChange={handleInputChange}
                    />
                    <Typography variant="h6" color="blue-gray" className="mb-2">
                        Especificaciones
                    </Typography>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {Object.keys(formData.specifications).map((key) => (
                            <Input
                                key={key}
                                label={key}
                                value={formData.specifications[key]}
                                onChange={(e) => handleSpecificationChange(key, e.target.value)}
                            />
                        ))}
                    </div>
                </DialogBody>
                <DialogFooter>
                    <Button
                        variant="text"
                        color="red"
                        onClick={() => setIsEditOpen(false)}
                        className="mr-1"
                    >
                        Cancelar
                    </Button>
                    <Button onClick={handleEdit}>
                        Guardar Cambios
                    </Button>
                </DialogFooter>
            </Dialog>

            {/* Diálogo de Eliminar Producto */}
            <Dialog open={isDeleteOpen} handler={() => setIsDeleteOpen(false)}>
                <DialogHeader className="flex items-center">
                    <ExclamationTriangleIcon className="h-6 w-6 text-red-500 mr-2" />
                    Confirmar Eliminación
                </DialogHeader>
                <DialogBody divider>
                    ¿Estás seguro de que deseas eliminar el producto "{selectedProduct?.name}"?
                    Esta acción no se puede deshacer.
                </DialogBody>
                <DialogFooter>
                    <Button
                        variant="text"
                        color="blue-gray"
                        onClick={() => setIsDeleteOpen(false)}
                        className="mr-1"
                    >
                        Cancelar
                    </Button>
                    <Button variant="filled" color="red" onClick={handleDelete}>
                        Eliminar
                    </Button>
                </DialogFooter>
            </Dialog>

            {/* Alerta de notificación */}
            {showAlert && (
                <div className="fixed bottom-4 right-4 z-50">
                    <Alert
                        color={alertData.type === 'success' ? "green" : "red"}
                        className="max-w-screen-md"
                        icon={
                            alertData.type === 'success' ? (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    className="h-6 w-6"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            ) : (
                                <ExclamationTriangleIcon className="h-6 w-6" />
                            )
                        }
                    >
                        {alertData.message}
                    </Alert>
                </div>
            )}
        </div>
    );
};

export default ProductManagement;