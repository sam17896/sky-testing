import { Text } from 'components';
import { Box } from 'components';
import { makeStyles } from '@components/makeStyles';
import * as React from 'react';
import { StyleSheet } from 'react-native';
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
const Title = ({ title }) => {
    const styles = useStyles();
    return (
        <Box
            style={styles.shadow}
            backgroundColor="lightPurple"
            padding="m"
            borderRadius={10}
            justifyContent="center">
            <Text variant="largeWhiteBold">{title}</Text>
        </Box>
    )
}

export default Title;