import React from "react";
import { Text, View,StyleSheet, ScrollView } from "react-native";



function ElevatedCards(){
    return(
        <View>
            <Text style={styles.headingText}>Elevated Cards</Text>
        
        <ScrollView horizontal={true} style={styles.container}>
            <View style={[styles.card,styles.cardElevated,]}>
                <Text>Tap</Text>
            </View>
            <View style={[styles.card,styles.cardElevated,]}>
                <Text>me</Text>
            </View>
            <View style={[styles.card,styles.cardElevated,]}>
                <Text>to</Text>
            </View>
            <View style={[styles.card,styles.cardElevated,]}>
                <Text>Scroll</Text>
            </View>
            <View style={[styles.card,styles.cardElevated,]}>
                <Text>more...</Text>
            </View>
            <View style={[styles.card,styles.cardElevated,]}>
                <Text>😊</Text>
            </View>
        </ScrollView>
        
        </View>
    )
}

export default ElevatedCards


const styles = StyleSheet.create({
    container:{
        padding:8,
    },
    headingText :{
        fontSize: 25,
        fontWeight:'bold',
        paddingHorizontal: 10,
    },
    card:{
        width:100,
        height:100,
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:4,
        margin:8,
        color:'#000000'
    },
    cardElevated:{
        backgroundColor:'#CAD5E2',
        elevation:4,
        shadowOffset:{
            width:1,
            height:1,
        },
        shadowColor:'red',
        shadowOpacity:0.5,
    }
})