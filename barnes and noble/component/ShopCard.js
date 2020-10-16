import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity, Image, Dimensions} from 'react-native';

const ShopCard = ({food}) => {
    return(
        <View style={styles.container}>
            <Image style={styles.images} source = {{uri:food.imageUrl}} />
            <Text style={styles.textTitle}>{food.name}</Text>
            <View style={{flex:1, flexDirection:"row", width:150, justifyContent:'space-between', marginBottom:5}}>
                <TouchableOpacity style={styles.btn} ><Text style={{fontSize:12,color:'white',}}>   Add</Text></TouchableOpacity>
                <Text style={styles.text}>{food.price}/{food.amount}</Text>
            </View>
        </View>
    )
};
const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:"center",
        margin:20,

        borderRadius:5,
        
    },
    images:{
        width: Dimensions.get("window").width * 0.3 ,
        height: Dimensions.get("window").height *0.15,
        resizeMode: "contain",

    }, 
    textTitle:{
        fontSize:15,
        marginBottom:15
    },
    text:{
        fontSize:20,
        flex:2,
        fontWeight:"bold",
        marginLeft:18,
        alignSelf:'center',
    },
    btn:{
        flex:1,
        fontSize:12,
        fontWeight:'bold',
        alignSelf:'center',
        alignContent:'center',
        borderColor:'#3d5a80',
        borderWidth:1,
        borderRadius:10,
        textAlign:'center',
        backgroundColor:'#3d5a80'
        
    }
})

export default ShopCard;
