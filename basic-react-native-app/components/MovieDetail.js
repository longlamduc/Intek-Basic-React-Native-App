import React, { Component } from 'react';
import { Text, View, StyleSheet, Image, Linking, TouchableOpacity } from 'react-native';

const movie = require('../data.json');

export default class MovieDetail extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>
          {this.props.movie.title}
        </Text>
        <Image style={styles.logo} source={{uri: this.props.movie.image}} resizeMode="contain"/>
        <TouchableOpacity onPress={ ()=> Linking.openURL(this.props.movie.url) }>
          <Text style={styles.infoButton}>More Info</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  title: {
    marginTop: 0,
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  logo: {
    height: 400,
    width: 300,
    margin: 10,
  },
  infoButton: {
    borderWidth: 1,
    borderRadius: 6,
    width: 250,
    height: 30,
    textAlign:'center',
    padding: 5,
    color: 'blue',
    borderColor: 'blue',
  }
});