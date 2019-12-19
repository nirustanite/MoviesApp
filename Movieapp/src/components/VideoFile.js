import React, { Component } from "react";
import { View, StyleSheet } from "react-native";
import Video from 'react-native-video';
import { videoUrl } from '../../constants'; // the url of the Video

// The code for Playing Video
export default class VideoFile extends Component {
  render(){
    return(
      <View style={styles.container}>
        <Video source={{uri: `${videoUrl}`}}   
          ref={(ref) => {
              this.player = ref
          }}                                      
          onBuffer={this.onBuffer}                
          onError={this.videoError}               
        />
      </View> 
    );
  }}

// Styles for the video
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
