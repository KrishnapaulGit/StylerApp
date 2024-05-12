import { View,Text,StyleSheet, Image } from "react-native";
import React from "react";

function FancyCard(){
    return(
        <View>
            <Text style={styles.headingText}> Trending Places</Text>
            <View style={[styles.card,styles.cardElevated]}>
            <Image
            source={{
                uri: 'data:image/jpeg;base64,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'
            }}
            style={styles.cardImage}
            />

            <View style={styles.cardBody}>
            <Text style={styles.cardTitle}>Paris </Text>
            <Text style={styles.cardLabel}>France </Text>
            <Text style={styles.cardDesc}>Paris[a] is the capital and most populous city of France. With an official estimated population of 2,102,650 residents as of 1 January 2023[2] in an area of more than 105 km2 (41 sq mi)</Text>
            </View>
                
            </View>
        </View>
    )
}

export default FancyCard

const styles = StyleSheet.create({
    headingText :{
        fontSize: 25,
        fontWeight:'bold',
        paddingHorizontal: 10,
    },
    card:{
        height:360,
        width:360,
        borderRadius:5,
        marginVertical:12,
        marginHorizontal:25,
        
    },
    cardElevated:{
        backgroundColor:'#FFFFFFF',
        elevation:3,
        shadowOffset:{
            width:1,
            height:1,
        }
    },
    cardImage:{
        height:180,
        width:360,
        marginBottom:8,
        borderTopLeftRadius:6,
        borderTopRightRadius:6,
    },
    cardBody:{
        flex:1,
        flexGrow:1,
        paddingHorizontal:12,
        alignItems:'center',

    },
    cardTitle:{
        color:'#000000',
        fontSize:25,
        fontWeight:'bold',
        marginBottom:6,
    },
    cardLabel:{
        color:'#000000',
        fontSize:22,
        marginBottom:4,


    },
    cardDesc:{
        color:'#751247',
        fontSize:15,
        marginBottom:6,


    }
})