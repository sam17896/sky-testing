import { Box, Icon, Text, useAppTheme } from 'components';
import LayoutBorder from '@components/LayoutBorder';
import LayoutWithLogo from '@components/LayoutWithLogo';
import Title from '@components/Title';
import * as React from 'react';
import { useRoute } from '@react-navigation/core';
import usePassengerInfo from '@hooks/TakeTest/usePassengerInfo';
import Loader from '@components/Loader';
import { FlatList } from 'react-native';


const Results = () => {
    const theme = useAppTheme();
    const { params } = useRoute();
    const [loading, passengers] = usePassengerInfo({ orderId: params?.orderId, orderLineId: params?.orderLineId });
    return (
        <LayoutWithLogo>
            <LayoutBorder>
                <Box flex={1} borderRadius={10} margin="m">
                    <Title {...{ title: 'Results', icon: 'result' }} />
                    <Box
                        flex={1}
                        backgroundColor={'backgroundGrey'}
                        borderBottomRightRadius={10}
                        borderBottomLeftRadius={10}
                        padding="s"
                    >
                        {loading && <Loader />}
                        <Box height={40} flexDirection={'row'} justifyContent="space-around">
                            <Text variant="smallBlackRegular">First Name</Text>
                            <Text variant="smallBlackRegular">Surname</Text>
                            <Text variant="smallBlackRegular">Passport</Text>
                            <Text variant="smallBlackRegular">Ceritficate</Text>
                        </Box>

                        <FlatList
                            data={passengers}
                            contentContainerStyle={{ flexGrow: 1 }}
                            style={{ flex: 1 }}
                            keyExtractor={(item, index) => index.toString()}
                            renderItem={({ item }) => {
                                return (
                                    <Box
                                        paddingVertical="m"
                                        backgroundColor="white"
                                        justifyContent="space-around"
                                        flex={1}
                                        style={{
                                            elevation: theme.spacing.xxs,
                                            shadowOpacity: 1,
                                            zIndex: 2,
                                            shadowRadius: theme.spacing.xxs,
                                            shadowColor: theme.colors.shadow,
                                            shadowOffset: { width: 4, height: 4 },
                                        }}
                                        flexDirection={'row'}>
                                        <Text variant="smallPrimary">{item.firstName}</Text>
                                        <Text variant="smallPrimary">{item.lastName}</Text>
                                        <Text variant="smallPrimary">{item.passportNumber}</Text>
                                        <Text variant="smallPrimary">
                                            <Icon name="download" size={18} color={theme.colors.blue} />
                                        </Text>
                                    </Box>
                                );
                            }}
                        />

                    </Box>
                </Box>
            </LayoutBorder>
        </LayoutWithLogo>
    );
};

export default Results;
