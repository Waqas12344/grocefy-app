import { useRouter } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";

export default function Index() {
  const router = useRouter();

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>About Page</Text>
      <Text>This is the about page for Grocefy app.</Text>
      <TouchableOpacity onPress={() => router.back()}>
        <Text style={{ color: "blue", marginTop: 20 }}>Back to Home</Text>
      </TouchableOpacity>
    </View>
  );
}
