import * as React from 'react';
import { Box, Icon, Text, useAppTheme } from "components";
import LayoutWithLogo from '@components/LayoutWithLogo';
import { Dimensions, FlatList, Image, TouchableOpacity } from 'react-native';
import LayoutBorder from '@components/LayoutBorder';
import { useNavigation } from '@react-navigation/core';
import MenuItem from '@components/MenuItem';
const { height } = Dimensions.get('screen');
const actions = [
    {
        image: require('@assets/order.png'),
        label: 'Orders',
        route: 'order'
    },
    {
        image: require('@assets/results.png'),
        label: 'Results',
        route: ''
    }, {
        image: require('@assets/info.png'),
        label: 'Pessenger Info',
        route: ''
    },
    {
        image: require('@assets/kit.png'),
        label: 'Purchase Testing Kit',
        route: 'take-test'
    }
]
const Home = () => {
    const theme = useAppTheme();
    const { navigate } = useNavigation();
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
