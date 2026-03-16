import { Tabs } from "expo-router";


export default function AppTabsLayout(){
    return (
        <Tabs>
            <Tabs.Screen name='home/page' options={{headerShown: false}}/>
            <Tabs.Screen name='calendar/page' options={{headerShown: false}}/>
            <Tabs.Screen name='perfil/page' options={{headerShown: false}}/>
        </Tabs>
    )
}