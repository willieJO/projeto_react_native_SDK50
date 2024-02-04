import { MaterialIcons } from "@expo/vector-icons";
import { Tabs } from "expo-router";


export default function TabsRouter() {
    return (
        <Tabs  screenOptions={{headerShown:false, tabBarActiveBackgroundColor:"#DFDCF8", tabBarActiveTintColor:"#6B41C0"}}>
            <Tabs.Screen
                name="home"
                options={{
                    title: "Inicio",
                    tabBarIcon: () => <MaterialIcons name="home" />
                }}
            />
            <Tabs.Screen
                name="profile"
                options={{
                    title: "Perfil",
                    tabBarIcon: () => <MaterialIcons name="person" />
                }}
            />
        </Tabs>
    )
}
