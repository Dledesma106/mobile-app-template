import {View, Text, StyleSheet } from "react-native"
import EditScreenInfo from "../components/EditScreenInfo"
const Test = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Testing!</Text>
      <View style={styles.separator} />
      <EditScreenInfo path="/screens/Test.tsx" />
    </View>
  )
}

export default Test

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    title: {
      fontSize: 20,
      fontWeight: 'bold',
    },
    separator: {
      marginVertical: 30,
      height: 1,
      width: '80%',
    },
  });