import React, { Component } from 'react';
import { Text, View, StyleSheet, FlatList } from 'react-native';
import { Constants } from 'expo';
import { Header } from 'react-native-elements';

// You can import from local files
import MovieDetail from './components/MovieDetail';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

const moviesData = require('./data.json'); 

export default class BasicReactNativeApp extends Component {    
  renderItem = item => {
    return (
      <Card style={styles.movie_detail}>
        <MovieDetail movie={item}/>
      </Card>
    )
  }

  render() {
    console.log(moviesData);
    return (
      <View style={styles.container}>
      <Header 
          style={styles.headerName}
          centerComponent={{ text: 'Basic React Native App', style: { fontSize:20, color: 'white', fontWeight: 'bold' } }}
          containerStyle={ styles.headerName }
        />
        <Header 
          // style={styles.header}
          centerComponent={{ text: 'Top ten movie of IMDB', style: { fontSize:16 } }}
          containerStyle={ styles.headerText }
        />
        <FlatList
          data={moviesData}
          renderItem={({item}) => this.renderItem(item)}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
  },
  headerName: {
    title: "Title center",
    height: 80,
    headerTitleStyle: { 
        textAlign:"center", 
        flex:1 
    },
  },
  headerText: {
    backgroundColor: 'white',
    height: 50,
    textAlign: 'center',
    padding: 5,
    // justifyContent: 'space-around',
    alignItems: 'center',
  },
  movie_detail: {
    margin: 10,
  },
});