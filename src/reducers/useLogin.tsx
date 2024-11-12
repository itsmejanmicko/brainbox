import { useState } from "react";
import { userServices } from "../services/userServices";
import { toast } from 'sonner';
import { useNavigate } from 'react-router-dom';

interface LoginTypes {
    email: string;
    password: string;
}
interface responseTypes {
    success:boolean,
    message:string,
}
export const useLogin = () => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(false);
    const navigate = useNavigate();

    const userData: LoginTypes = { email, password };

    async function handleLogin(e: React.FormEvent<HTMLFormElement>): Promise<void> {
        e.preventDefault();
        setLoading(true);

        try {
             toast.promise(
                userServices.login(userData),
                {
                    loading: 'Logging in...',
                    success: (res:responseTypes) => {
                        setLoading(false);
                       if(res.success){
                           navigate('/');
                           return 'Login successful!';
                       }else{
                           return toast.error(res.message);
                       }
                    },
                    error: () => {
                        setLoading(false);
                        return 'Login failed. Please check your credentials.';
                    },
                }
            );
        } catch (error) {
            setLoading(false);
            console.error(error);
        }
    }

    return {
        email,
        password,
        setEmail,
        setPassword,
        handleLogin,
        loading
    };
};
