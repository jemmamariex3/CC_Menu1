import React, {Component} from 'react'
import {Text, View, StyleSheet} from 'react-native'


export default class Cinthy extends Component {
    render(){

        return(
            <View>
                <Text style={styles.textStyle}>Cinthy</Text>
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
