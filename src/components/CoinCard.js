import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image
} from 'react-native';

import { images } from './../Utils/CoinIcons';

const styles = StyleSheet.create({
  container: {
      display: "flex",
      marginBottom: 20,
      borderBottomColor: "#e5e5e5",
      borderBottomWidth: 3,
      padding: 20
  },
  upperRow: {
      display: "flex",
      flexDirection: "row",
      marginBottom: 15
  },
  coinSymbol: {
      marginTop: 10,
      marginLeft: 20,
      marginRight: 5,
      fontWeight: "bold",        
  },
  coinName: {
      marginTop: 10,
      marginLeft: 5,
      marginRight: 20
  },
  seperator: {
      marginTop: 10,
  },
  coinPrice: {
      marginTop: 10,
      marginLeft: "auto",
      marginRight: 10,
      fontWeight: "bold",        
  },
  image: {
      width: 35,
      height: 35,
  },
  moneySymbol: {
      fontWeight: "bold",
  },
  statisticsContainer: {
      display: "flex",
      borderTopColor: "#FAFAFA",
      borderTopWidth: 2,
      padding: 10,
      flexDirection: "row",
      justifyContent: "space-around"
  },
  percentChangePlus: {
      color: "#00BFA5",
      fontWeight: "bold",
      marginLeft: 5
  },
  percentChangeMinus: {
      color: "#DD2C00",
      fontWeight: "bold",
      marginLeft: 5
  }
})

const { 
  container,
  image,
  moneySymbol,
  upperRow,
  coinSymbol,
  coinName,
  coinPrice,
  statisticsContainer,
  seperator,
  percentChangePlus,
  percentChangeMinus
} = styles;

const CoinCard = (props) => {
  return (
    <View style={container}>
      <View style={upperRow}>
        <Image style={image} source={{ uri: images[props.symbol] }}/>
        <Text style={seperator}>{props.symbol}</Text>
        <Text style={coinName}>{props.coin_name}</Text>
        <Text style={coinPrice}>{props.price_usd}<Text style={moneySymbol}>$</Text></Text>

      </View>
      <View style={statisticsContainer}>
        <Text>24h: <Text style={props.percent_change_24h < 0 ? percentChangeMinus : percentChangePlus }></Text>{props.percent_change_24h} % </Text>
        <Text>7d: 
          <Text style={props.percent_change_7d < 0 ? percentChangeMinus : percentChangePlus }>
          {props.percent_change_7d} 
          </Text>
          % 
        </Text>
      </View>
    </View>
  )
}

export default CoinCard;