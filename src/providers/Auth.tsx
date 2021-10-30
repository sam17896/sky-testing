import * as React from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

type User = {
    _id: string;
    avatarUrl: string;
    firstName: string;
    lastName: string;
    contactEmail: string;
    contactPhone: string;
    country: string;
};

type SomeUserLoginDetails = { token: string; user: User; loginId: string };
const DefaultUserLoginDetails: SomeUserLoginDetails = {
    token: "",
    user: {
        _id: "",
        avatarUrl: "",
        firstName: "",
        lastName: "",
        contactEmail: "",
        contactPhone: "",
        country: "",
    },
    loginId: "",
};
export interface AuthContextType {
    isLoggedIn: boolean;
    user: SomeUserLoginDetails;
    setUserLoggedOut: () => void;
    setLoggedUser: (data: SomeUserLoginDetails) => void;
}

// Set defaults for reuse
const DEFAULTS = {
    isLoggedIn: false,
    user: DefaultUserLoginDetails,
    setUserLoggedOut: () => { },
    setLoggedUser: (data: SomeUserLoginDetails) => { },
};
const AuthContext = React.createContext<AuthContextType>(DEFAULTS);

const AuthProvider: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
    children,
}) => {
    const [user, setUser] = React.useState(DEFAULTS.user);
    const [logged, setLogged] = React.useState(DEFAULTS.isLoggedIn);

    React.useEffect(() => {
        const checkUserLogin = async () => {
            try {
                let userData = await AsyncStorage.getItem("@smart_user");
                if (userData !== null) {
                    userData = JSON.parse(userData);
                    // @ts-ignore
                    setLoggedUser(userData);
                    setLogged(true);
                } else {
                    setLogged(false);
                }
            } catch (e) {
                console.log("Auth Error: ", e);
                setLogged(false);
            }
        };
        checkUserLogin();
    }, []);

    const setLoggedUser: AuthContextType["setLoggedUser"] = (
        data: SomeUserLoginDetails,
    ) => {
        setUser((prevData: object) => ({ ...prevData, ...data }));
        AsyncStorage.setItem("@smart_user", JSON.stringify(data));
        setLogged(true);
    };

    const setUserLoggedOut: AuthContextType["setUserLoggedOut"] = () => {
        setUser(DEFAULTS.user);
        setLogged(DEFAULTS.isLoggedIn);
        AsyncStorage.removeItem("@smart_user");
    };

    const contextValues = {
        user,
        isLoggedIn: logged,
        setLoggedUser,
        setUserLoggedOut,
    };

    return (
        <AuthContext.Provider value={contextValues}>
            {children}
        </AuthContext.Provider>
    );
};

export { AuthContext };
export default AuthProvider;
