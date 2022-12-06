import { Text, View, Image } from "react-native";
//Icon
import { Ionicons } from "@expo/vector-icons";
const PriceList = (props) => {
  const style = require("./priceListStyle");

  const currencyFormat = (num) => {
    if (num) {
      return "$ " + num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
    } else {
      return 0;
    }
  };

  const formatPercentage = (num) => {
    if (num) {
      return num.toFixed(2);
    } else {
      return 0;
    }
  };

  return (
    <View style={style.priceListContainer} key={props.id}>
      <View style={style.priceDetailContainer}>
        <View>
          <Image
            style={style.logoCoin}
            source={{
              uri: `https://cryptoicons.org/api/icon/${props.symbol.toLowerCase()}/200`,
            }}
            alt="Flowers in Chania"
          />
        </View>
        <View style={style.coinDetailContainer}>
          <Text style={style.coinName}>{props.coinName}</Text>
          <Text style={style.coinCode}>{props.symbol}</Text>
        </View>
      </View>
      <View style={style.containerPrice}>
        <Text style={style.coinPrice}>{currencyFormat(props.price_usd)}</Text>
        {props.percentChange > 0 ? (
          <Text style={style.coinPercentageUp}>
            <Ionicons name="trending-up-outline" size={16} />
            {` ${formatPercentage(props.percentChange)}`} %
          </Text>
        ) : (
          <Text style={style.coinPercentageDown}>
            <Ionicons name="trending-down-outline" size={16} />
            {props.percentChange} %
          </Text>
        )}
      </View>
    </View>
  );
};

export default PriceList;
