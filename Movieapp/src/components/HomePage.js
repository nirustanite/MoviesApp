import React, { Component } from 'react';
import { View, ScrollView, Image, Text, Button, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { loadPopularMovies, getLatestTv, getPopularTV, getGenreList } from '../actions/movieactions'; // import all the actions from actions/movieactions
import { imageUrl } from '../../constants'; //import the image Url form constants
import Movie from './Movie'; // import the Movie Component
import Tv from './Tv'; // import The Tv COmponent

// The Main Page when the app is started
class HomePage extends Component {

   /* 
    ComponentDidMount - it's the function which is processed first when the app is rendered
    The functions definitions are written in actions/movieactions file
    The functionality are:
     1) Get Latest Tv from the API (getlatestTV())
     2) Get all the PopularMovies from the API (loadPopularMovies())
     3) Get all the PopularTV from the API (getPopularTV)
   */
  componentDidMount(){
     this.props.getLatestTv();
     this.props.loadPopularMovies();
     this.props.getPopularTV();
  }


  /* 
    Renders the following:
     -- A button for Search Page (when clicked on it, it goes to Search Page)
     -- The Latest TV with Heading, Image and Title
     -- Popular Movies (Find the implementation in Movie.js)
     -- Popular TV (Find the implementation in Tv.js)
     -- Provided ScrollView to scroll through the page
  */

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
           {this.props.latestTv !== [] && <View style={{flex:1, justifyContent:'center', alignItems:'center'}}> 
              <Text style={{color:'black', fontSize:30}}>Latest Tv</Text>
              <TouchableOpacity activeOpacity = { .5 } onPress={() => this.props.navigation.navigate('DetailPage',{id: `${this.props.latestTv.id}`, category: 'Tv'})}>
              <Image
                style={{width: 250, height: 250}}
                source={{uri: `${imageUrl}/${this.props.latestTv.backdrop_path}`}}
              /> 
              </TouchableOpacity>   
              <Text style={{color:'black', fontSize:30}} >{this.props.latestTv.name}</Text>
         </View>}
         <Movie />
         <Tv />
         </ScrollView>
        </>
     )
  }
}

/* Mapping the state inorder to use it as a props.
   The latest Tv is mapped. 
   The data is stored in reducer.
   Find it in reducers/latestTv
*/ 
const mapStateToProps = (state) => {
    return{
        latestTv: state.latestTv
    }
}

// connect the component with the actions and mapStateToProps
export default connect(mapStateToProps, {loadPopularMovies,getLatestTv,getPopularTV,getGenreList})(HomePage);

