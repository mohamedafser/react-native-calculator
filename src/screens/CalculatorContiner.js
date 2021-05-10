import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import CalcButton from "../components/CalcButton";
import { calcData } from "../calcData";

const CalculatorContiner = () => {
  const [calcCurretnValues, setCalcCurretnValues] = useState({
    currentValue: "",
    outputDataValue: null,
    currentEventType: null,
  });
  console.log("calcCurretnValues", calcCurretnValues);
  return (
    <View style={styles.contianer}>
      <View style={styles.header}>
        <Text style={styles.currentText}>{calcCurretnValues.currentValue}</Text>
        <Text style={styles.outputValue}>
          {calcCurretnValues.outputDataValue}
        </Text>
      </View>
      <View style={styles.content}>
        <View style={styles.row}>
          <CalcButton
            setCalcCurretnValues={setCalcCurretnValues}
            currentData={calcData[0].clear}
          />
          <CalcButton
            setCalcCurretnValues={setCalcCurretnValues}
            currentData={calcData[0].backspace}
          />
          <CalcButton
            setCalcCurretnValues={setCalcCurretnValues}
            currentData={calcData[0].percentage}
          />
          <CalcButton
            setCalcCurretnValues={setCalcCurretnValues}
            currentData={calcData[0].divide}
          />
        </View>
        <View style={styles.row}>
          <CalcButton
            setCalcCurretnValues={setCalcCurretnValues}
            currentData={calcData[0].seven}
          />
          <CalcButton
            setCalcCurretnValues={setCalcCurretnValues}
            currentData={calcData[0].eight}
          />
          <CalcButton
            setCalcCurretnValues={setCalcCurretnValues}
            currentData={calcData[0].nine}
          />
          <CalcButton
            setCalcCurretnValues={setCalcCurretnValues}
            currentData={calcData[0].multiple}
          />
        </View>
        <View style={styles.row}>
          <CalcButton
            setCalcCurretnValues={setCalcCurretnValues}
            currentData={calcData[0].four}
          />
          <CalcButton
            setCalcCurretnValues={setCalcCurretnValues}
            currentData={calcData[0].five}
          />
          <CalcButton
            setCalcCurretnValues={setCalcCurretnValues}
            currentData={calcData[0].six}
          />
          <CalcButton
            setCalcCurretnValues={setCalcCurretnValues}
            currentData={calcData[0].minus}
          />
        </View>
        <View style={styles.row}>
          <CalcButton
            setCalcCurretnValues={setCalcCurretnValues}
            currentData={calcData[0].one}
          />
          <CalcButton
            setCalcCurretnValues={setCalcCurretnValues}
            currentData={calcData[0].two}
          />
          <CalcButton
            setCalcCurretnValues={setCalcCurretnValues}
            currentData={calcData[0].three}
          />
          <CalcButton
            setCalcCurretnValues={setCalcCurretnValues}
            currentData={calcData[0].plus}
          />
        </View>
        <View style={styles.row}>
          <CalcButton
            setCalcCurretnValues={setCalcCurretnValues}
            currentData={calcData[0].zero}
          />
          <CalcButton
            setCalcCurretnValues={setCalcCurretnValues}
            currentData={calcData[0].decimal}
          />
          <CalcButton
            setCalcCurretnValues={setCalcCurretnValues}
            currentData={calcData[0].equal}
          />
        </View>
      </View>
    </View>
  );
};

export default CalculatorContiner;
const styles = StyleSheet.create({
  contianer: {
    height: "100%",
    backgroundColor: "#000",
  },
  header: {
    minHeight: 370,
    paddingTop: 90,
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-end",
    paddingBottom: 15,
    paddingRight: 15,
  },
  currentText: {
    fontSize: 46,
    color: "#ddd",
    paddingBottom: 50,
  },
  outputValue: {
    fontSize: 34,
    color: "#ddd",
  },
  content: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-end",
    borderTopColor: "#ddd",
    borderWidth: 1,
  },
  row: {
    paddingTop: 15,
    paddingBottom: 15,
    paddingRight: 15,
    paddingLeft: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },
});
