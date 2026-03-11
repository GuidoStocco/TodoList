import { StyleSheet, Dimensions } from "react-native";
import { COLORS } from '@/constants/colors';
import { typography } from "@/theme/typography";

export const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: COLORS.background,
        
    },
    box1:{
        
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    box2:{
        flex: 1,
        marginLeft: 30,
        marginRight: 30
    },
    box3:{
        backgroundColor: "red",
        flex: 1,
        marginLeft: 30,
        marginRight: 30
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
        width: Dimensions.get("window").width * 0.6,
     },
     text1:{
        color: COLORS.primary,
     },
     text2:{
        paddingLeft: 20,
        fontSize: 15
     },
     containerInput:{
        marginTop: 20,
        marginBottom: 20,
        flexDirection: "row",
        alignItems: "center",
        borderWidth: 0.2,
        borderRadius: 10,
        borderColor: COLORS.text,
        padding: 5,
        paddingLeft: 15,
        backgroundColor: COLORS.back2
     },
     textInput:{
        fontSize: 20,
        color: COLORS.primary,
        
     },
     input:{
        paddingLeft: 10
     }

})