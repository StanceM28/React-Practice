import { CardUsers } from '../components/card-users'
import { useFetch } from '../hooks/useFetch'
import './users.css'

export const Users = () => {

        const {data, loading, error } = useFetch("/users")

        if (loading) return <div>Cargando Informacion</div>
    
        if (error) return <div>Error : {error}</div>
    
        return (
            <div className='container'>
                <h1 style={{ display : "flex", alignItems : "center", justifyContent : "center", paddingBottom : "20px"}}>Usuarios</h1>
                <div className='user-container'>
                    {data.users.map((item) => (
                        <CardUsers
                            key={item.id}
                            name={item.firstName}
                            lastname={item.lastName}
                            image={item.image}
                            age={item.age}
                            gender={item.gender}
                            email={item.email}
                            phone={item.phone}

                        />
                    ))}
                </div>
            </div>
        )   
}