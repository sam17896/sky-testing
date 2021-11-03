import { Box } from 'components';
import LayoutBorder from '@components/LayoutBorder';
import LayoutWithLogo from '@components/LayoutWithLogo';
import * as React from 'react';
import LiveOrders from './LiveOrders';
import PastOrders from './PastOrders';
import useOrder from '@hooks/Order/useOrder';


const Order = () => {
    const [liveOrders, pastOrders, loading] = useOrder();
    return (
        <LayoutWithLogo>
            <LayoutBorder>
                <LiveOrders {...{ orders: liveOrders, loading }} />
                <PastOrders {...{ orders: pastOrders, loading }} />
                <Box flex={0.5} />
            </LayoutBorder>
        </LayoutWithLogo>
    );
};

export default Order;
