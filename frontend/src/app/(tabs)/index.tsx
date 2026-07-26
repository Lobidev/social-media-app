import { Text, View, StyleSheet } from "react-native";
import { Link } from "expo-router";
import { mainLayout } from "../../styles/mainLayout";
export default function Index() {
  return (
    <View style={mainLayout.container}>
      <Text style={mainLayout.text}>Irgend ein Text</Text>
      <Link href="/about" style={mainLayout.text}>
        <Text style={mainLayout.button}>About</Text>
      </Link>
    </View>
  );
}

