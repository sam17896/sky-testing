import Loader from '@components/Loader';
import { useNavigation } from '@react-navigation/core';
import { makeStyles, Text } from 'components';
import { Box } from 'components';
import * as React from 'react';
import { Dimensions, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
const useStyles = makeStyles((theme) =>
    StyleSheet.create({
        shadow: {
            elevation: theme.spacing.xxs,
            shadowOpacity: 1,
            shadowRadius: theme.spacing.xxs,
            shadowColor: theme.colors.shadow,
            shadowOffset: { width: 4, height: 4 },
        },
        button: {
            borderRadius: 10,
            width: 50,
            height: 30,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: theme.colors.blue,
        },
    }),
);



const { width: viewportWidth } = Dimensions.get('window');
function wp(percentage) {
    const value = (percentage * viewportWidth) / 100;
    return Math.round(value);
}
const slideWidth = wp(80);
const itemHorizontalMargin = wp(2);

export const sliderWidth = viewportWidth;
export const itemWidth = slideWidth + itemHorizontalMargin * 2;

const OrderList = ({ orders, loading, onPress }) => {
    const styles = useStyles();
    const _renderItem = ({ item }) => {
        // {"address": "49 LISNEVENAGH ROAD  BAllYMENA BT42 2LH GB", "customerId": 452, "id": 119, "orderDate": "22 Oct 2021", "orderId": 958, "orderLineId": 1099, "orderStatusTypeId": 1, "orderType": 508, "price": "27.00", "productName": "**New** Arrivals into to the UK (fully vaccinated) Day 2 lateral flow test", "quantity": 1}
        return (
            <Box flex={1} borderRadius={10} marginHorizontal="s" marginVertical="m" width={viewportWidth * 0.8}>
                <Box flex={1} padding="m" backgroundColor="blue" borderTopRightRadius={10} borderTopLeftRadius={10}>
                    <Text variant="smallWhiteRegular">Order: {item?.orderId}</Text>
                </Box>
                <Box flex={4} padding="m" backgroundColor="white" borderBottomRightRadius={10} borderBottomLeftRadius={10}>
                    <Box flex={2}>
                        <Text variant="xsmallPrimary">
                            {item?.productName}
                        </Text>
                    </Box>
                    <Box flex={1} flexDirection="row" alignItems="center" justifyContent="space-between">
                        <Box flex={1} justifyContent="center">
                            <Text variant="xxsmallPrimary">Quantity: {item?.quantity}</Text>
                        </Box>
                        <Box flex={1} alignItems="flex-end" justifyContent="center">
                            <TouchableOpacity style={styles.button} onPress={() => {
                                onPress(item);
                            }}>
                                <Text variant="xxsmallWhiteRegular">View</Text>
                            </TouchableOpacity>
                        </Box>
                    </Box>
                </Box>
            </Box>
        );
    };

    return (
        <Box
            flex={4}
            padding="m"
            backgroundColor="backgroundGrey"
            borderBottomRightRadius={10}
            borderBottomLeftRadius={10}
            style={styles.shadow}>
            {!loading && <FlatList
                data={orders}
                showsVerticalScrollIndicator={false}
                keyExtractor={(item, index) => index.toString()}
                renderItem={_renderItem}
            />}
            {loading && <Loader />}
        </Box>
    );
};

export default OrderList;
