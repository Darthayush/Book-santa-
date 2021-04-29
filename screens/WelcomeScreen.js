import React, { Component } from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity,TextInput, Alert, Modal, KeyboardAvoidingView, ScrollView} from 'react-native';
import SantaAnimation from '../components/SantaClaus.js';
import db from '../config';
import firebase from 'firebase';

export default class WelcomeScreen extends Component {
constructor(){
  super()
  this.state={
    emailId:'',
    password:'',
    firstName:'',
    lastname:'',
    address:'',
    contact:'',
    confirmPassword:'',
    isModalVisible: 'false'
  }
}

userLogin=(emailId,password)=>{
  firebase.auth(signInWithEmailAndPassword(emailId,password))
.then(()=>{
  return Alert.alert("Succesfully logged In")
})
.catch((error)=>{
  var errorCode= error.code;
  var errorMessage= error.message;
  return Alert.alert(errormMessage)
})
}
userSignUp=(emailId,password)=>{
  firebase.auth.createUserWithEmailAndPassword(emailId,password)
.then(()=>{
  return Alert.alert("User Added Succesfully")
})
.catch(function(error){
  var errorCode= error.code;
  var errorMessage= error.message;
  return Alert.alert(errormMessage)
})
}

showModal=()=>{
  return(
    <Modal
    animationType="fade" transparent={true} visible={this.state.isModalVisible}>
      <View style={styles.modalcontainer}>
        <ScrollView style ={{width:'100%'}}>
            <KeyboardAvoidingView sytle = {styles.KeyboardAvoidingView}>
              <Text style={styles.modalTitle}> Registration</Text> 
                <TextInput 
                style={styles.formTextInput}
                maxLength={8}
                placeholder={"First name"}
                onChangeText={(text)=>{
                  this.setState({
                    firstName:text
                  })
                }}/>
                 <TextInput 
                style={styles.formTextInput}
                maxLength={8}
                placeholder={"Last name"}
                onChangeText={(text)=>{
                  this.setState({
                    LastName:text
                  })
                }}/>
                 <TextInput 
                style={styles.formTextInput}
                maxLength={10}
                placeholder={"Contact Number"}
                keyboardType={'numeric'}
                onChangeText={(text)=>{
                  this.setState({
                    contact:text
                  })
                }}/>
                 <TextInput 
                style={styles.formTextInput}
                multiline={true}
                placeholder={"Address"}
                onChangeText={(text)=>{
                  this.setState({
                    address:text
                  })
                }}/>
                 <TextInput 
                style={styles.formTextInput}
                placeholder={"Email Id"}
                keyboardType={'email-address'}
                onChangeText={(text)=>{
                  this.setState({
                    emailId:text
                  })
                }}/>
                 <TextInput 
                style={styles.formTextInput}
                placeholder={"Password"}
                secureTextEntry={true}
                onChangeText={(text)=>{
                  this.setState({
                   password:text
                  })
                }}/>
                 <TextInput 
                style={styles.formTextInput}
                placeholder={"Confirm Password"}
                secureTextEntry={true}
                onChangeText={(text)=>{
                  this.setState({
                    confirmPassword:text
                  })
                }}/>
                <View style={styles.modalBackButton}>
                  <TouchableOpacity
                  style={styles.signUpbutton}
                  onPress={()=>{
                    this.userSignUp(this.state.emailId,this.state.password,this.state.confirmPassword)}}>
                   <Text style={styles.signUpbuttonText}>Register</Text> 
                  
                  
                  <Text style={{color:'#ff5722'}}>cancel</Text>
        </TouchableOpacity>
                </View>
            </KeyboardAvoidingView>
        </ScrollView>
        </View>
    </Modal>
    
    )
}



render(){
  return(
    <View style={styles.container}>
      <View style={{justifyContent: 'center',alignItems: 'center'}}>

      </View>
        {
          this.showModal()
        }
      <View style={{justifyContent:'center', alignItems:'center'}}>
        <SantaAnimation/>
        <Text style={styles.title}>Book Santa</Text>
      </View>
      <View>
          <TextInput
          style={styles.loginBox}
          placeholder="abc@example.com"
          keyboardType ='email-address'
          onChangeText={(text)=>{
            this.setState({
              emailId: text
            })
          }}
        />
        <TextInput
        style={styles.loginBox}
        secureTextEntry = {true}
        placeholder="enter Password"
        onChangeText={(text)=>{
          this.setState({
            password: text
          })
        }}
      />
      <TouchableOpacity
         style={[styles.button,{marginBottom:20, marginTop:20}]}
         onPress = {()=>{
           this.userLogin(this.state.emailId, this.state.password)
         }}
         >
         <Text style={styles.buttonText}>Login</Text>
       </TouchableOpacity>

       <TouchableOpacity
         style={styles.button}
         onPress={()=>this.setState({ isModalVisible:true})}
         >
         <Text style={styles.buttonText}>SignUp</Text>
       </TouchableOpacity>
    </View>
  </View>
  )
}
}

const styles = StyleSheet.create({
  container:{
   flex:1,
   backgroundColor:'#F8BE85',
   alignItems: 'center',
   justifyContent: 'center'
 },
 profileContainer:{
   flex:1,
   justifyContent:'center',
   alignItems:'center',
 },
 title :{
   fontSize:65,
   fontWeight:'300',
   paddingBottom:30,
   color : '#ff3d00'
 },
 loginBox:{
   width: 300,
   height: 40,
   borderBottomWidth: 1.5,
   borderColor : '#ff8a65',
   fontSize: 20,
   margin:10,
   paddingLeft:10
 },
 KeyboardAvoidingView:{
   flex:1,
   justifyContent:'center',
   alignItems:'center'
 },
 modalTitle :{
   justifyContent:'center',
   alignSelf:'center',
   fontSize:30,
   color:'#ff5722',
   margin:50
 },
 modalContainer:{
   flex:1,
   borderRadius:20,
   justifyContent:'center',
   alignItems:'center',
   backgroundColor:"#ffff",
   marginRight:30,
   marginLeft : 30,
   marginTop:80,
   marginBottom:80,
 },
 formTextInput:{
   width:"75%",
   height:35,
   alignSelf:'center',
   borderColor:'#ffab91',
   borderRadius:10,
   borderWidth:1,
   marginTop:20,
   padding:10
 },
 registerButton:{
   width:200,
   height:40,
   alignItems:'center',
   justifyContent:'center',
   borderWidth:1,
   borderRadius:10,
   marginTop:30
 },
 registerButtonText:{
   color:'#ff5722',
   fontSize:15,
   fontWeight:'bold'
 },
 cancelButton:{
   width:200,
   height:30,
   justifyContent:'center',
   alignItems:'center',
   marginTop:5,
 },

 button:{
   width:300,
   height:50,
   justifyContent:'center',
   alignItems:'center',
   borderRadius:25,
   backgroundColor:"#ff9800",
   shadowColor: "#000",
   shadowOffset: {
      width: 0,
      height: 8,
   },
   shadowOpacity: 0.30,
   shadowRadius: 10.32,
   elevation: 16,
   padding: 10
 },
 buttonText:{
   color:'#ffff',
   fontWeight:'200',
   fontSize:20
 }
})