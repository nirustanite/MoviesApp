import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Text, SafeAreaView,View, TouchableOpacity, Image, Dimensions} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import { withNavigation } from 'react-navigation';


const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');
const SLIDE_WIDTH = Math.round(viewportWidth / 1.8);
const ITEM_HORIZONTAL_MARGIN = 20;
const ITEM_WIDTH = SLIDE_WIDTH + ITEM_HORIZONTAL_MARGIN * 2;
const SLIDER_WIDTH = viewportWidth;


class Movie extends Component{


    renderItem = ({item, index}) => {
        return (
            <>
              <View> 
              <TouchableOpacity activeOpacity = { .5 } onPress={() => this.props.navigation.navigate('DetailPage',{id: `${item.id}`, category: 'Movie'})}>
                <Image
                    style={{width: 250, height: 300}}
                    source={{uri: `http://image.tmdb.org/t/p/w342/${item.poster_path}`}}
                /> 
                </TouchableOpacity>   
                {item.title &&    
                <Text style={{color:'black', justifyContent:'center', fontSize:30}}>{item.title}</Text>}
            </View>
            </>
        );
    }

    render(){
        console.log(this.props.navigation)
        return(
            <>
             <Text style={{color:'black',fontSize:40}}>Popular movies</Text>
             {this.props.movies !== [] && <SafeAreaView >
                 <Carousel
                 ref={(c) => { this._carousel = c; }}
                 data={this.props.movies.results}
                 renderItem={this.renderItem}
                 sliderWidth={SLIDER_WIDTH}
                 itemWidth={ITEM_WIDTH}
                 activeSlideAlignment={'start'}
                 inactiveSlideScale={1}
                 inactiveSlideOpacity={1}
                 />
             </SafeAreaView> }
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        movies: state.popularMovies,
    }
}

export default withNavigation(connect(mapStateToProps)(Movie));