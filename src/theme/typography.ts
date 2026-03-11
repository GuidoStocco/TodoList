import {fonts} from './fonts';
import { StyleSheet } from 'react-native';

export const typography = StyleSheet.create({
    title:{
        fontFamily: fonts.bold, 
        fontSize: 44
    },
    text:{
        fontFamily: fonts.regular
    },
    textMedium:{
        fontFamily: fonts.medium
    }
})