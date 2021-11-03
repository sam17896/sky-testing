import Endpoints from "@constant/Endpoint";
import useAuth from "@hooks/useAuth";
import useRequest from "@hooks/useRequest";
import React, { useState } from "react";
import Snackbar from "react-native-snackbar";
import AsyncStorage from "@react-native-async-storage/async-storage";
const useSignIn = (): [
    email: string,
    setEmail: React.Dispatch<React.SetStateAction<string>>,
    password: string,
    setPassword: React.Dispatch<React.SetStateAction<string>>,
    Login: () => Promise<void>,
    loading: boolean,
] => {
    const request = useRequest();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const { setLoggedUser } = useAuth();

    React.useEffect(() => {
        AsyncStorage.getItem('@credentials', (err, res) => {
            if (err) {
                console.log({ err });
            }

            if (res) {
                const credentials = JSON.parse(res);
                setEmail(credentials?.email);
                setPassword(credentials?.password);
            }
        });
        return () => {
            setEmail("");
            setPassword("");
            setLoading(false);
        };
    }, []);

    const Login = async () => {
        setLoading(true);
        if (email && email === "") {
            Snackbar.show({
                text: "Email is required",
                duration: Snackbar.LENGTH_LONG,
            });
            setLoading(false);
            return;
        }

        if (password && password === "") {
            Snackbar.show({
                text: "Password is required",
                duration: Snackbar.LENGTH_LONG,
            });
            setLoading(false);
            return;
        }

        try {
            const res = await request(Endpoints.Login, {
                method: "POST",
                body: { email, password },
            });

            console.log({ res });
            if (res) {
                const obj = {
                    token: res.token,
                    "userId": res.userId,
                    email,
                    "isFaulted": res.isFaulted,
                    "isEnabled": res.isEnabled,
                    "sessionExpiration": res.sessionExpiration,
                };
                AsyncStorage.setItem('@credentials', JSON.stringify({ email, password }));
                setLoading(false);
                setLoggedUser(obj);
            }
        } catch (err) {
            setLoading(false);
            Snackbar.show({
                text: JSON.stringify(err),
                duration: Snackbar.LENGTH_LONG,
            });
            console.log({ err });
        }
    };
    return [email, setEmail, password, setPassword, Login, loading];
};

export default useSignIn;
