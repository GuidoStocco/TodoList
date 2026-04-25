import { StyleSheet } from "react-native";
import {COLORS} from '@/constants/colors'

export const styles = StyleSheet.create({
   container:{
    height: '50%',
    backgroundColor: COLORS.title
   },
   closeContainer:{
      justifyContent: 'space-between',
      flexDirection: 'row',
      padding: 10
   },
   text:{
      fontSize: 17,
      fontWeight: 'bold',
      flex: 1
   },
   btnClose:{
      flex:1,
      alignItems: 'flex-end'
   },
   boxContainer:{
      
   },
   containerInput:{
      marginBottom: 10
   },
   textTitle:{
      paddingLeft:15,
      fontSize: 18,
      fontWeight: '500'
   },
   viewContainer:{
       marginTop: 5,
        marginBottom: 5,
        margin: 10,
        borderWidth: 0.2,
        borderRadius: 10,
        borderColor: COLORS.text,
        padding: 5,
        paddingLeft: 15,
        backgroundColor: COLORS.back2,
        height: 50,
   },
   textInput:{
      
   },
   input:{
      fontSize: 16
   }
})