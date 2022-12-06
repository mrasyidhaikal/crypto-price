import { Text, View } from "react-native";
const EmptySection = (props) => {
  const style = require("./EmptyStyle");

  return (
    <View style={style.emptyContainer}>
      <Text style={style.emptyTittleText}>You Don't Have Watch List Yet</Text>
      <Text style={style.emptySubTittleText}>
        You can add Coin by Click button Bellow!
      </Text>
    </View>
  );
};

export default EmptySection;
