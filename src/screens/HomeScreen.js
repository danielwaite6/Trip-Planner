import React, { Component } from 'react';
import { View, Text, ImageBackground, TouchableOpacity, StyleSheet } from 'react-native';
//import styles from './styles'

export default class HomeScreen extends Component {

  static navigationOptions = {
    header: null
  }

  state = {
    show: true,
    counter: 0,
  };

  handle = () => {
    this.setState({show: !this.state.show})
  }


  handleCounter = () => {
     this. setState({ counter: this.state.counter })
  }

  render() {
    const txtStyle = this.state.counter % 2 === 0 ? {color: 'green'} : {color: 'blue'};
    return (
        <ImageBackground source={require('../../assets/viagem1.jpg')} 
                         style={styles.ImageBackground} imageStyle={{resizeMode: 'stretch'}}>


            {
              !this.state.show 
              ? 
              (
                  <TouchableOpacity onPress={this.handleCounter} style={styles.BotaoComecar}>
                    <View style={styles.TextoComecar}>
                        <Text style={txtStyle}>
                          Começar
                        </Text>
                    </View>
                  </TouchableOpacity>
              )
              
              : 
              (
                  <TouchableOpacity onPress={() => this.props.navigation.navigate('Trips')} style={styles.BotaoComecar}>
                      <View style={styles.TextoComecar}>
                          <Text style={txtStyle}>
                            Vamos Planejar sua 1º Viagem ?!!!
                          </Text>
                      </View>
                  </TouchableOpacity>
              )
            }
            




        </ImageBackground>
    ) ;
  }
};


const styles = StyleSheet.create({
  ImageBackground: {
    flex: 1, 
    alignItems: 'center'
  },
  BotaoComecar: {
    paddingTop: 6
  },
  TextoComecar: {
    backgroundColor: 'white'
  },

  buttonText: {
    color: '#2F4F4F'
  }
});




//const txtStyle = this.state.counter % 2 === 0 ? {color: 'green'} : {color: 'blue'};



