import { useState } from "react";
import { PersonalInfoForm } from "./PersonalInfoForm";
import { PersonalInfoView } from "./PersonalInfoView";
import { SafeAreaView, Text, View } from "react-native";

export interface PersonalFormData {
  name: string;
  email: string;
  mobile: string;
}

interface PersonalInfoState extends PersonalFormData {}
export const PersonalInfo = () => {
  const [personalData, setPersonalData] = useState<PersonalInfoState>({
    name: "",
    email: "",
    mobile: "",
  });
  return (
    <>
      <SafeAreaView style={{ flex: 1 }}>
        <PersonalInfoView {...personalData} />;
        <PersonalInfoForm
          onSubmit={(formData: PersonalFormData) => setPersonalData(formData)}
        />
      </SafeAreaView>
    </>
  );
};
