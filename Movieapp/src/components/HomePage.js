import React, { Component } from 'react';
import { View, ScrollView, Image, StyleSheet, Dimensions,Text,SafeAreaView } from 'react-native';
import {connect} from 'react-redux';
import {loadPopularMovies,getLatestMovie} from '../actions/movieactions';
import Carousel from 'react-native-snap-carousel';


class HomePage extends Component {

  componentDidMount(){
     this.props.getLatestMovie()
     this.props.loadPopularMovies();
  }

  renderItem = ({item, index}) => {
      console.log("images",item.poster_path)
    return (
        <>
          <View> 
             
            <Image
                style={{width: 500, height: 300}}
                source={{uri: `http://image.tmdb.org/t/p/w342/${item.poster_path}`}}
            />       
            <Text style={{color:'black', justifyContent:'center', fontSize:30}} >{item.title}</Text>
        </View>
        </>
    );
}

  render() {
     return(
        <>
           {this.props.latestMovie && <View style={{flex:1, justifyContent:'center',alignItems:'center'}}> 
              <Image
                style={{width: 300, height: 250}}
                source={{uri: `http://image.tmdb.org/t/p/w342/${this.props.latestMovie.backdrop_path}`}}
              />       
              <Text style={{color:'black', fontSize:30}} >{this.props.latestMovie.title}</Text>
            </View>}
            <Text style={{color:'black',fontSize:40}}>Popular movies</Text>
            {this.props.movies && <SafeAreaView >
                <Carousel
                ref={(c) => { this._carousel = c; }}
                data={this.props.movies.results}
                renderItem={this.renderItem}
                sliderWidth={500}
                itemWidth={500}
                />
            </SafeAreaView> }
            <Text style={{color:'black',fontSize:40}}>Popular in TV</Text>
        </>
        
     )
  }
}

const mapStateToProps = (state) => {
    return{
        movies: state.popularMovies,
        latestMovie: state.latestMovie
    }
}

export default connect(mapStateToProps, {loadPopularMovies,getLatestMovie})(HomePage);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      },
});