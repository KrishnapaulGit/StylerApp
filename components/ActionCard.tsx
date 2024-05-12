import React from "react";
import { Image, Linking, StyleSheet, Text, Touchable, TouchableOpacity, View } from "react-native";

function ActionCard(){
    function openWebsite(websiteLink:string){
        Linking.openURL(websiteLink)
    }
    return(
        <View>
            <Text style={styles.headingText}>Blog Card</Text>
            <View style={[styles.card,styles.elevatedCard]}>
                <View style={styles.headingContainer}>
                    <Text style={styles.headerText}>
                        Best Way to Learn Code in 2024
                    </Text>

                </View>
                <Image
                source={
                    {
                        uri:'https://blog.javascripttoday.com/images/post/codecademy_hu77c7bcb849c74f1a120252772783e9d5_158735_1000x0_resize_q90_h2_box_3.webp'
                    }
                }
                style={styles.cardImage}
                >

                </Image>

                <View style={styles.bodyContainer}>
                <Text numberOfLines={4}>
                I remember when I first started learning how to program, I would jump from topic to topic: Okay, I’ve learned HTML. Maybe I should jump into C and disassemble some programs next, and then work my way back to JavaScript.
                </Text>
                </View>
                
                <View style={styles.footerContainer}>
                <TouchableOpacity
                onPress={() =>openWebsite('https://blog.javascripttoday.com/blog/the-best-way-to-learn-how-to-code/')}
                >
                <Text style={styles.socialLinks}>Read More</Text>
                </TouchableOpacity>
                <TouchableOpacity
                onPress={() =>openWebsite('https://www.instagram.com/javascripttoday/')}
                >
                <Text style={styles.socialLinks}>Follow Me</Text>
                </TouchableOpacity>
                </View>
                
            </View>
        </View>
    )
}

export default ActionCard

const styles = StyleSheet.create({
    headingText :{
        fontSize: 25,
        fontWeight:'bold',
        paddingHorizontal: 10,
    },
    card:{
        width:350,
        height:400,
        borderRadius:6,
        marginVertical:12,
        marginHorizontal:25,
    },
    elevatedCard:{
        backgroundColor:'#E14578',
        elevation:3,
        shadowOffset:{
            width:1,
            height:1,
        },
        shadowColor:'#333',
        shadowOpacity:0.5,
    },
    headingContainer:{
        height:40,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
    },
    headerText:{
        color:'#fff',
        fontSize:16,
        fontWeight:'bold',
    },
    cardImage:{
        height:220,
    },
    bodyContainer:{
        padding:10,
    },
    footerContainer:{
        padding:8,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-evenly'
    },
    socialLinks:{
        fontSize:14,
        color:'#000',
        backgroundColor:'#fff',
        paddingHorizontal:20,
        paddingVertical:6,
    }
})