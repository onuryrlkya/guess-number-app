import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Colors from '../../constants/colors'

export default function NumberContainer({children}) {
  return (
    <View style={styles.container}>
      <Text style={styles.numberText}>{children}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container : {
        borderWidth: 4,
        borderColor:Colors.accent500,
        padding: 24,
        borderRadius: 8,
        margin: 24,
        alignContent: 'center',
        alignItems: 'center',
    },
    numberText: {
        color: Colors.accent500,
        // fontWeight: 'bold',
        fontSize:40,
        fontFamily: 'open-sans-bold',

    }
})