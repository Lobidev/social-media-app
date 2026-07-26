import { Tabs } from "expo-router";
import { mainLayout } from "../../styles/mainLayout";
import { Ionicons } from "@expo/vector-icons";
export default function TabsLayout() { 
  // Routes Konfiguration
  return( 
  <Tabs screenOptions={{
    tabBarStyle: mainLayout.tabBarDesign,
    tabBarActiveTintColor: '#90EE90',
    tabBarInactiveTintColor: '#000000',
    
  }}
  >
    <Tabs.Screen name="index"
     options={
      { 
        title: "Home",
        headerStyle: mainLayout.headerDesign,
        tabBarIcon: ({focused, color}) => (
          <Ionicons name={focused ? "home" : "home-outline"}
           size={30} color={color} />
        ),
      }
        }/>
    
    <Tabs.Screen 
    name="about" 
    options={
      { 
        title: "About",
        headerShown: false,
        tabBarIcon: ({focused, color}) => (
             <Ionicons name={focused ? "person-circle" : "person-circle-outline"}
              size={30} color={color} />
        ),
      }
        }/>

  </Tabs>
  );
}
