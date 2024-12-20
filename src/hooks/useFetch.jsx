import { useEffect, useState } from "react"
import { http } from "../proxy/http"

export const useFetch = (url) => {

    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        const fechData = async () => {
            try {
                const res = await http.get(url)
                setData(res.data)
                setLoading(false)
            } catch (error) {
                setError(error.message)
                setLoading(false)
            }
        }
        fechData()
    },[])

    return { data, loading, error }
}