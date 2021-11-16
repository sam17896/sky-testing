import { Box } from 'components';
import LayoutBorder from '@components/LayoutBorder';
import LayoutWithLogo from '@components/LayoutWithLogo';
import * as React from 'react';
import LiveOrders from './LiveOrders';
import useOrder from '@hooks/Order/useOrder';


const Order = () => {
    const [liveOrders, _, loading] = useOrder();
    return (
        <LayoutWithLogo>
            <LayoutBorder>
                <Box flex={1} marginVertical="l">
                    <LiveOrders {...{ orders: liveOrders, loading }} />
                </Box>
            </LayoutBorder>
        </LayoutWithLogo>
    );
};

export default Order;
