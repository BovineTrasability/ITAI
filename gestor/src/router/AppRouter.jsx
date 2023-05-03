import { Route, Routes } from "react-router-dom"
import { Inicio, Vacunacion, Peso } from "../pages"

export const AppRouter = () => {
    return (
        <Routes>
            <Route path="/*" element={ <Inicio /> } />
            <Route path="/vacunacion" element={ <Vacunacion /> } />
            <Route path="/peso" element={ <Peso /> } />
        </Routes>
    )
}

