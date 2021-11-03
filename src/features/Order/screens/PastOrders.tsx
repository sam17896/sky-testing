import { Box } from 'components';
import * as React from 'react';
import OrderList from './components/orders';
import Title from 'components/Title';
const PastOrders = ({ orders, loading }) => {
    return (
        <Box flex={2} marginHorizontal="m" borderRadius={10}>
            <Title {...{ title: 'Past Orders' }} />
            <OrderList {...{ orders, loading }} />
        </Box>
    );
};
export default PastOrders;