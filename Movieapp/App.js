/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import SearchComponent from './src/components/SearchComponent'
import HomePage from './src/components/HomePage'
import {Provider} from 'react-redux'
import store from './store';

import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

 class App extends React.Component{
   render(){
       return (
         <Provider store={store}>
           <React.Fragment>
              <SearchComponent />
              <HomePage />
           </React.Fragment>
         </Provider>
       )
   }
  
};

const styles = StyleSheet.create({
  
});

export default App;
