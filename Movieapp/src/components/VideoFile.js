import React, {Component} from "react";
import {Text,View,StyleSheet} from "react-native";
import Video from 'react-native-video';

export default class VideoFile extends Component {
  render(){
    return(
      <View style={styles.container}>

      <Video source={{uri: `https://rawgit.com/mediaelement/mediaelement-files/master/big_buck_bunny.mp4​`}}   
          ref={(ref) => {
              this.player = ref
          }}                                      
          onBuffer={this.onBuffer}                
          onError={this.videoError}               
        />
      </View> 
    );
  }}


const styles = StyleSheet.create({
  container:{ flex: 1, justifyContent: "center"},
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
});
