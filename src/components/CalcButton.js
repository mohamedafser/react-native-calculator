import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const CalcButton = ({ setCalcCurretnValues, currentData }) => {
  const handlePressButton = (currVal) => {
    if (currentData.label === "CE") {
      setCalcCurretnValues((prevState) => {
        return {
          ...prevState,
          currentValue: prevState.currentValue.substr(
            0,
            prevState.currentValue.length - 1
          ),
        };
      });
      return;
    } else if (currentData.label === "C") {
      setCalcCurretnValues((prevState) => {
        return {
          ...prevState,
          currentValue: "",
          outputDataValue: "",
        };
      });
    } else if (currentData.label === "=") {
      setCalcCurretnValues((prevState) => {
        if (
          prevState.currentValue.substr(prevState.currentValue.length - 1) ===
            "+" ||
          prevState.currentValue.substr(prevState.currentValue.length - 1) ===
            "-" ||
          prevState.currentValue.substr(prevState.currentValue.length - 1) ===
            "*" ||
          prevState.currentValue.substr(prevState.currentValue.length - 1) ===
            "%" ||
          prevState.currentValue.substr(prevState.currentValue.length - 1) ===
            ""
        ) {
          return prevState;
        }
        return {
          ...prevState,
          outputDataValue:
            String(eval(prevState.currentValue)).length > 3 &&
            String(eval(prevState.currentValue)).includes(".")
              ? String(eval(prevState.currentValue).toFixed(4))
              : String(eval(prevState.currentValue)),
        };
      });
    } else if (currentData.label === "%") {
      const currentTotal =
        String(eval(prevState.currentValue)).length > 3 &&
        String(eval(prevState.currentValue)).includes(".")
          ? String(eval(prevState.currentValue).toFixed(4))
          : String(eval(prevState.currentValue));
      setCalcCurretnValues((prevState) => {
        return {
          ...prevState,
          currentValue: prevState.currentValue,
        };
      });
    } else {
      setCalcCurretnValues((prevState) => {
        return {
          ...prevState,
          currentValue: prevState.currentValue + currVal,
        };
      });
      return;
    }
  };
  return (
    <TouchableOpacity
      style={
        currentData.label !== "0"
          ? {
              ...styles.button,
              backgroundColor: currentData.bgColor,
            }
          : {
              ...styles.button,
              width: "46%",
              backgroundColor: currentData.bgColor,
            }
      }
      onPress={() => handlePressButton(currentData.label)}
    >
      <Text style={{ ...styles.buttonTxt, color: currentData.color }}>
        {currentData.label === "*"
          ? "x"
          : currentData.label === "/"
          ? "÷"
          : currentData.label}
      </Text>
    </TouchableOpacity>
  );
};
export default CalcButton;
const styles = StyleSheet.create({
  button: {
    borderRadius: 40,
    width: "23%",
    height: 65,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonTxt: {
    color: "#fff",
    fontSize: 26,
  },
});
