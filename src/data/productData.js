const mockProducts = [
    { id: "1", name: "Notebook Lenovo Ideapad 3", brand: "Lenovo", category: "notebook", price: 850000, stock: 5 },
    { id: "2", name: "Notebook HP Pavilion 15", brand: "HP", category: "notebook", price: 920000, stock: 3 },
    { id: "3", name: "Monitor Samsung 24 FHD", brand: "Samsung", category: "monitor", price: 220000, stock: 12 },
    { id: "4", name: "Monitor LG UltraGear 27", brand: "LG", category: "monitor", price: 360000, stock: 7 },
    { id: "5", name: "Teclado Logitech K120", brand: "Logitech", category: "teclado", price: 18000, stock: 40 },
    { id: "6", name: "Teclado Redragon Kumara", brand: "Redragon", category: "teclado", price: 55000, stock: 15 },
    { id: "7", name: "Mouse Logitech M90", brand: "Logitech", category: "mouse", price: 9000, stock: 60 },
    { id: "8", name: "Mouse Razer DeathAdder", brand: "Razer", category: "mouse", price: 75000, stock: 10 },
    { id: "9", name: "Placa de Video GTX 1660 Super", brand: "Nvidia", category: "gpu", price: 480000, stock: 4 },
    { id: "10", name: "Placa de Video RTX 4060", brand: "Nvidia", category: "gpu", price: 950000, stock: 2 },
    { id: "11", name: "Memoria RAM Kingston 16GB DDR4", brand: "Kingston", category: "ram", price: 65000, stock: 25 },
    { id: "12", name: "SSD Samsung 970 EVO 1TB", brand: "Samsung", category: "almacenamiento", price: 140000, stock: 18 }
];
export function findAllProducts() {
    return mockProducts;
}
export function findProductById(id) {
    return mockProducts.find(product => product.id === id);
}
export function insertProduct(product) {
    const newProduct ={ id: mockProducts.length + 1, ...product} 
    mockProducts.push(newProduct);
    return newProduct;
}
export function replaceProduct(id, product) {
    const index = mockProducts.findIndex(p => p.id === id);
    if (index === -1) return null;
    mockProducts[index] = { id, ...product };
    return mockProducts[index];
}

export function deleteProduct(id) {
    const index = mockProducts.findIndex(p => p.id === id);
    if (index === -1) return null;

    const deleted= mockProducts.splice(index, 1);
    return deleted;
}

export function findAllByCategory(category) {
    return mockProducts.filter(p => p.category.toLowerCase() === category.toLowerCase());
}
