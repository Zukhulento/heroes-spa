//? Este es el siguiente nivel al main, Aquí puede ir mucha lógica
import { AuthProvider } from "./auth";
import { AppRouter } from "./router/AppRouter";

export const HeroesApp = () => {
  return (
    <AuthProvider>
      {/* Se renderiza el AppRouter con "TODAS" las rutas */}
      <AppRouter />
    </AuthProvider>
  );
};
