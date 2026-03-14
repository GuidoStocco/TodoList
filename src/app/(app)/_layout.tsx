import { Tabs } from "expo-router";


export default function AppTabsLayout(){
    return (
        <Tabs>
            <Tabs.Screen name='home' options={{headerShown: false}}/>
            <Tabs.Screen name='calendar' options={{headerShown: false}}/>
            <Tabs.Screen name='profile' options={{headerShown: false}}/>
        </Tabs>
    )
}