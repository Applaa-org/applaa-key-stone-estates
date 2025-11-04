import { useRouterState, Link } from "@tanstack/react-router";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const { location } = useRouterState();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center p-8">
        <h1 className="text-6xl font-bold text-primary mb-4">404</h1>
        <p className="text-xl text-gray-600 mb-8">Oops! The page you're looking for doesn't exist.</p>
        <Button asChild className="bg-amber-400 hover:bg-amber-500 text-primary">
          <Link to="/" className="font-bold">
            Return to Home
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;