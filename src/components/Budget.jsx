
import DropdownButton from 'react-bootstrap/DropdownButton'
import React, { Component } from 'react'
import SplitButton from 'react-bootstrap/SplitButton'
import Dropdown from 'react-bootstrap/Dropdown'
import {Link} from "react-router-dom"
import { View, TextInput,Text, ScrollView,Image,Button, Animated,TouchableOpacity, Keyboard, KeyboardAvoidingView,Platform } from 'react-native';
import styles, { IMAGE_HEIGHT, IMAGE_HEIGHT_SMALL } from './styles';
import logo from './images/Mobee.png'


const params = new URLSearchParams(location.search);


class Budget extends Component {

 constructor(props)
 {
 super(props);
  this.imageHeight = new Animated.Value(IMAGE_HEIGHT);
 }

 state = {
    selectedOption: null,
  }

    handleChange = (selectedOption) => {
    this.setState({ selectedOption });
    console.log(`Option selected:`, selectedOption);
  }

componentWillMount () {
   if (Platform.OS=='ios'){
    this.keyboardWillShowSub = Keyboard.addListener('keyboardWillShow', this.keyboardWillShow);
    this.keyboardWillHideSub = Keyboard.addListener('keyboardWillHide', this.keyboardWillHide);
   }else{
    this.keyboardWillShowSub = Keyboard.addListener('keyboardDidShow', this.keyboardDidShow);
    this.keyboardWillHideSub = Keyboard.addListener('keyboardDidHide', this.keyboardDidHide);
   }

  }

  componentWillUnmount() {
    this.keyboardWillShowSub.remove();
    this.keyboardWillHideSub.remove();
  }

  keyboardWillShow = (event) => {
    Animated.timing(this.imageHeight, {
      duration: event.duration,
      toValue: IMAGE_HEIGHT_SMALL,
    }).start();
  };

  keyboardWillHide = (event) => {
    Animated.timing(this.imageHeight, {
      duration: event.duration,
      toValue: IMAGE_HEIGHT,
    }).start();
  };


  keyboardDidShow = (event) => {
    Animated.timing(this.imageHeight, {
      toValue: IMAGE_HEIGHT_SMALL,
    }).start();
  };

  keyboardDidHide = (event) => {
    Animated.timing(this.imageHeight, {
      toValue: IMAGE_HEIGHT,
    }).start();
  };

getParams()
{
  return params;
}


componentDidMount(){
  console.log(this.getParams().toString());
}

render (){
  const { selectedOption } = this.state;
  return(


     <View style={{flex:1,backgroundColor:'#4c69a5',alignItems:'center'}}>
       
       <Animated.Image source={logo} style={[styles.logo, { height: this.imageHeight }]} />
       <ScrollView style={{flex:1}}>
      
         <KeyboardAvoidingView
        style={styles.container}
        behavior="padding"
      >
      <TextInput
            placeholder="Name"
            style={styles.input}
          />

          <TextInput
            placeholder="Surname"
            style={styles.input}
          />
          <TextInput
            placeholder="Email"
            style={styles.input}
          />


          <TextInput
            placeholder="Password"
            style={styles.input}
          />
          <TextInput
            placeholder="Confirm Password"
            style={styles.input}
          />
          
      </KeyboardAvoidingView>
      </ScrollView>
      <View>
      <TouchableOpacity style={styles.register}><Text>Done</Text></TouchableOpacity>
      </View>
      </View>

	);
}
};



export default Budget;
