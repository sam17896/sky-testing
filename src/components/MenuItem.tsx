import { useNavigation } from '@react-navigation/core';
import * as React from 'react';
import { Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Box, Icon, makeStyles, Text } from '.';

const useStyles = makeStyles((theme) =>
    StyleSheet.create({
        container: {
            flex: 1,
            borderRadius: 5,
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
const MenuItem = ({ item, onPress }) => {
    const { navigate } = useNavigation();
    const styles = useStyles();
    return (
        <TouchableOpacity
            style={styles.container}
            onPress={() => {
                if (item.route) {
                    onPress ? onPress(item.route) : navigate(item.route);
                }
            }}
        >
            <Box flex={1} flexDirection="row" justifyContent="space-between" paddingHorizontal="m" marginVertical="m">
                <Box flexDirection={'row'} flex={3}>
                    <Image style={{ width: 32, height: 40 }} resizeMode="contain" source={item.image} />
                    <Text paddingHorizontal="s" variant="smallPrimary" style={{ alignSelf: 'center' }}>{item.label}</Text>
                </Box>
                <Box flex={1} alignItems="flex-end" justifyContent="center">
                    <Box style={styles.button} >
                        <Icon name="arrow-right" color={'white'} size={18} />
                    </Box>
                </Box>
            </Box>
        </TouchableOpacity>
    );
};

export default MenuItem;