import { Box } from 'components';
import LayoutBorder from '@components/LayoutBorder';
import LayoutWithLogo from '@components/LayoutWithLogo';
import * as React from 'react';
import LiveOrders from './LiveOrders';
import PastOrders from './PastOrders';


const Order = () => {
    return (
        <LayoutWithLogo>
            <LayoutBorder>
                <LiveOrders />
                <PastOrders />
                <Box flex={0.5} />
            </LayoutBorder>
        </LayoutWithLogo>
    )
}

export default Order;