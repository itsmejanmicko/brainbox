import { Navigate } from 'react-router-dom';
import { useAuth } from './AuthContext';

type ProtectedRouteProps = {
    children: JSX.Element;
};

export const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
    const { authenticated, loading } = useAuth();


    if (loading) {
        return null;
    }

    if (!authenticated) {
        return <Navigate to="/login" replace />;
    }

    return children;
};
