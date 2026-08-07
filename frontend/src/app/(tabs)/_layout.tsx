import { Tabs } from "expo-router";
import { mainLayout } from "../../styles/mainLayout";
import { Ionicons } from "@expo/vector-icons";
export default function TabsLayout() { 
  
  /* ==  Routes Konfiguration ==
  
  Es ist möglich, die Routen-Konfiguration auch 
  in Unterordner wie (tabs) zu verschieben.
  In diesem Fall muss die Datei _layout.tsx heißen, 
  damit die Routen-Konfiguration korrekt erkannt wird.
  
  */
  return( 
  <Tabs screenOptions={{
    tabBarStyle: mainLayout.tabBarDesign,
    tabBarActiveTintColor: '#90EE90', // Farbe, wenn der Tab ausgewählt wird
    tabBarInactiveTintColor: '#000000', // Generelle Farbe
    
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
    name="direct-message" 
    options={
      { 
        title:"Direct Message",
        headerShown: false,
        tabBarIcon: ({focused, color}) => (
             <Ionicons name={focused ? "chatbubble-ellipses" : "chatbubble-ellipses-outline"}
              size={30} color={color} />
        ),
      }
        }/>

<Tabs.Screen 
    name="upload-post" 
    options={
      { 
        title:"Upload-Post",
        headerShown: false,
        tabBarIcon: ({focused, color}) => (
             <Ionicons name={focused ? "add-circle" : "add-circle-outline"}
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
