/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Dimensions,
    TouchableWithoutFeedback
} from 'react-native';

export default class Home extends Component {
    render() {
        return (
            <View style={styles.container}>

              <TouchableWithoutFeedback onPress={() => this.props.navigation.navigate('Services')}>
                <View style={[styles.boxContainer,styles.box1]}>
                  <Text style ={styles.text}>Services</Text>
                </View>
              </TouchableWithoutFeedback>

              <TouchableWithoutFeedback onPress={() => this.props.navigation.navigate('Work')}>
                <View style={[styles.boxContainer,styles.box2]}>
                  <Text style ={styles.text}>Work</Text>
                </View>
              </TouchableWithoutFeedback>

              <TouchableWithoutFeedback onPress={() => this.props.navigation.navigate('Multimedia')}>
                <View style={[styles.boxContainer,styles.box3]}>
                  <Text style ={styles.text}>Multimedia</Text>
                </View>
              </TouchableWithoutFeedback>

              <TouchableWithoutFeedback onPress={() => this.props.navigation.navigate('Cinthy')}>
                <View style = {[styles.boxContainer,styles.box4]}>
                  <Text style ={styles.text}>Cinthy</Text>
                </View>
              </TouchableWithoutFeedback>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    boxContainer:{
        flex:1,
        width: Dimensions.get("window").width,
        height: Dimensions.get("window").height,
        justifyContent: 'center',
        alignItems: 'center',
    },
    box1: {
        backgroundColor: '#f6ba61',
    },
    box2: {

        backgroundColor: '#0eade8',
    },
    box3: {

        backgroundColor: '#cd5169',
    },
    box4: {

        backgroundColor: '#84cdc9',
    },
    text:{
        color:"white",
        fontWeight:"bold",
        fontSize:30,
    }
});
