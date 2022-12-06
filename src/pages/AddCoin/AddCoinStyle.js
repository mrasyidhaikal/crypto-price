import { StyleSheet } from "react-native";
import MainColor from "../../components/color/color";

module.exports = StyleSheet.create({
  container: {
    flex: 1,
  },
  sectionAddCoin: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    padding: 20,
    height: "85%",
    justifyContent: "center",
    // backgroundColor: "red",
  },
  tittleAddCoin: {
    fontWeight: "700",
    fontSize: 24,
    color: MainColor.secondary_1,
    marginVertical: 20,
  },
  containerButton: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
    marginVertical: 20,
  },
});
