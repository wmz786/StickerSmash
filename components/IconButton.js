import { Pressable, StyleSheet, Text } from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

const IconButton = ({ icon, label, onPress }) => {
  return (
    <Pressable style={styles.button} onPress={onPress}>
      <MaterialIcons name={icon} size={24} color="#fff" />
      <Text style={styles.label}>{label}</Text>
    </Pressable>
  );
};

export default IconButton;

const styles = StyleSheet.create({
  button: {
    justifyContent: "center",
    alignItems: "center",
  },
  label: {
    color: "#fff",
    marginTop: 12,
  },
});
