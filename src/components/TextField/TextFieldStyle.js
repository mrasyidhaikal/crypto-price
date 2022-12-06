import { StyleSheet } from "react-native";
import MainColor from "../color/color";

module.exports = StyleSheet.create({
  input: {
    height: 50,
    borderWidth: 1,
    borderColor: MainColor.quinary_1,
    borderRadius: 5,
    padding: 10,
  },
  errorMessage: {
    fontSize: 12,
    color: MainColor.quinary_2,
  },
});
