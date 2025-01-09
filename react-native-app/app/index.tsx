import { SafeAreaView, Text, View } from "react-native";
import { PersonalInfo } from "./PersonalInfo";

export default function Index() {
  return (
    <>
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          margin: 10,
        }}
      >
        <Text>Hello World.</Text>
        <Text>Welcome to React Native app</Text>
      </View>
      <SafeAreaView style={{ flex: 1 }}>
        <PersonalInfo />
      </SafeAreaView>
    </>
  );
}
