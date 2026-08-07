import { StyleSheet } from 'react-native';


/*
   Konfiguration des Layouts
*/


export const mainLayout = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: '#25292e',
  },
  text:{
    fontSize: 30,
    color: '#fff',
    fontWeight: 800,
  },
  button: {
    backgroundColor: "#007AFF",
    color: "#FFFFFF",
    fontSize: 20,
    fontWeight: "bold",
    padding: 40,
    borderRadius: 5,
  },
  headerDesign: {
    backgroundColor: "#007AFF",
    color: "#FFFFFF",
    fontSize: 20,
    fontWeight: "bold",
    padding: 40,
    borderRadius: 5,
  },
  headerTitleDesign: {
    color: "#FFFFFF",
    fontSize: 20,
    fontWeight: "bold",
  },

  tabBarDesign: {
    backgroundColor: "#007AFF",
    color: "#FFFFFF",
    fontSize: 20,
    fontWeight: "bold",
  },
  image: {
    width: 350,
    height: 350,
    borderRadius: 18,
  },
  imageContainer: {
    flex: 1 ,
    alignItems: "center",
    justifyContent: "center",
  },

  footerContainer: {
    flex: 1 / 3,
    alignItems: "center",
    justifyContent: "center",
  },
});
