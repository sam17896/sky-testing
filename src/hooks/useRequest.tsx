import * as React from "react";
import Config from "react-native-config";
import Snackbar from "react-native-snackbar";
interface _SourceUriExtended {
    uri?: string;
    [key: string]: any;
}
type BodyInit_Extend = BodyInit_ & _SourceUriExtended;
interface RequestInitExtended extends RequestInit {
    body: BodyInit_Extend;
}

const CONFIG = {
    server: `${Config.API_URL}`,
};

const DEFAULTS = {
    endpoint: "",
    headers: {
        "Content-Type": "application/json",
    },
};

const useRequest = () => {
    return React.useCallback(
        async (
            endpoint = "",
            params: RequestInit | undefined,
            noStringyfy = false,
        ) => {
            const options = Object.assign({}, DEFAULTS, params);
            console.log({ options, url: `${CONFIG.server}${endpoint}` })
            return (
                fetch(`${CONFIG.server}${endpoint}`, {
                    ...options,
                    headers: {
                        ...DEFAULTS.headers,
                        ...options.headers,
                    },
                    body: noStringyfy ? options.body : JSON.stringify(options.body),
                })
                    .then(async (res) => {
                        // res.text().then((res) => console.log(res));
                        // Handle success
                        if (res.status >= 200 && res.status < 400) {
                            const contentType = res.headers.get("content-type");
                            if (contentType && contentType.includes("application/json")) {
                                // Returning JSON if this is application/json mimetype
                                return res.json();
                            }

                            // Return text if we are not dealing with a JSON response object
                            return res.text();
                        }

                        // We are dealing with a failure at this point.
                        // Let's try to understand if there is a server-side error code
                        const contentType = res.headers.get("content-type");
                        if (contentType && contentType.includes("application/json")) {
                            return res
                                .json()
                                .then((error = { message: "", errors: { message: "" } }) => {
                                    console.log("useReq Error: ", error);
                                    // We expect the server to give us the code of the error
                                    if (error?.errors?.message) {
                                        Snackbar.show({
                                            text: error.errors.message,
                                            duration: Snackbar.LENGTH_LONG,
                                        });
                                    } else {
                                        Snackbar.show({
                                            text: error.message,
                                            duration: Snackbar.LENGTH_LONG,
                                        });
                                    }
                                })
                                .catch((e) => {
                                    Snackbar.show({
                                        text: "Some Error Occurred",
                                        duration: Snackbar.LENGTH_LONG,
                                    });
                                    console.log("useReq error code:", res.status, "error: ", e);
                                });
                        }

                        // The server has not returned a JSON object. Let's evaluate the text.
                        try {
                            return res.text().then((error) => {
                                console.log("useReq: ", error);
                            });
                        } catch (e) {
                            // If nothing worked, we'll return the status code (e.g. 403)
                            console.log("useReq error code:", res.status, "error: ", e);
                        }
                    })
                    // This happens when we are offline
                    .catch((e) => {
                        console.log({ e });
                        console.log("useReq Offline: ", JSON.stringify(e));
                    })
            );
        },
        [],
    );
};

export default useRequest;
