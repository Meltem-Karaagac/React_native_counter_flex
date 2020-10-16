import React from 'react';
import { Text, View, SafeAreaView, StyleSheet, ScrollView, FlatList, Image, Dimensions, TextInput, Platform, TouchableOpacity } from 'react-native';
import ShopCard from "./components/ShopCard";
const food_data = [
  {
    id: 0,
    name: 'Red Delicious Apples',
    imageUrl: 'https://www.freepnglogos.com/uploads/apple-png/apple-fruit-png-transparent-images-png-only-19.png',
    price: '$2.96',
    amount: 'lb'
  },
  {
    id: 1,
    name: 'Navel Orange Premium',
    imageUrl: 'https://res.cloudinary.com/syndigo/image/fetch/f_jpg/https://assets.edgenet.com/b7756d37-aa58-4222-8a2a-3473cbb8eb23%3Fsize=600x600',
    price: '$3.49',
    amount: 'lb'
  },
  {
    id: 2,
    name: 'Satsuma Mandarine',
    imageUrl: 'https://img.pngio.com/mandarin-png-transparent-images-pictures-photos-png-arts-mandarin-orange-png-1500_1500.png',
    price: '$4.99',
    amount: 'lb'
  }, {
    id: 3,
    name: 'Cotton Candy Grapes',
    imageUrl: 'https://i5.peapod.com/c/FI/FIYW9.jpg',
    price: '$1.35',
    amount: 'lb'
  }, {
    id: 4,
    name: 'Fresh Strawberry',
    imageUrl: 'https://www.freepnglogos.com/uploads/strawberry-png/strawberry-solo-transparent-png-stickpng-5.png',
    price: '$4.49',
    amount: 'lb'
  },
  {
    id: 5,
    name: 'Sweet Bananas',
    imageUrl: 'https://i5.walmartimages.com/asr/209bb8a0-30ab-46be-b38d-58c2feb93e4a_1.1a15fb5bcbecbadd4a45822a11bf6257.jpeg?odnHeight=450&odnWidth=450&odnBg=FFFFFF',
    price: '$0.18',
    amount: 'ea'
  },
  {
    id: 6,
    name: 'Black Plums',
    imageUrl: 'https://i5.walmartimages.com/asr/56af3244-4e91-4751-bed6-5074c4af3668_1.81072c0c43458c7416cebc6caa5f2588.jpeg?odnHeight=150&odnWidth=150&odnBg=ffffff',
    price: '$0.59',
    amount: 'ea'
  }, {
    id: 7,
    name: 'Curious Kiwis',
    imageUrl: 'https://i5.walmartimages.com/asr/ea2f1505-0449-4d67-b4b4-d64294748ab5_2.ccee6b1b5876b8a7d2ef2395829076ad.jpeg?odnHeight=150&odnWidth=150&odnBg=ffffff',
    price: '$0.38',
    amount: 'ea'
  }, {
    id: 8,
    name: 'Watermelon Seedless',
    imageUrl: 'https://i5.walmartimages.com/asr/7eaaef1a-e70d-4ad1-983a-0d32f3207aba_1.25f407d7eea58042f2e714def085de92.jpeg?odnHeight=150&odnWidth=150&odnBg=ffffff',
    price: '$5.99',
    amount: 'ea'
  },
  {
    id: 9,
    name: 'Honey Melon',
    imageUrl: 'https://pngimg.com/uploads/melon/melon_PNG14383.png',
    price: '$5.87',
    amount: 'ea'
  },
  {
    id: 10,
    name: 'Pineapple',
    imageUrl: 'https://i5.walmartimages.com/asr/dd2a5d3c-d358-4579-8ece-59ce1804ab5b_9.0b874251fccc645fd98ac76e797c2d2a.jpeg?odnHeight=150&odnWidth=150&odnBg=ffffff',
    price: '$3.99',
    amount: 'ea'
  },
  {
    id: 11,
    name: 'Fresh Mangoes',
    imageUrl: 'https://i5.walmartimages.com/asr/3d15ee0d-110f-4043-8ad1-738a9a32859e_3.f00a50c3a83d24ea44407bc0d18e4a62.jpeg?odnHeight=150&odnWidth=150&odnBg=ffffff',
    price: '$0.98',
    amount: 'ea'
  }
];

