import React, { Component } from 'react';
import { View, Text, FlatList } from 'react-native';
import Trip from './Trip'

export default class TripsScreen extends Component {

  static navigationOptions = {
    header: null
  };

  renderItem = (item) => {
    return <Trip title='Euro Trip 2019' price='R$ 5.000,00'  />
  }

  render() {
  
    const trips = [
      {id: '1', name: 'Euro Trip 2019', price: 'R$ 5.000,00'},
      {id: '2', name: 'Expedição Atacama', price: 'R$ 3.000,00'},
    ];
  
    return (
        <View style={{flex: 1,}}>
            <View style={{flex: 1, backgroundColor: 'green'}}>
                <Text>MAPA</Text>
            </View>

            <View style={{flex: 1, backgroundColor: '#7159C1'}}>
              
            
              <FlatList
                data={trips}
                renderItem={this.renderItem}
                horizontal
              />

              
            
            
            </View>
            
        </View>
    ) ;
  }
};
