import Endpoints from '@constant/Endpoint';
import useAuth from '@hooks/useAuth';
import useRequest from '@hooks/useRequest';
import * as React from 'react';

const useGetPassengerInfo = ({ passengerId }) => {
    const request = useRequest();
    const { user } = useAuth();
    const [loading, setLoading] = React.useState(false);
    const [passenger, setPassenger] = React.useState();

    React.useEffect(() => {
        setLoading(true);
        console.log({ passengerId });
        request(`${Endpoints.GetPassengerInfo.trim()}/${passengerId.trim()}`.trim(),
            { method: "GET", headers: { "Authorization": "Bearer " + user?.token } })
            .then(res => {
                console.log({ res });
                setPassenger(res);
                setLoading(false);
            }).catch(err => {
                console.log({ err });
                setLoading(false);
            });
    }, [request, user.email, user.token, passengerId]);

    return [loading, passenger];
}

export default useGetPassengerInfo;