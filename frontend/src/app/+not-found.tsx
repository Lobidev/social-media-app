import { Text, View, StyleSheet } from "react-native";
import { Link } from "expo-router";
import { mainLayout } from "../styles/mainLayout";
export default function Index() {
  return (
    <View style={mainLayout.container}>
      <Text style={mainLayout.text}>Brudaaah da ist ein Fehler</Text>
      <Link href="/" style={mainLayout.text}>
        <Text style={mainLayout.button}>Home</Text>
      </Link>
    </View>
  );
}

