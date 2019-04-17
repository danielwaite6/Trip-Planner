import React from 'react';
import { View, Text, Dimensions, StyleSheet } from 'react-native';

const dimensions = Dimensions.get('window');

const Trip = (props) => (
    
    <View style={{backgroundColor: 'pink'}}>

        <View style={{backgroundColor: 'white', paddingTop: 16, paddingLeft: 16, }}>
            
            <View style={styles.image}> 
                <Text>IMAGEM</Text>
            </View>
                            
            <Text>{props.title}</Text>      
            <Text style={styles.price}> {props.price} </Text>
                        
        </View>
                
    </View>
);


const styles = StyleSheet.create({
    image: {
      backgroundColor: 'yellow', 
      width: dimensions.width - 32, 
      height: 144,
      marginBottom: 6
    },
  
    price: {
      position: 'absolute', 
      top: 144 - 16, 
      right: 32, 
      textAlign: 'right', 
      backgroundColor: '#24C6DC',
      color: 'white'
    },
  
});
  

export default Trip;
    



