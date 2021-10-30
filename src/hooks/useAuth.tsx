import * as React from "react";
import { AuthContext } from "@providers/Auth";

const useAuth = () => {
    return React.useContext(AuthContext);
};

export default useAuth;
