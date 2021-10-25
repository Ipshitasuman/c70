import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import * as Permissions from 'expo-permissions';


export default class Tscreen extends React.Component{

    constructor(){
     super();
     this.state = {
         HCameraP : null,
         Scanned: false,
         SData : '',
         BS: 'normal',
         SbId : '',
         SsId : ''
     }
    }

    getCP = async(id)=>{
      const {status}= await Permissions.askAsync(Permissions.CAMERA);

      this.setState({
          /*status === "granted" is true when user has granted permission
          status === "granted" is false when user has not granted the permission
        */
          HCameraP : status === "granted",
          BS: id,
          Scanned: false
      });
    }

     handleBarCodeScanned = async({ type, data }) => {
      const {id} = this.state;

      if (id === "bookId") {
        this.setState({
          SbId: data,
          BS: "normal",
          scanned: true
        });
      } else if (id === "studentId") {
        this.setState({
          SsId: data,
          BS: "normal",
          scanned: true
        });
      }
        
        alert(`Bar code with type ${type} and data ${data} has been scanned!`);
      };

    render(){
        const HCameraP = this.state.HCameraP;
        const Scanned = this.state.Scanned;
        const BS = this.state.BS;
        const SData = this.state.SData;

        if(BS !== "normal" && HCameraP){
            return(
                <BarCodeScanner 
                onBarCodeScanned = {Scanned
                    ? undefined
                    : this.handleBarCodeScanned}

                style = {StyleSheet.absoluteFillObject}
             />  
        )
    }

    else if (BS === "normal") {
        return(
            <View style={styles.container}>
              <View>
                 <Image
                  source = {require("../assets/booklogo.jpg")}
                  style = {{width:200, height: 200}}/>
                  <Text 
                  style = {{textAlign: 'center', fontSize: 30, fontFamily: 'cursive'}}> 
                   Wirely </Text>
              </View>
                 <View style = {styles.iv}>
                     <TextInput 
                        style = {styles.ib}
                        placeholder = "Book Id"
                        value = {this.state.SbId} /> 
                     <TouchableOpacity 
                     style = {styles.sb}
                     onPress = {()=>{
                      this.getCP("BookId")
                     }
                     }>
                       <Text style = {styles.dt}>
                                Scan
                        </Text>
                     </TouchableOpacity>
                 </View>

                 <View style = {styles.iv}>
                     <TextInput 
                        style = {styles.ib}
                        placeholder = "Student Id" 
                        value = {this.state.SsId}/> 
                     <TouchableOpacity 
                     style = {styles.sb}
                     onPress = {()=>{
                      this.getCP("StudentId")
                     }
                     }>
                       <Text style = {styles.dt}>
                                Scan
                        </Text>
                     </TouchableOpacity>
                 </View>
            </View>
        );
    }
}}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      },
    
    sb: {
      backgroundColor: '#fff',
      padding: 10,
      margin : 10
    },

    dt: {
        backgroundColor: '#fff',
        fontFamily: 'cursive',
        textAlign: 'center',
        fontWeight:'bold',
        fontSize: 20,    
  },

    iv: {
      backgroundColor: 'blue',
      padding: 10,
      margin : 10
  },

    ib:{
      backgroundColor: 'purple',
      padding: 10,
      margin : 10 
  }

});