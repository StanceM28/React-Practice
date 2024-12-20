import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Home } from "./pages/home"
import { Users } from "./pages/users"
import { routes } from "./routes"

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path={routes.home} element={<Home/>}/>
                    <Route path={routes.users} element={<Users/>}/>
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App
