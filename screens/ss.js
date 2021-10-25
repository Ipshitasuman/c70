import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Sscreen extends React.Component{
    render(){
        return(
            <View style={styles.container}>
              <Text style = {styles.dt}>
                  SEARCH
              </Text>
            </View>
        )
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      },
    
    dt: {
        backgroundColor: '#fff',
        fontFamily: 'cursive',
        textAlign: 'center',
        fontWeight:'bold',
        fontSize: 20,    
  }
});