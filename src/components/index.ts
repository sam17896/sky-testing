import {createBox, createText} from '@shopify/restyle';
import {Theme} from '@constant/Base';
import {makeStyles, useAppTheme} from './makeStyles';
import Icon from 'react-native-vector-icons/FontAwesome5';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
export {default as BottomTabs} from './BottomTabs';
export const Box = createBox<Theme>();
export const Text = createText<Theme>();

export {Icon, MaterialIcon, makeStyles, useAppTheme};
