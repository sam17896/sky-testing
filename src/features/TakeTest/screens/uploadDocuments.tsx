import LayoutBorder from '@components/LayoutBorder';
import LayoutWithLogo from '@components/LayoutWithLogo';
import MenuItem from '@components/MenuItem';
import { useNavigation, useRoute } from '@react-navigation/core';
import * as React from 'react';
import { FlatList } from 'react-native';

const actions = [
    {
        image: require('@assets/upload-passport.png'),
        label: 'Upload Passport',
        route: 'upload-passport'
    },
    {
        image: require('@assets/upload-test-result.png'),
        label: 'Upload Test Result',
        route: 'upload-testing-kit'
    }, {
        image: require('@assets/upload-video.png'),
        label: 'Upload Video',
        route: 'upload-video'
    }
];

const UploadDocument = () => {
    const { params: { passenger } } = useRoute();
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
                            <MenuItem {...{
                                item, onPress: (route) => {
                                    navigate(route, { passenger });
                                }
                            }} />
                        );
                    }}
                />
            </LayoutBorder>
        </LayoutWithLogo>
    )
}

export default UploadDocument;