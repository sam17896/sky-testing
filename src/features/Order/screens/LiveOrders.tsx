import { Box } from 'components';
import * as React from 'react';
import OrderList from './components/orders';
import Title from './components/title';
const LiveOrders = () => {
    return (
        <Box flex={2} margin="m" borderRadius={3}>
            <Title />
            <OrderList />
        </Box>
    )
}
export default LiveOrders;