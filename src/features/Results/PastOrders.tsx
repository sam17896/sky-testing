import { Box } from 'components';
import * as React from 'react';
import OrderList from './components/orders';
import Title from 'components/Title';
import { useNavigation } from '@react-navigation/core';
const PastOrders = ({ orders, loading }) => {
    const { navigate } = useNavigation();
    return (
        <Box flex={2} marginHorizontal="m" borderRadius={10}>
            <Title {...{ title: 'Past Orders' }} />
            <OrderList {...{
                orders, loading, onPress: (item) => {
                    navigate('result', { orderId: item?.orderId, orderLineId: item?.orderLineId });
                }
            }} />
        </Box>
    );
};
export default PastOrders;