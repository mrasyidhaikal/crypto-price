import { StatusBar } from "expo-status-bar";
import {
  ScrollView,
  Text,
  View,
  Image,
  SafeAreaView,
  RefreshControl,
  FlatList,
} from "react-native";

//Icon
import { Ionicons } from "@expo/vector-icons";
//Hook
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import React, { useState, useEffect } from "react";
import { useIsFocused } from "@react-navigation/native";

//Components
import RectangleButton from "../../components/RectangleButton/RectangleButton";
import PriceList from "./priceList/priceList";
import EmptySection from "../../components/empty/Empty";
import MainColor from "../../components/color/color";
import ActionType from "../../redux/GlobalActionType";

// Helper
import { get } from "../../helper/network";
// const { width: WIDTH } = Dimensions.get("window");

const Home = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const isFocused = useIsFocused();
  const style = require("./HomeStyle");
  const globalState = useSelector((state) => state);
  const [refreshing, setRefreshing] = useState(false);
  const wait = (timeout) => {
    return new Promise((resolve) => setTimeout(resolve, timeout));
  };
  const onRefresh = async () => {
    setRefreshing(true);
    let dataPrice = [];
    if (globalState.dataPriceList.length > 0) {
      for (let index = 0; index < globalState.dataPriceList.length; index++) {
        const resultPrice = await getDataPrice(
          globalState.dataPriceList[index].symbol
        );

        dataPrice.push(resultPrice);
      }
    }
    if (dataPrice.length === globalState.dataPriceList.length) {
      dispatch({
        type: ActionType.SAVE_PRICE,
        dataPriceList: dataPrice,
      });
      setRefreshing(false);
    }
  };

  const getDataPrice = async (id) => {
    const result = await get(
      `https://data.messari.io/api/v1/assets/${id}/metrics`
    );

    if (result.status === 200) {
      // console.log("res", result.data.data);
      return result.data.data;
    } else {
      return false;
    }
  };

  useEffect(() => {
    console.log("masokl");
    onRefresh();
    // eslint-disable-next-line
  }, [isFocused]);
  const deleteNote = (data) => {
    console.log("dat", data);
  };
  const renderRow = ({ item }) => {
    return (
      <PriceList
        key={item.id}
        id={item.id}
        symbol={item.symbol}
        coinName={item.name}
        price_usd={item.market_data.price_usd}
        percentChange={item.market_data.percent_change_usd_last_24_hours}
      />
    );
  };
  // https://cryptoicons.org/api/icon/xrp/200

  return (
    <View style={style.container}>
      <SafeAreaView>
        <View style={style.headerHome}>
          <Text style={style.tittle}>Crypto Tracker Pro</Text>
          <Image
            style={style.profilePicture}
            source={require("./../../../assets/people.jpg")}
          />
        </View>
        <View style={style.sectionPriceList}>
          {globalState.dataPriceList.length > 0 ? (
            <FlatList
              data={globalState.dataPriceList}
              renderItem={renderRow}
              refreshControl={
                <RefreshControl
                  refreshing={refreshing}
                  onRefresh={() => onRefresh()}
                />
              }
            />
          ) : (
            // globalState.dataPriceList.map((x, i) => {
            //   return (
            //     <PriceList
            //       key={x.id}
            //       id={x.id}
            //       symbol={x.symbol}
            //       coinName={x.name}
            //       price_usd={x.market_data.price_usd}
            //       percentChange={x.market_data.percent_change_usd_last_24_hours}
            //     />
            //   );
            // })
            <EmptySection />
          )}
        </View>
        <View>
          <RectangleButton
            onPress={() => navigation.navigate("addCoin")}
            isTextPrimary
          >
            <Ionicons name="add" size={16} color={MainColor.primary_1} />
            Add a Cryptocurrency
          </RectangleButton>
        </View>
      </SafeAreaView>
      <StatusBar style="auto" />
    </View>
  );
};

export default Home;
