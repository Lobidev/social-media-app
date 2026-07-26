import { Stack } from "expo-router";
import { mainLayout } from "../styles/mainLayout";

export default function RootLayout() {
 
  // Routes Konfiguration


  return( 
  <Stack>
    <Stack.Screen name="(tabs)"
     options={
      { 

        headerShown: false,
        //headerStyle: mainLayout.headerDesign,
        headerLeft: () => <></>
      }
        }/>

  <Stack.Screen name="not-found"
    options={
      { 
        title: "Oops!" ,
        headerShown: false
      }
        }/> 

  </Stack>
  );
}
