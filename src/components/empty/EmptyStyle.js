import { StyleSheet } from "react-native";
import MainColor from "../color/color";

module.exports = StyleSheet.create({
  emptyContainer: {
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    width: "100%",
    borderWidth: 1,
    borderColor: MainColor.quinary_1,
    borderRadius: 5,
    padding: 10,
    paddingVertical: 20,
  },
  emptyTittleText: {
    fontWeight: "600",
    fontSize: 18,
  },
  emptySubTittleText: {
    fontWeight: "400",
    fontSize: 12,
  },
});
