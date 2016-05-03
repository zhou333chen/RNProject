/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

var MOCKED_MOVIEWS_DATA = [{title : '标题',
							year : '2015',
							posters: {
								thumbnail : 'http://i.imgur.com/UePbdph.jpg'
							}
						}];

class RNProject extends Component {
  render() {
  	var movie = MOCKED_MOVIEWS_DATA[0];
    return (
    	<View style = {styles.container}>
    		<Text>{movie.title}</Text>
    		<Text>{movie.year}</Text>
    		<Image source = {{uri : movie.posters.thumbnail}}/>
    	</View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});

AppRegistry.registerComponent('RNProject', () => RNProject);
