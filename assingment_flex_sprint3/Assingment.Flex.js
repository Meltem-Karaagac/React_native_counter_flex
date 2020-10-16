import React from 'react';
import { SafeAreaView, View, Text, StyleSheet } from 'react-native';
const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.red}>
        <View style={styles.gray}>
          <View style={styles.orange}>
            <Text style={styles.text}>Orange Circle</Text>
          </View>
          <View style={styles.yellow}>
            <Text style={styles.text}>Yellow Box</Text>
          </View>
        </View>
      </View>
      <View style={styles.pink}>
        <View style={styles.black}>
          <Text style={[styles.text, { color: 'white' }]}>Black Box</Text>
        </View>
        <View style={styles.brown}>
          <Text
            style={[
              styles.text,
              { color: 'white' },
              { transform: [{ rotate: '-90deg' }] },
            ]}>
            Brown Box
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};
export default App;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  red: {
    flex: 2,
    backgroundColor: 'red',
  },
  pink: {
    flex: 3,
    backgroundColor: '#FFC0CA',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderBottomWidth: 5,
    borderBottomColor: '#4F6475',
    flexDirection: 'row',
  },
  gray: {
    flex: 1,
    backgroundColor: '#808080',
    flexDirection: 'row',
    margin: 10,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'space-around',

  },
  orange: {
    backgroundColor: '#FEA500',
    borderRadius: 120,
    height: 120,
    width: 120,
    alignItems: 'center',
    justifyContent: 'center',
  },
  yellow: {
    backgroundColor: 'yellow',
    borderRadius: 20,
    width: 120,
    alignItems: 'center',
    justifyContent: 'center',
    height: 60,
  },
  black: {
    flex: 5,
    backgroundColor: 'black',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 30,
    alignSelf: 'stretch',

  },
  brown: {
    flex: 2,
    backgroundColor: '#A42A29',
    borderRadius: 45,
    justifyContent: 'center',
    margin: 20,
    alignSelf: 'stretch',
    alignItems: 'center',
  },
});
