import * as React from 'react';
import { Box, Icon, Text, useAppTheme } from "components";
import LayoutWithLogo from '@components/LayoutWithLogo';
import { Dimensions, FlatList, Image, TouchableOpacity } from 'react-native';
const { height } = Dimensions.get('screen');
const actions = [
    {
        image: require('@assets/order.png'),
        label: 'Orders',
        route: ''
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
        route: ''
    }
]
const Home = () => {
    const theme = useAppTheme();
    return (
        <LayoutWithLogo>
            <Box flex={1} backgroundColor="blue">
                <Box
                    height={height - 210}
                    backgroundColor="white"
                    borderBottomLeftRadius={50}
                    borderBottomRightRadius={50}
                    borderBottomEndRadius={50}
                    borderBottomStartRadius={50}
                >
                    <FlatList
                        style={{ flex: 1 }}
                        keyExtractor={(item, index) => index.toString()}
                        data={actions}
                        renderItem={({ item }) => {
                            return (
                                <Box flex={1} borderRadius={3}
                                    style={{
                                        elevation: theme.spacing.xxs,
                                        shadowOpacity: 0.5,
                                        margin: theme.spacing.l,
                                        backgroundColor: theme.colors.white,
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
                                            }}>
                                                <Icon name="arrow-right" color={'white'} size={18} />
                                            </TouchableOpacity>
                                        </Box>
                                    </Box>
                                </Box>
                            );
                        }}
                    />
                </Box>
            </Box>
        </LayoutWithLogo >
    );
};


export default Home;
