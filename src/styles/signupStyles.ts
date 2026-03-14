import { StyleSheet, Dimensions } from "react-native";
import { COLORS } from '@/constants/colors';

export const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: COLORS.background,  
    },
    box1:{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginLeft: 30,
        marginRight: 30,    
    },
    box2:{
        flex: 1,
        marginLeft: 30,
        marginRight: 30,
    },
    box3:{
        flex: 1,
        marginLeft: 30,
        marginRight: 30,
        justifyContent: "space-between", 
    },
     containerIcon:{
        width: 50,
        height: 50,
        backgroundColor: COLORS.title,
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center",
        marginTop:50,
        borderWidth: 0.3,
        borderColor: COLORS.primary,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.30,
        shadowRadius: 4.65,
        elevation: 8,
     },
     containerText:{
        marginTop: 10,
        justifyContent: "center",
        alignItems: "center",
        width: Dimensions.get("window").width * 0.8,
     },
     text1:{
        color: COLORS.primary,
     },
     text2:{
        // paddingLeft: 30,
        fontSize: 15,
        textAlign: "center",
     },
     containerInput:{
        marginTop: 10,
        marginBottom: 5,
        flexDirection: "row",
        alignItems: "center",
        borderWidth: 0.2,
        borderRadius: 10,
        borderColor: COLORS.text,
        padding: 5,
        paddingLeft: 15,
        backgroundColor: COLORS.back2,
        height: 50,
     },
     textInput:{
        fontSize: 20,
        color: COLORS.primary,
        
     },
     input:{
        paddingLeft: 10
     },
     btnForgot:{
        alignSelf: "flex-end",
        paddingTop: 10
     },
      btnForgotText:{
         color: COLORS.text,
       },
       btnBox3:{
         backgroundColor: COLORS.primary,
         height: 50,
         borderRadius: 10,
         justifyContent: "center",
         alignItems: "center",
         flexDirection: "row",
         gap: 8,
         shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.30,
        shadowRadius: 4.65,
        elevation: 8,

        marginTop: Dimensions.get("window").height * 0.08,
       },
       textBtn3:{
         color: COLORS.background,
         fontSize: 22,
         fontWeight: 'bold',
       },
       containerRegister:{
         flexDirection: "row",
         justifyContent: "center",
         alignItems: "center",
         height: Dimensions.get("window").height * 0.10,
       },
       textBox3:{
         color: COLORS.text,
       },
       textBtnRegister:{
         color: COLORS.primary,
         fontWeight: 'bold',
         paddingLeft: 5
       }

})