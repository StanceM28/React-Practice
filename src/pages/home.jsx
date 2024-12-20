import { CardProducts } from '../components/card-products'
import { useFetch } from "../hooks/useFetch"
import "./home.css"
export const Home = () => {

    const { data, loading, error } = useFetch("/products")

    if (loading) return <div>Cargando Informacion</div>

    if (error) return <div>Error : {error}</div>
    return (
        <div className='container'>
            <h1 style={{ display: "flex", alignItems: "center", justifyContent: "center", paddingBottom: "20px" }}>Productos</h1>
            <div className='product-container'>
                {data.products.map((item) => (
                    <CardProducts
                        key={item.id}
                        title={item.title}
                        price={item.price}
                        image={item.images[0]}
                        category={item.category}
                        description={item.description}
                    />
                ))}
            </div>
        </div>
    )

}