import { Box } from 'components';
import * as React from 'react';
import OrderList from './components/orders';
import Title from 'components/Title';
import { useNavigation } from '@react-navigation/core';
const LiveOrders = ({ orders, loading }) => {
    const { navigate } = useNavigation();
    return (
        <Box flex={2} margin="m" borderRadius={3}>
            <Title {...{ title: 'Live Orders', icon: 'order' }} />
            <OrderList {...{
                orders, loading, onPress: (item) => {
                    navigate('passenger-list', { orderId: item?.orderId, orderLineId: item?.orderLineId });
                }
            }} />
        </Box>
    )
}
export default LiveOrders;