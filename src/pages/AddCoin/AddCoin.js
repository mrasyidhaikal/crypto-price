import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { Text, View, SafeAreaView } from "react-native";
// const { width: WIDTH } = Dimensions.get("window");
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
//Component
import RectangleButton from "../../components/RectangleButton/RectangleButton";
import TextField from "../../components/TextField/TextField";
import { get } from "../../helper/network";
import ActionType from "../../redux/GlobalActionType";

const AddCoin = () => {
  const navigation = useNavigation();
  const [text, onChangeText] = useState("");
  const dispatch = useDispatch();
  const style = require("./AddCoinStyle");
  const globalState = useSelector((state) => state);

  const [state, setState] = useState({
    isError: null,
    isLoadingButton: false,
  });

  const checkDuplicateCoin = (id) => {
    let dataPriceList = globalState.dataPriceList;
    if (dataPriceList.length > 0) {
      let checkDuplicate = dataPriceList.filter((x) => x.id === id);

      if (checkDuplicate.length > 0) {
        setState((prevState) => ({
          ...prevState,
          isError: `You already have coin: ${text.toUpperCase()} on your watch list `,
        }));
        return true;
      } else {
        return false;
      }
    }
  };

  const onClickButtonSavePrice = async () => {
    if (text) {
      setState((prevState) => ({
        ...prevState,
        isLoadingButton: true,
      }));
      let dataPriceList = globalState.dataPriceList;
      let dataSymbol = text.toLowerCase();

      const result = await get(
        `https://data.messari.io/api/v1/assets/${text}/metrics`
      );

      if (result.status === 200) {
        let isDuplicate = checkDuplicateCoin(result.data.data.id);

        if (!isDuplicate) {
          dataPriceList.push(result.data.data);
          dispatch({
            type: ActionType.SAVE_PRICE,
            dataPriceList: dataPriceList,
          });
          setState((prevState) => ({
            ...prevState,
            isError: null,
            isLoadingButton: false,
          }));
          navigation.goBack();
        } else {
          setState((prevState) => ({
            ...prevState,

            isLoadingButton: false,
          }));
        }

        // dispatch({
        //   type: ActionType.SAVE_PRICE,
        //   dataPriceList: [],
        // });
      } else {
        setState((prevState) => ({
          ...prevState,
          isError: result.data.status.error_message,
          isLoadingButton: false,
        }));
      }
    } else {
      setState((prevState) => ({
        ...prevState,
        isError: "Please Fill Code First!",
      }));
    }
  };
  return (
    <View style={style.container}>
      <SafeAreaView>
        <View style={style.sectionAddCoin}>
          <Text style={style.tittleAddCoin}>Add a Cryptocurrency</Text>
          <TextField
            placeholder="Use a name or ticker symbol..."
            text={text}
            onChangeText={onChangeText}
            isError={state.isError}
          />

          <View style={style.containerButton}>
            <RectangleButton
              onPress={() => onClickButtonSavePrice()}
              isPrimary
              isLoading={state.isLoadingButton}
            >
              Add
            </RectangleButton>
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default AddCoin;