const dep_data = [
  {
    index: 1,
    name: 'Beverages',
    imageUrl: 'https://lh3.googleusercontent.com/proxy/HzTJRDywkNF9N9Yfxp0w54meFEigOQWRw4lqgF5xvxYl5yhNSbvLcXSxwPgDoxEhzdTDSdQmWmWxpTM7NnAYT6E0GB4So66betqzG5BGlsg3yz2f0RDhO3DnS_4'
  },

  {
    index: 2,
    name: 'Deli',
    imageUrl: 'https://www.hungryhowies.com/sites/default/files/styles/menu_item_280x175/public/images/menu-items/thumbnails/buildyourownpizza_0.png?itok=fgzFck86'
  },

  {
    index: 3,
    name: 'Meat',
    imageUrl: 'https://lh3.googleusercontent.com/proxy/7gpaDp9epMwnCeIphm7Xe4hY8G6LOI429ncq1Jsy0Do4OrG3gLbuRYuKjyaVuGTW1xOJdp3rPnq479fjuWOwh0Jye_lcS1_hlsMCLM2y-N6idc0at-YpM9QCt9JMJesVgkFa'
  },
  {
    index: 4,
    name: 'Seafood',
    imageUrl: 'https://img2.pngio.com/fresh-seafood-png-png-image-fresh-seafood-png-500_250.png'
  },
  {
    index: 5,
    name: 'Organics',
    imageUrl: 'https://i5.peapod.com/c/VQ/VQ0EH.jpg'
  },

]
const Shopping = () => {

  const renderFoodData = ({ item }) => <ShopCard food={item} />

  const listHeader = () => {
    return (
      <>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ flex: 1 }}>
          {
            dep_data.map(dep_item => {
              return (
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                  <Image
                    source={{ uri: dep_item.imageUrl }}
                    style={{
                      width: Dimensions.get('window').width * 0.95,
                      height: Dimensions.get('window').height / 4,
                      margin: 5,
                      borderRadius: 10,
                      shadowOpacity: 10,
                    }} />
                  <View style={{ position: 'absolute' }}>
                    <Text style={styles.depNames}>{dep_item.name}</Text>
                  </View>
                </View>
              )
            })
          }
        </ScrollView>
      </>
    )
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView>
        <View style={{ flex: 1, flexDirection: "row" }}>
          <Image style={{ width: 50, height: 50, marginBottom: 5, marginLeft: 5, borderRadius: 5 }} source={require('./assets/lighthouse-logo.png')} />
          <Text style={{ fontSize: 45, alignSelf: 'center', color: '#1d3557', letterSpacing: 2, marginLeft: 10 }}>
            lighthouse
              </Text>
        </View>
        <View style={styles.banner}>
          <TouchableOpacity><Text style={styles.bannerText}>Deals</Text></TouchableOpacity>
          <TouchableOpacity><Text style={styles.bannerText}>Pickup&Delivery</Text></TouchableOpacity>
          <TouchableOpacity><Text style={styles.bannerText}>Grocery</Text></TouchableOpacity>
        </View>
        <View style={styles.search}>
          <TextInput style={styles.searchInput} keyboardType="default" placeholder="Search Lighthouse..." autoFocus />
          <Image style={styles.searchimage} source={{ uri: "https://img.icons8.com/ios/452/search--v1.png" }} />
        </View>
        <View style={{ flex: 15 }}>
          <FlatList
            keyExtractor={(item, index) => index.toString()}
            data={food_data}
            renderItem={renderFoodData}
            numColumns={2}
            contentContainerStyle={{
              justifyContent: 'space-between'
            }}
            ListHeaderComponent={listHeader}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  banner: {
    flex: 1,
    fontSize: 25,
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: "#1d3557",
    alignItems: "center",
    height: Dimensions.get("window").height * 0.06
  },
  bannerText: {
    color: "white",
    fontSize: 15,
    fontWeight: "bold"
  },
  search: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "white",
    width: Dimensions.get("window").width * 0.9,
    alignSelf: 'center',
    height: Platform.OS == 'android' ? null : 40,
    borderRadius: 10,
    marginTop: 10,
    paddingLeft: 5,
    flexDirection: "row",
    borderColor: "gray",
    borderWidth: 1,
  },
  searchimage: {
    width: 25,
    height: 25,
    position: 'absolute',
    right: 10,
    top: 10,
  },
  searchInput: {
    fontSize: 15,
  },
  depNames: {
    fontSize: 60,
    fontWeight: '600',
    color: 'white',
    letterSpacing: 3,
    shadowColor: '#1d3557',
    shadowOpacity: 0.7,
    shadowOffset: { width: 0, height: 0 },
    shadowRadius: 2
  }
}
)
export default Shopping;