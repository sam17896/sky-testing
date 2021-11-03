import { Box } from 'components';
import * as React from 'react';
import OrderList from './components/orders';
import Title from 'components/Title';
const LiveOrders = ({ orders, loading }) => {
    return (
        <Box flex={2} margin="m" borderRadius={3}>
            <Title {...{ title: 'Live Orders' }} />
            <OrderList {...{ orders, loading }} />
        </Box>
    )
}
export default LiveOrders;