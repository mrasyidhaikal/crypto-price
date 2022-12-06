import { StyleSheet } from "react-native";
import MainColor from "../color/color";

module.exports = StyleSheet.create({
  primaryButton: {
    backgroundColor: MainColor.quaternary_1,
    padding: 10,
    height: 40,
    borderRadius: 5,
    minWidth: 150,
  },
  primaryText: {
    textAlign: "center",
    color: MainColor.tertiary_1,
    fontWeight: "500",
    fontSize: 16,
    height: 40,
  },
  primaryButtonText: {
    height: 40,
  },
  buttonPrimaryText: {
    color: MainColor.primary_1,
    fontSize: 16,
    fontWeight: "400",
    textAlign: "center",
    textAlignVertical: "center",
    height: 40,
  },
  loadingButton: {
    backgroundColor: "rgba(52, 52, 52, 0.0)",
    borderColor: MainColor.quinary_1,
    borderWidth: 1,
    padding: 10,
    height: 40,
    borderRadius: 5,
    minWidth: 150,
  },
});
