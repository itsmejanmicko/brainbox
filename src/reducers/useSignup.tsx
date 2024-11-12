import { useState } from "react";
import { userServices } from "../services/userServices";
import { toast } from 'sonner';
import { useNavigate } from 'react-router-dom';

interface SignupTypes {
    email: string;
    password: string;
}

interface ResponseTypes {
    success: boolean;
    message: string;
    error?: string;
}

export const useSignup = () => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [confirmPassword, setConfirmPassword] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(false);
    const navigate = useNavigate();

    const userData: SignupTypes = { email, password };

    async function handleSignup(e: React.FormEvent<HTMLFormElement>): Promise<void> {
        e.preventDefault();
        setLoading(true);

        if (confirmPassword.trim() !== password.trim()) {
            toast.error('Passwords do not match');
            setLoading(false);
            return;
        }

        try {
            toast.promise(
                userServices.createAccount(userData),
                {
                    loading: 'Creating account...',
                    success: (res: ResponseTypes) => {
                        console.log(res)
                        setLoading(false);
                        if (res.success) {
                            navigate('/login');
                            return 'Account created successfully!';
                        }else{
                            throw new Error(res.error)
                        }
                    },
                    error: (error:Error) => {
                        setLoading(false);
                        return error.message || 'An unexpected error occurred';
                    },
                }
            );
        } catch (error) {
            setLoading(false);
            console.error(error);
            toast.error('Signup failed. Please try again.');
        }
    }

    return {
        email,
        password,
        confirmPassword,
        setEmail,
        setPassword,
        setConfirmPassword,
        handleSignup,
        loading
    };
};
