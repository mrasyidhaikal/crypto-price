import { TextInput, Text } from "react-native";
const TextField = (props) => {
  const style = require("./TextFieldStyle");

  return (
    <>
      <TextInput
        style={style.input}
        onChangeText={props.onChangeText}
        value={props.text}
        placeholder={props.placeholder}
      />
      {props.isError ? (
        <Text style={style.errorMessage}>{props.isError}</Text>
      ) : null}
    </>
  );
};

export default TextField;
