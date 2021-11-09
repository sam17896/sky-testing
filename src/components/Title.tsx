import { Icon, Text, useAppTheme } from 'components';
import { Box } from 'components';
import { makeStyles } from '@components/makeStyles';
import * as React from 'react';
import { Image, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/core';
const useStyles = makeStyles((theme) =>
    StyleSheet.create({
        shadow: {
            elevation: theme.spacing.xxs,
            shadowOpacity: 1,
            zIndex: 2,
            shadowRadius: theme.spacing.xxs,
            shadowColor: theme.colors.shadow,
            shadowOffset: { width: 4, height: 4 },
        },
    }),
);
const Title = ({ title, icon }) => {
    const styles = useStyles();
    const theme = useAppTheme();
    const { goBack } = useNavigation();
    const [iconUri, setIconUri] = React.useState();
    React.useEffect(() => {
        switch (icon) {
            case 'result':
                setIconUri(require('@assets/result-icon.png'));
                break;
            case 'order':
                setIconUri(require('@assets/order-icon.png'));
                break;
            case 'passenger':
                setIconUri(require('@assets/icon-passenger-info.png'));
                break;
            default:
                setIconUri(null);
                break;
        }
    }, [icon]);

    return (
        <Box
            style={styles.shadow}
            backgroundColor="lightPurple"
            padding="m"
            borderRadius={10}
            justifyContent="center">
            <Box flexDirection={'row'} alignItems="center">
                <Icon name="arrow-left" color={'white'} size={20} onPress={() => {
                    goBack();
                }} style={{ marginHorizontal: theme.spacing.xs }} />
                {iconUri && <Image source={iconUri} resizeMode="contain" style={{ width: 20, height: 20, marginHorizontal: theme.spacing.xs }} />}
                <Text variant="largeWhiteBold">{title}</Text>
            </Box>
        </Box>
    )
}

export default Title;