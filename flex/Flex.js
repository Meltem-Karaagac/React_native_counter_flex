import React from 'react';
import {Text, View, SafeAreaView} from 'react-native';

const App = () =>{
  return(
    <SafeAreaView style={{backgroundColor:'#fcf6bd', flex:1}}>
      <View style={{flex:1, flexDirection:"row"}}>
        <View style={{backgroundColor:'#b392ac', flex:2}}/>
        <View style={{backgroundColor:'#ffc8dd', flex:2}}/>
      </View>
<View style={{flex:1}}>
  <View style={{backgroundColor:'#dee2ff', flex:1}}/>
  <View style={{flex:1, flexDirection:"row"}}>
  <View style={{backgroundColor:'#17c3b2', flex:1}}/>
  <View style={{backgroundColor:'#ffcb77', flex:1}}/>
  <View style={{backgroundColor:'#fe6d73', flex:1}}/>
  </View>
  <View style={{backgroundColor:'#007ea7', flex:1}}/>
</View>

    </SafeAreaView>

  );
}

export default App;