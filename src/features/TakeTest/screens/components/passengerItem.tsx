import * as React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import { Box, Icon, makeStyles, Text } from 'components';

const useStyles = makeStyles((theme) =>
    StyleSheet.create({
        container: {
            margin: theme.spacing.l,
            backgroundColor: theme.colors.white,
            elevation: theme.spacing.xxs,
            shadowOpacity: 0.5,
            shadowRadius: theme.spacing.xxs,
            shadowColor: theme.colors.shadow,
            shadowOffset: { width: 2, height: 2 },
        },
        button: {
            backgroundColor: theme.colors.blue,
            width: 30,
            height: 30,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 15
        },
    }),
);
const PassengerItem = ({ item }) => {
    const { navigate } = useNavigation();
    const styles = useStyles();
    return (
        <Box flex={1} borderRadius={3}
            style={styles.container}
        >
            <Box flex={1} flexDirection="row" justifyContent="space-between" paddingHorizontal="m" marginVertical="m">
                <Box flexDirection={'row'} flex={3}>
                    <Text paddingHorizontal="s" variant="smallPrimary" style={{ alignSelf: 'center' }}>{item?.passengerEmail}</Text>
                </Box>
                <Box flex={1} alignItems="flex-end" justifyContent="center">
                    <TouchableOpacity style={styles.button}
                        onPress={() => {
                            navigate('passenger-info', { item });
                        }}
                    >
                        <Icon name="arrow-right" color={'white'} size={18} />
                    </TouchableOpacity>
                </Box>
            </Box>
        </Box>
    )
}

export default PassengerItem;