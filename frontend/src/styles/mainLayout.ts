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

  buttonContainer: {
    width: 320,
    height: 68,
    marginHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 3,
  },

   button: {
    borderRadius: 10,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  buttonIcon: {
    paddingRight: 8,
  },
  buttonLabel: {
    color: '#fff',
    fontSize: 16,
  },
  optionsContainer: {
     position: "absolute",
     bottom: 80,
  },
  optionsRow: {
    alignItems: "center",
    flexDirection: "row"
  },
  footerContainer: {
    flex: 1 / 3,
    alignItems: "center",
    justifyContent: "center",
  },
});
