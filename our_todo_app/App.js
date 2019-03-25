import React, { Component } from 'react';
import { AppRegistry, Image, View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView , Button} from 'react-native';

import Login from './app/pages/Login';
import Banana from './app/pages/banana';
import FixedDimensionsBasic from './app/pages/FixedDimensionsBasic';
import FlexDirectionBasics from './app/pages/FlexDirectionBasics';
import PizzaTranslator from './app/pages/PizzaTranslator';

export default class Bananas extends Component {
  render() {
    
    return (
         
      <ScrollView>
     <Login />

     <View style={styles.container}> 
       <Text style={styles.Text} >this is Image</Text>
    <Banana />
    </View>

    <View style={styles.container}>
      <Text style={styles.Text}> This is Fixed FixedDimensions </Text>
    <FixedDimensionsBasic /> 
    </View>
    
    <PizzaTranslator />
    <FlexDirectionBasics />

    <Button
  onPress={() => {
    Alert.alert('You tapped the button!');
  }}
  title="Press Me"
/>



     </ScrollView>
     

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  logotext: {
    backgroundColor: '#DDDDDD',
    fontSize: 18,
    marginVertical: 15,
  },
  Text: {
    fontSize: 18,
    color: 'green',
  }
 
});
