//? Este es el siguiente nivel al main, Aquí puede ir mucha lógica
import { AppRouter } from "./router/AppRouter"


export const HeroesApp = () => {
  return (
    <>
    {/* Se renderiza el AppRouter con "TODAS" las rutas */}
    <AppRouter/>
    </>
  )
}
