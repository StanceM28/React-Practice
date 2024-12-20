import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Home } from "./pages/home"
import { Users } from "./pages/users"

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/Usuarios" element={<Users/>}/>
                    <Route path="/" element={<Home/>}></Route>
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App
