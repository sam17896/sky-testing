import { Box } from 'components';
import * as React from 'react';
import OrderList from './components/orders';
import Title from './components/title';
const PastOrders = () => {
    return (
        <Box flex={2} marginHorizontal="m" borderRadius={10}>
            <Title />
            <OrderList />
        </Box>
    )
}
export default PastOrders;