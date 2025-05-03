
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-flashdark to-background py-16">
      <div className="container mx-auto px-4 text-center">
        <div className="glass-card max-w-lg mx-auto rounded-xl p-8">
          <h1 className="text-6xl font-bold text-flashblue mb-4 code-font">404</h1>
          <p className="text-xl text-white mb-6">Página não encontrada</p>
          <p className="text-gray-400 mb-8">
            A página que você está procurando não existe ou foi movida.
          </p>
          <Link to="/" className="btn-primary inline-block">
            Voltar para a Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
