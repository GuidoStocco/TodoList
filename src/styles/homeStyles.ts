import { Dimensions, StyleSheet } from "react-native";
import {COLORS} from "@/constants/colors"


export const styles = StyleSheet.create({
    containerHome:{
        flex: 1,
        backgroundColor: COLORS.background,
        
        // justifyContent: 'center',
        // alignItems: 'center'
    },
    box1:{
        flex:1,
        padding: 30,
    },
    box2:{
        flex:6,
        padding: 30,
        // backgroundColor:'blue'
    },
    box3:{
        flex:4,
        padding: 30,
        // backgroundColor:'green'
    },
    textBox1:{
        marginBottom: 10,
        fontWeight: '500'
    },
    containerInput:{
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderRadius: 15,
        paddingLeft: 10,
        borderColor: '#ccc',
        backgroundColor: "#FAF8F5",
        elevation: 6,
    },
    iconInput:{
        color: "#888"
    },
    input:{
        paddingLeft:8,
        flex: 1,
        color: '#121212'
    },
    containerBox2:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: -15,
        marginBottom: 20
    },
    textBox2:{
        color: COLORS.primary,
        fontWeight: 'bold',
        fontSize: 15
    },
    containerText:{
        backgroundColor: COLORS.back2,
        padding: 6,
        paddingLeft:10,
        paddingRight: 10,
        borderRadius: 20
    },
    textContainer:{
        fontWeight: '700',
        color: COLORS.text
    }, 
    containerBox3:{
        marginBottom: 20,
        marginTop: -15,
    },
    textBox3:{
        color: COLORS.primary,
        fontWeight: 'bold',
        fontSize: 15
    }
})