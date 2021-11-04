import Endpoints from '@constant/Endpoint';
import useAuth from '@hooks/useAuth';
import useRequest from '@hooks/useRequest';
import * as React from 'react';

const usePassengerInfo = ({ orderId, orderLineId }) => {
    const request = useRequest();
    const { user } = useAuth();
    const [loading, setLoading] = React.useState(false);
    const [passengers, setPassengers] = React.useState([]);

    React.useEffect(() => {
        setLoading(true);
        request(`${Endpoints.GetUserTests}/${orderId}/${orderLineId}`,
            { method: "GET", headers: { "Authorization": "Bearer " + user.token } })
            .then(res => {
                console.log({ res });
                if (res && res.length > 0) {
                    setPassengers(res);
                }
                setLoading(false);
            }).catch(err => {
                console.log({ err });
                setLoading(false);
            });
    }, [request, user.email, user.token, orderId, orderLineId]);

    return [loading, passengers];
}

export default usePassengerInfo;