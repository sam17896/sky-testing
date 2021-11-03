import Endpoints from "@constant/Endpoint";
import useAuth from "@hooks/useAuth";
import useRequest from "@hooks/useRequest";
import { useEffect, useState } from "react";

const useOrder = () => {
    const request = useRequest();
    const { user } = useAuth();
    const [loading, setLoading] = useState(false);
    const [liveOrders, setLiveOrders] = useState([]);
    const [pastOrders, setPastOrders] = useState([]);

    useEffect(() => {
        setLoading(true);
        request(`${Endpoints.GetOrderByEmail}/${user.email}`, { method: "GET", headers: { "Authorization": "Bearer " + user.token } }).then(res => {
            console.log({ res });
            if (res && res.length && res.length > 0) {
                setLiveOrders(res.filter(x => x.orderStatusTypeId === 1 || x.orderStatusTypeId === 2));
                setPastOrders(res.filter(x => x.orderStatusTypeId === 3 || x.orderStatusTypeId === 4));
            }
            setLoading(false);
        }).catch(err => {
            console.log({ err });
            setLoading(false);
        });
    }, [request, user.email, user.token]);

    return [liveOrders, pastOrders, loading];
};

export default useOrder;