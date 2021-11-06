import * as React from 'react';
import LayoutWithLogo from '@components/LayoutWithLogo';
import { FlatList } from 'react-native';
import LayoutBorder from '@components/LayoutBorder';
import MenuItem from '@components/MenuItem';
const actions = [
    {
        image: require('@assets/order.png'),
        label: 'Orders',
        route: 'order'
    },
    {
        image: require('@assets/results.png'),
        label: 'Results',
        route: 'past-orders'
    },
];
const Home = () => {
    return (
        <LayoutWithLogo>
            <LayoutBorder>
                <FlatList
                    style={{ flex: 1 }}
                    keyExtractor={(item, index) => index.toString()}
                    data={actions}
                    renderItem={({ item }) => {
                        return (
                            <MenuItem {...{ item }} />
                        );
                    }}
                />
            </LayoutBorder>
        </LayoutWithLogo >
    );
};


export default Home;
