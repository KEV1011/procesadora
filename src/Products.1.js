export function Products() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get('/api/products')
            .then(response => {
                setProducts(response.data);
            })
            .catch(error => {
                console.error('There was an error fetching the products!', error);
            });
    }, []);

    const addToCart = (product) => {
        axios.post('/api/cart', product)
            .then(response => {
                alert('Producto añadido al carrito');
            })
            .catch(error => {
                console.error('Hubo un error añadiendo el producto al carrito', error);
            });
    };
    

        return (
            <section id="productos">
                <h2>Nuestros Productos</h2>
                <div className="product-list">
                    {products.map(product => (
                        <div className="product" key={product._id}>
                            <img src={product.image} alt={product.name} />
                            <p>{product.name} - ${product.price}</p>
                            <button onClick={() => addToCart(product)}>Añadir al carrito</button>
                            <Counter />
                        </div>
                    ))}
                </div>
            </section>
        );
    }

    export default Products;

    return (
        <section id="productos">
            <h2>Nuestros Productos</h2>
            <div className="product-list">
                {products.map(product => (
                    <div className="product" key={product._id}>
                        <img src={product.image} alt={product.name} />
                        <p>{product.name} - ${product.price}</p>
                        <button onClick={() => addToCart(product)}>Añadir al carrito</button>
                    </div>
                ))}
            </div>
        </section>
    );
}
