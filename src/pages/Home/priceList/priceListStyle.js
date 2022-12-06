import { StyleSheet } from "react-native";
import MainColor from "../../../components/color/color";
module.exports = StyleSheet.create({
  priceListContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottomWidth: 1,
    borderBottomColor: "#e5e7eb",
    padding: 10,
  },
  priceDetailContainer: {
    display: "flex",
    flexDirection: "row",
  },
  logoCoin: {
    width: 50,
    height: 50,
  },
  containerPrice: {
    alignItems: "flex-end",
  },
  coinDetailContainer: {
    marginHorizontal: 10,
  },
  coinName: {
    fontSize: 18,
    fontWeight: "500",
  },
  coinCode: {
    fontWeight: "400",
    fontSize: 14,
  },
  coinPrice: {
    fontWeight: "600",
    fontSize: 18,
  },
  coinPercentageUp: {
    fontSize: 14,
    color: MainColor.quinary_3,
  },
  coinPercentageDown: {},
});
