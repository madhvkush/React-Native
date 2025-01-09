import { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Button,
  Alert,
  Keyboard,
} from "react-native";
import { PersonalFormData } from "./PersonalInfo";

interface PersonalInfoFormState extends PersonalFormData {}
interface PersonalInfoFormProps {
  onSubmit: (formData: PersonalFormData) => void;
}

export const PersonalInfoForm = (props: PersonalInfoFormProps) => {
  const [formData, setFormData] = useState<PersonalInfoFormState>({
    name: "",
    email: "",
    mobile: "",
  });

  const handleInputChange = (field: keyof PersonalFormData, value: string) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleSubmit = () => {
    const { name, email, mobile } = formData;

    if (!name || !email || !mobile) {
      Alert.alert("Error", "All fields are required");
      return;
    }
    Keyboard.dismiss(); // Dismiss the keyboard
    props.onSubmit({ ...formData });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Personal Information Form</Text>
      <TextInput
        style={styles.input}
        placeholder="Name"
        placeholderTextColor="#888"
        value={formData.name}
        onChangeText={(text) => handleInputChange("name", text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor="#888"
        value={formData.email}
        onChangeText={(text) => handleInputChange("email", text)}
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="Mobile"
        placeholderTextColor="#888"
        value={formData.mobile}
        onChangeText={(text) => handleInputChange("mobile", text)}
        keyboardType="phone-pad"
      />
      <Button title="Submit" onPress={handleSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  heading: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  input: {
    height: 50,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 15,
    fontSize: 16,
  },
});
