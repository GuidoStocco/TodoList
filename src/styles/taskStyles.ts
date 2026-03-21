import { Dimensions, StyleSheet } from "react-native";
import { COLORS } from "@/constants/colors";

export const styles = StyleSheet.create({
    containerTask:{
            backgroundColor: '#fff',
            height: Dimensions.get('window').height * 0.09,
            borderRadius: 20,
            flexDirection: 'row',
            flex: 1,
    },
    btnTask:{
        width: 50,
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%'
    },
    icon:{
        paddingLeft: 5
    },
    containerText:{
        flex: 1,
        padding: 10
    },
    textDescription:{
        fontSize: 16,
        fontWeight: 'bold',
        color: COLORS.textHome
    },
    textDate:{
        color: COLORS.subTitle,
        fontWeight: '500',
        paddingLeft: 5
    }
})