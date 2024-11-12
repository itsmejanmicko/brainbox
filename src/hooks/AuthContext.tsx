import { createContext, useContext, useEffect, useState, ReactNode } from 'react';

type AuthContextType = {
    authenticated: boolean;
    setAuthenticated: (value: boolean) => void;
    loading: boolean;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [authenticated, setAuthenticated] = useState(false);
    const [loading, setLoading] = useState(true); // Add loading state

    useEffect(() => {
        const validateUser = async () => {
            try {
                const response = await fetch('http://localhost:5000/validate', {
                    method: 'GET',
                    credentials: 'include',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });

                const data = await response.json();
                if (data.success) {
                    setAuthenticated(true);
                } else {
                    setAuthenticated(false);
                }
            } catch (error) {
                console.error('Validation failed:', error);
                setAuthenticated(false);
            } finally {
                setLoading(false); // Ensure loading is set to false once validation is done
            }
        };

        validateUser();
    }, []);

    return (
        <AuthContext.Provider value={{ authenticated, setAuthenticated, loading }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};
