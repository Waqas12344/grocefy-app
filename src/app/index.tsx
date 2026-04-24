import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Edit app/index.tsx to edit this screen.</Text>
      <Link href="/about">
        <Text style={{ color: "blue", marginTop: 20 }}>Go to About</Text>
      </Link>
      <Link href="/contact">
        <Text style={{ color: "blue", marginTop: 20 }}>Go to Contact</Text>
      </Link>
    </View>
  );
}
