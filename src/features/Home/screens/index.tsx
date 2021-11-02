import * as React from 'react';
import { Box, Icon, Text, useAppTheme } from "components";
import LayoutWithLogo from '@components/LayoutWithLogo';
import { Dimensions, FlatList, Image, TouchableOpacity } from 'react-native';
import LayoutBorder from '@components/LayoutBorder';
import { useNavigation } from '@react-navigation/core';
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
                            <Box flex={1} borderRadius={3}
                                style={{
                                    margin: theme.spacing.l,
                                    backgroundColor: theme.colors.white,
                                    elevation: theme.spacing.xxs,
                                    shadowOpacity: 0.5,
                                    shadowRadius: theme.spacing.xxs,
                                    shadowColor: theme.colors.shadow,
                                    shadowOffset: { width: 2, height: 2 },
                                }}
                            >
                                <Box flex={1} flexDirection="row" justifyContent="space-between" paddingHorizontal="m" marginVertical="m">
                                    <Box flexDirection={'row'} flex={3}>
                                        <Image style={{ width: 32, height: 40 }} resizeMode="contain" source={item.image} />
                                        <Text paddingHorizontal="s" variant="smallPrimary" style={{ alignSelf: 'center' }}>{item.label}</Text>
                                    </Box>
                                    <Box flex={1} alignItems="flex-end" justifyContent="center">
                                        <TouchableOpacity style={{
                                            backgroundColor: theme.colors.blue,
                                            width: 30,
                                            height: 30,
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                            borderRadius: 15
                                        }}
                                            onPress={() => {
                                                if (item.route) {
                                                    navigate(item.route);
                                                }
                                            }}
                                        >
                                            <Icon name="arrow-right" color={'white'} size={18} />
                                        </TouchableOpacity>
                                    </Box>
                                </Box>
                            </Box>
                        );
                    }}
                />
            </LayoutBorder>
        </LayoutWithLogo >
    );
};


export default Home;
