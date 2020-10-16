import React, { useState, use } from 'react';
import { SafeAreaView, View, Text, TouchableOpacity } from 'react-native';


const App = (props) =>{
  let initialState = 0;
  const [count, setcount] = useState(initialState);

  const add = (num) => {
    setcount(count + num)
  }

  const substract = (num) => {
    setcount(count - num)
  }

  const reset = () => {
    setcount(initialState)
  }

  const addRow = () =>{

  }
  return(
    <SafeAreaView>
      <View>
        <Text style={{fontSize:200, alignSelf:'center'}}>{count}</Text>
        <TouchableOpacity style={{backgroundColor:'#e5989b', padding:10, alignSelf:'center', marginBottom:10, borderRadius:8}}
        onPress={() => add(1)}>
          <Text>   UP   </Text>
        </TouchableOpacity><TouchableOpacity style={{backgroundColor:'#b5838d', padding:10, alignSelf:'center', marginBottom:10, borderRadius:8}}
        onPress={() => substract(1)}>
          <Text>DOWN</Text>
        </TouchableOpacity><TouchableOpacity style={{backgroundColor:'#6d6875', padding:10, alignSelf:'center',marginBottom:10, borderRadius:8}}
        onPress={() => reset()}>
          <Text>RESET</Text>
        </TouchableOpacity>
      </View>
      <View>

      </View>
    </SafeAreaView>
  )
}

export default App;