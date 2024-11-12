export const userServices = {
    login: async (userData: { email: string; password: string }) => {
        try {
            const response = await fetch('http://localhost:5000/login', {
                method: 'POST',
                credentials:'include',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(userData)
            });

            const data = await response.json();
            return data;
        } catch (error) {
            throw error;
        }
    },

    createAccount: async (userData: { email: string; password: string }) => {
        try {
            const response = await fetch('http://localhost:5000/create', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(userData)
            });
            const data = await response.json();
            return data;
        } catch (error) {
            throw error;
        }
    }
};
