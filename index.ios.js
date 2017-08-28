/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
// 'use strict';
import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, TouchableOpacity, Dimensions } from 'react-native';
import YouTube from 'react-native-youtube';

// var YouTube = require('react-native-youtube');

class RCTYouTubeExample extends Component {
  constructor(props) {
    super(props);
    var{height,width} = Dimensions.get('window');

    this.state = {
      isReady: false,
      status: null,
      quality: null,
      error: null,
      isPlaying: true,
      time: 0,
      height: height
    }
  }

  loop(e) {
    this.setState({time: e.currentTime});
    if(e.currentTime > 46) {
      this.refs.youtubePlayer.seekTo(40);
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <YouTube
          ref="youtubePlayer"
          videoId="EO8MRaD63bk"
          play={this.state.isPlaying}
          hidden={false}
          controls={0}
          disablekb={1}
          modestbranding={true}
          playsInline={true}
          showinfo={false}
          onReady={(e)=>{this.setState({isReady: true}); this.refs.youtubePlayer.seekTo(40);}}
          onChangeState={(e)=>{this.setState({status: e.state})}}
          onChangeQuality={(e)=>{this.setState({quality: e.quality})}}
          onError={(e)=>{this.setState({error: e.error})}}
          onProgress={(e)=>{this.loop(e)}}
          width={this.state.height*16/9}
          heigth={500}
          style={{alignSelf: 'center', height: this.state.height, backgroundColor: 'black', marginVertical: 10}}
        />
        <Text style={styles.instructions}>height: {this.state.height}</Text>

      </View>
    );
  }
}

// <TouchableOpacity onPress={()=>{this.setState((s) => {return {isPlaying: !s.isPlaying};} )}}>
//   <Text style={[styles.welcome, {color: 'blue'}]}>{this.state.status == 'playing' ? 'Pause' : 'Play'}</Text>
// </TouchableOpacity>

//<Text style={styles.instructions}>Time: {this.state.time}</Text>

// <Text style={styles.instructions}>{this.state.isReady ? 'Player is ready.' : 'Player setting up...'}</Text>
// <Text style={styles.instructions}>Status: {this.state.status}</Text>
// <Text style={styles.instructions}>Quality: {this.state.quality}</Text>
// <Text style={styles.instructions}>{this.state.error ? 'Error: ' + this.state.error : ' '}</Text>
//<Text style={styles.instructions}>{this.state.error ? 'Error: ' + this.state.error : ' '}</Text>


var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('Feedeos', () => RCTYouTubeExample);
