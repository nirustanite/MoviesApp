import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text, SafeAreaView, View, TouchableOpacity, Image, Dimensions } from 'react-native';
import Carousel from 'react-native-snap-carousel'; // carousal for dispalying the images
import { withNavigation } from 'react-navigation'; // importing withNavigation to enable Navigation from this component
import { imageUrl } from '../../constants' //import the image Url form constants

// the width and height for the slider and images for the Carousal
const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');
const SLIDE_WIDTH = Math.round(viewportWidth / 1.8);
const ITEM_HORIZONTAL_MARGIN = 20;
const ITEM_WIDTH = SLIDE_WIDTH + ITEM_HORIZONTAL_MARGIN * 2;
const SLIDER_WIDTH = viewportWidth;

// TV Component renders the Carousal by using popular Tv data
class Tv extends Component{

      /* Function to render the tv using Carousal
         For each Item from the array, it renders
         -- Image
         -- Title
     */
    renderItem = ({item, index}) => {
        return (
            <>
                <View> 
                    <TouchableOpacity activeOpacity = { .5 } onPress={() => this.props.navigation.navigate('DetailPage',{id: `${item.id}`, category: 'Tv'})}>
                        <Image
                            style={{width: 250, height: 300}}
                            source={{uri: `${imageUrl}/${item.poster_path}`}}
                        /> 
                    </TouchableOpacity>   
                    {item.name && <Text style={{color:'black', justifyContent:'center', fontSize:30}}>{item.name}</Text>}
                </View>
            </>
        );
    }


     /* Render the actual component
       The Carousal is defined here
    */
    render(){
        return(
            <>
                <Text style={{color:'black',fontSize:40}}>Popular Tv</Text>
                {this.props.tv !== [] && 
                <SafeAreaView >
                    <Carousel
                    ref={(c) => { this._carousel = c; }}
                    data={this.props.tv.results}
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


/* Mapping the state inorder to use it as a props.
   The popular Tv is mapped. 
   The data is stored in reducer.
   Find it in reducers/popularTv
*/ 
const mapStateToProps = (state) => {
    return{
        tv: state.popularTv
    }
}

// Added withNavigation inorder to enable navigation to Tv Component
export default withNavigation(connect(mapStateToProps)(Tv));