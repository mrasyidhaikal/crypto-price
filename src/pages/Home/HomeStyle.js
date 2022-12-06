import { StyleSheet } from "react-native";
import MainColor from "../../components/color/color";

module.exports = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerHome: {
    backgroundColor: MainColor.primary_1,
    height: "35%",
    width: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingTop: 30,
  },
  tittle: {
    color: MainColor.tertiary_1,
    fontSize: 18,
    fontWeight: "600",
  },
  sectionPriceList: {
    margin: 20,
  },

  profilePicture: {
    width: 50,
    height: 50,
    borderRadius: 50,
  },
});
