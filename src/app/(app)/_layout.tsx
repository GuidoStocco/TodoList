import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import {COLORS} from '@/constants/colors'


export default function AppTabsLayout(){
    return (
        <Tabs screenOptions={{headerShown: false}}>
            <Tabs.Screen name='home/page' options={{
                tabBarLabel:'Home',
                tabBarActiveTintColor:COLORS.textHome,
                tabBarIcon: ({color, size}) => {
                    return <Ionicons name="home" color={color} size={29} />
                }
                
            }}/>
            <Tabs.Screen name='calendar/page' options={{
                tabBarLabel:'Calendário',
                tabBarActiveTintColor: COLORS.textHome,
                tabBarIcon: ({size, color}) => {
                    return <Ionicons name="calendar-outline" size={29} color={color}/>
                }
            }}
            
            />
            <Tabs.Screen name='perfil/page' options={{
                tabBarLabel: 'Perfil',
                tabBarActiveTintColor: COLORS.textHome,
                tabBarIcon: ({size, color}) => {
                    return <Ionicons name="person-outline" color={color} size={29}/>
                }
            }}/>
        </Tabs>
    )
}