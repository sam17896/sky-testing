import { Box } from '@components/';
import LayoutBorder from '@components/LayoutBorder';
import LayoutWithLogo from '@components/LayoutWithLogo';
import Loader from '@components/Loader';
import Title from '@components/Title';
import usePassengerInfo from '@hooks/TakeTest/usePassengerInfo';
import { useRoute } from '@react-navigation/core';
import * as React from 'react';
import { FlatList } from 'react-native';
import PassengerItem from './components/passengerItem';

const PassengerList = () => {
    const { params } = useRoute();
    const [loading, passengers] = usePassengerInfo({ orderId: params?.orderId, orderLineId: params?.orderLineId });
    return (
        <LayoutWithLogo>
            <LayoutBorder>
                <Box flex={1} borderRadius={10} margin="m">
                    <Title {...{ title: `Order: ${params?.orderId}`, icon: 'order' }} />
                    {loading && <Loader />}
                    {!loading && <FlatList
                        style={{ flex: 1 }}
                        keyExtractor={(item, index) => index.toString()}
                        data={passengers}
                        renderItem={({ item }) => {
                            return (
                                <PassengerItem {...{ item }} />
                            );
                        }}
                    />}
                </Box>
            </LayoutBorder>
        </LayoutWithLogo>
    );
};

export default PassengerList;
