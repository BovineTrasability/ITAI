import { AuthProvider } from "./context/AuthProvider";
import { Inicio } from "./pages";
import { AppRouter } from "./router/AppRouter";

export const Gestor = () => {
  return (
    <AuthProvider>
     <AppRouter/>
    </AuthProvider>
  )
}

