import React from 'react';
import { Text, View, StyleSheet, Image, ScrollView, StatusBar } from 'react-native';
import { Constants } from 'expo';

/*  icona sole
https://cdn4.iconfinder.com/data/icons/iconsland-weather/PNG/256x256/Sunny.png
*/

/* icona pioggia
http://2.bp.blogspot.com/-hcplc4FHDos/Uu5pM3LIYVI/AAAAAAAAA0w/v8OeR3X21u0/s1600/Pioggia+free+ClipArt.png
*/

StatusBar.setHidden(true);

const elementCards = [
{
  weekDay: "WED",
  month: "Apr",
  numberDay: "22",
  image: {uri: "https://cdn4.iconfinder.com/data/icons/iconsland-weather/PNG/256x256/Sunny.png"},
  tempMax: "25.1°C",
  tempMin: "12.8°C",
  tempHumidity: "Humidity: 47%",
  prevision: "Forecast: sky is Clear",
},
{
  weekDay: "THU",
  month: "Apr",
  numberDay: "23",
  image: {uri: "https://cdn4.iconfinder.com/data/icons/iconsland-weather/PNG/256x256/Sunny.png"},
  tempMax: "26.2°C",
  tempMin: "9.5°C",
  tempHumidity: "Humidity: 45%",
  prevision: "Forecast: sky is Clear",
},
{
  weekDay: "FRI",
  month: "Apr",
  numberDay: "24",
  image: {uri: "https://cdn4.iconfinder.com/data/icons/iconsland-weather/PNG/256x256/Sunny.png"},
  tempMax: "27.0°C",
  tempMin: "10.3°C",
  tempHumidity: "Humidity: 47%",
  prevision: "Forecast: sky is Clear",
},
{
  weekDay: "SAT",
  month: "Apr",
  numberDay: "25",
  image: {uri: "http://2.bp.blogspot.com/-hcplc4FHDos/Uu5pM3LIYVI/AAAAAAAAA0w/v8OeR3X21u0/s1600/Pioggia+free+ClipArt.png"},
  tempMax: "27.6°C",
  tempMin: "16.7°C",
  tempHumidity: "Humidity: 0%",
  prevision: "Forecast: light rain",
},
{
  weekDay: "SUN",
  month: "Apr",
  numberDay: "26",
  image: {uri: "http://2.bp.blogspot.com/-hcplc4FHDos/Uu5pM3LIYVI/AAAAAAAAA0w/v8OeR3X21u0/s1600/Pioggia+free+ClipArt.png"},
  tempMax: "24.5°C",
  tempMin: "17.3°C",
  tempHumidity: "Humidity: 0%",
  prevision: "Forecast: light rain",
},
{
  weekDay: "MON",
  month: "Apr",
  numberDay: "27",
  image: {uri: "http://2.bp.blogspot.com/-hcplc4FHDos/Uu5pM3LIYVI/AAAAAAAAA0w/v8OeR3X21u0/s1600/Pioggia+free+ClipArt.png"},
  tempMax: "26.0°C",
  tempMin: "15.5°C",
  tempHumidity: "Humidity: 0%",
  prevision: "Forecast: light rain",
},
{
  weekDay: "TUE",
  month: "Apr",
  numberDay: "28",
  image: {uri: "https://cdn4.iconfinder.com/data/icons/iconsland-weather/PNG/256x256/Sunny.png"},
  tempMax: "28.3°C",
  tempMin: "25.6°C",
  tempHumidity: "Humidity: 47%",
  prevision: "Forecast: sky is Clear",
},
{
  weekDay: "WED",
  month: "Apr",
  numberDay: "29",
  image: {uri: "https://cdn4.iconfinder.com/data/icons/iconsland-weather/PNG/256x256/Sunny.png"},
  tempMax: "29.3°C",
  tempMin: "23.4°C",
  tempHumidity: "Humidity: 46%",
  prevision: "Forecast: sky is Clear",
},
{
  weekDay: "THU",
  month: "Apr",
  numberDay: "30",
  image: {uri: "https://cdn4.iconfinder.com/data/icons/iconsland-weather/PNG/256x256/Sunny.png"},
  tempMax: "25.7°C",
  tempMin: "21.3°C",
  tempHumidity: "Humidity: 45%",
  prevision: "Forecast: sky is Clear",
}
];

const Card = props => (
  <View style={styles.screenCard}>
    <View style={styles.textLeft}>
      <Text style={{color: 'black', fontSize: 25}}> {props.weekDay} </Text>
      <Text style={{color: '#B7B7B7', fontSize: 20,  paddingLeft: 2}}> {props.numberDay} {props.month} </Text>
    </View>  
  
    <View style={styles.imageCenter}>
      <Image source={props.image} style={{width:100, height:80}} />
    </View>


    <View style={styles.finalText}>
      <Text style={{color: 'black', fontSize: 25}}> {props.tempMax}/{props.tempMin} </Text>
      <Text style={{color: '#B7B7B7', fontSize: 20,  paddingLeft: 5}}> {props.prevision} </Text>
      <Text style={{color: '#B7B7B7', fontSize: 20,  paddingLeft: 5}}> {props.tempHumidity} </Text>
    </View>
  
  </View>
);

/*
  mettendo le parentesi graffe nel metodo showCards() non permette di          visualizzare le Card richieste (capire il motivo, forse perchè è dentro la   classe App?)
*/ 

export default class App extends React.Component {

  showCards = () => 
    elementCards.map((lang, index) => (
      <Card weekDay={lang.weekDay} 
        month={lang.month}
        numberDay={lang.numberDay}
        image={lang.image}
        tempMax={lang.tempMax}
        tempMin={lang.tempMin}
        tempHumidity={lang.tempHumidity}
        prevision={lang.prevision} 
        key={index} 
      />  
    ));
  /*
    <Card weekDay={{weekDay: 'WED'}} 
        month={{month:'Apr'}}
        numberDay={{numberDay:'22'}}
        image={{image:{uri: "https://cdn4.iconfinder.com/data/icons/iconsland-weather/PNG/256x256/Sunny.png"}}}
        tempMax={{tempMax:'30'}}
        tempMin={{tempMin:'20'}}
        tempHumidity={{tempHumidity:'30%'}}
        prevision={{prevision:"StampoCard"}}  />
  */
  
  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          {this.showCards()}
        </View>
      </ScrollView>  
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'coral',
  },
  
  screenCard: {
  //  flex: 1,    in questo caso non si mette, altrimenti concede un altezza ad ogni card tale da farli rientrare tutti nella schermata principale; invece a noi serve che gli elementi si dispongano anche oltre la schermata principale in modo tale da applicare lo scroll
    height: 130,
    flexDirection: 'row',
    backgroundColor: '#EAEAEA',
    borderTopWidth: 3,
    borderTopColor: 'gray',
  //  justifyContent:'flex-start',
  },

  textLeft: {
    marginTop: 30,
    marginLeft:30,
  },

  imageCenter: {
    marginTop: 0,
    marginLeft:30,
    justifyContent: 'center'
  },

  finalText: {
    marginTop: 20,
    marginLeft: 30,
  }

});
