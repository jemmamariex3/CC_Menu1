import React, {Component} from 'react'
import {Text, View, StyleSheet} from 'react-native'


export default class Work extends Component {

    render(){

        return(
            <View>
                <Text style={styles.textStyle}>Work</Text>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    textStyle:{
        fontSize: 20,
        textAlign:'center'
    }
})
