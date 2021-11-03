import LayoutBorder from '@components/LayoutBorder';
import LayoutWithLogo from '@components/LayoutWithLogo';
import MenuItem from '@components/MenuItem';
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
        route: ''
    }, {
        image: require('@assets/upload-video.png'),
        label: 'Upload Video',
        route: ''
    }
];

const UploadDocument = () => {
    return (
        <LayoutWithLogo>
            <LayoutBorder>
                <FlatList
                    style={{ flex: 1 }}
                    keyExtractor={(item, index) => index.toString()}
                    data={actions}
                    renderItem={({ item }) => {
                        return (
                            <MenuItem {...{ item }} />
                        );
                    }}
                />
            </LayoutBorder>
        </LayoutWithLogo>
    )
}

export default UploadDocument;