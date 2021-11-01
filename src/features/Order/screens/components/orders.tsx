import { makeStyles, Text } from 'components';
import { Box } from 'components';
import * as React from 'react';
import { FlatList, StyleSheet } from 'react-native';
const useStyles = makeStyles((theme) =>
    StyleSheet.create({
        shadow: {
            elevation: theme.spacing.xxs,
            shadowOpacity: 1,
            shadowRadius: theme.spacing.xxs,
            shadowColor: theme.colors.shadow,
            shadowOffset: { width: 4, height: 4 },
        },
    }),
);
const OrderList = () => {
    const styles = useStyles();
    return (
        <Box
            flex={4}
            padding="m"
            backgroundColor="backgroundGrey"
            borderBottomRightRadius={10}
            borderBottomLeftRadius={10}
            style={styles.shadow}>
            <FlatList
                data={[1, 2, 3]}
                horizontal
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => {
                    return (
                        <Box flex={1} borderRadius={10} marginHorizontal="m">
                            <Box flex={1} padding="m" backgroundColor="blue" borderTopRightRadius={10} borderTopLeftRadius={10}>
                                <Text variant="smallWhiteRegular">Order:400</Text>
                            </Box>
                            <Box flex={2} padding="m" backgroundColor="white" borderBottomRightRadius={10} borderBottomLeftRadius={10}>
                                <Text>
                                    Day 2 test
                                </Text>
                            </Box>
                        </Box>
                    )
                }}
            />
        </Box>
    )
}

export default OrderList;