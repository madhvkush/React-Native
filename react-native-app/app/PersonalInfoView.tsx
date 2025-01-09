import { Text, View } from "react-native";
import { PersonalFormData } from "./PersonalInfo";

interface PersonalInfoViewProps extends PersonalFormData {}
export function PersonalInfoView(props: PersonalInfoViewProps) {
  return (
    <>
      <View
        style={{
          marginTop: 10,
          marginBottom: 10,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            fontSize: 20, // Adjust for the desired heading size
            fontWeight: "bold", // Makes the text bold
            color: "#343a40", // Color of the heading
            marginBottom: 10,
          }}
        >
          Personal Information
        </Text>
        <Text>{props.name}</Text>
        <Text>{props.email}</Text>
        <Text>{props.mobile}</Text>
      </View>
    </>
  );
}
