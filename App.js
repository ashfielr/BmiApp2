import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View, TextInput, Button } from 'react-native';

// creating component which deals with BMI calculation, props = properties for the component
// entering weight and height and then clicking button will show BMI
const BMICalculatorComponent = (props) => {
  // Declare state variables
  const [weight, onWeightChange] = React.useState(0) //  [<getter>,<setter>]  for state variable
  // useState sets initial value
  const [height, onHeightChange] = React.useState(0)
  const [bmi, setBmi] = React.useState(0)
  return (
    <SafeAreaView>
      <Text style={styles.textInputLabel}>Weight (Kg)</Text>
      <TextInput
        style={styles.textInput}
        onChangeText={onWeightChange}
        value={weight}
        keyboardType="default"
      />
      <Text style={styles.textInputLabel}>Height (m)</Text>
      <TextInput
        style={styles.textInput}
        onChangeText={onHeightChange}
        value={height}
        keyboardType="default"
      />
      <Button
        onPress={() => {
          const bmiVal = weight/Math.pow(height,2)
          setBmi(Math.round((bmiVal + Number.EPSILON)*100)/100) // *100 and /100 to round to 2 d.p.
        }}
        title="Calculate BMI"
        accessibilityLabel="Calculate the BMI" />
        <Text>BMI: {bmi}</Text>
    </SafeAreaView>
  );
}

export default function App() {
  return (
    <View style={styles.container}>
      <BMICalculatorComponent />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textInputLabel: {
    fontSize: 24,
    fontweight: 'bold',
  },
  textInput: {
    height: 40,
    borderWidth: 1,
    borderColor: 'black',
    padding: 10,
    margin: 12,
  },
});
