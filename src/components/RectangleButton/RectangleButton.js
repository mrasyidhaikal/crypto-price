import { Text, TouchableOpacity, ActivityIndicator } from "react-native";
const RectangleButton = (props) => {
  const style = require("./RectangleButtonStyle");
  let styleNameButton = [];
  let styleNameText = [];
  const onPress = (e) => {
    if (props.onPress) props.onPress(e, props.opt);
  };
  if (props.isPrimary) {
    styleNameButton.push(style.primaryButton);
    styleNameText.push(style.primaryText);
  }
  if (props.isTextPrimary) {
    styleNameButton.push(style.primaryButtonText);
    styleNameText.push(style.buttonPrimaryText);
  }
  if (props.isLoading) {
    styleNameButton.push(style.loadingButton);
  }

  return (
    <TouchableOpacity onPress={(e) => onPress(e)} style={styleNameButton}>
      {props.isLoading ? (
        <ActivityIndicator color="#0000ff" />
      ) : (
        <Text style={styleNameText}>{props.children}</Text>
      )}
    </TouchableOpacity>
  );
};

export default RectangleButton;
