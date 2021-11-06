import { Box } from 'components';
import LayoutBorder from '@components/LayoutBorder';
import LayoutWithLogo from '@components/LayoutWithLogo';
import * as React from 'react';
import useOrder from '@hooks/Order/useOrder';
import PastOrders from './PastOrders';


const PastOrderList = () => {
    const [_, pastOrders, loading] = useOrder();
    return (
        <LayoutWithLogo>
            <LayoutBorder>
                <Box flex={1} marginVertical="l">
                    <PastOrders {...{ orders: pastOrders, loading }} />
                    <Box flex={0.5} />
                </Box>
            </LayoutBorder>
        </LayoutWithLogo>
    );
};

export default PastOrderList;
