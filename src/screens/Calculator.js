import React, { Component } from 'react'
import { 
    StyleSheet, View
 } from 'react-native'
 import Display from '../components/Display'

 export default class Calculator extends Component {

    state = {}

    render() {
        return (
            <View>
                <Display/>
            </View>
        )
    }
 }

const styles = StyleSheet.create({
     
})