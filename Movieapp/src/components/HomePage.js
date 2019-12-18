import React, { Component } from 'react';
import { View, ScrollView, Image, StyleSheet, Dimensions,Text,SafeAreaView, Button, TouchableOpacity } from 'react-native';
import {connect} from 'react-redux';
import {loadPopularMovies,getLatestMovie,getPopularTV} from '../actions/movieactions';
import Movie from './Movie';
import Tv from './Tv';
import SearchComponent from './SearchComponent';


class HomePage extends Component {

  componentDidMount(){
     this.props.getLatestMovie();
     this.props.loadPopularMovies();
     this.props.getPopularTV();
  }

  render() {
     return(
        <>

         <Button
             title="Search Movies"
             onPress={() =>{
                this.props.navigation.navigate('SearchComponent')
             }}
            />
         <ScrollView>
           {this.props.latestMovie !== [] && <View style={{flex:1, justifyContent:'center', alignItems:'center'}}> 
              <Text style={{color:'black', fontSize:30}}>Latest Tv</Text>
              <Image
                style={{width: 250, height: 250}}
                source={{uri: `http://image.tmdb.org/t/p/w342/${this.props.latestMovie.backdrop_path}`}}
              />       
              <Text style={{color:'black', fontSize:30}} >{this.props.latestMovie.name}</Text>
            </View>}
            <Movie />
            <Tv />
            </ScrollView>
           
        </>
        
     )
  }
}

const mapStateToProps = (state) => {
    return{
        latestMovie: state.latestMovie
    }
}

export default connect(mapStateToProps, {loadPopularMovies,getLatestMovie,getPopularTV})(HomePage);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      },
});