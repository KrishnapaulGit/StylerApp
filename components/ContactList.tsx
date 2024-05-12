import React from "react";
import { View,Text, StyleSheet, ScrollView, Image } from "react-native";


function ContactList(){
    const contacts = [
        {
            uid:1,
            name:'Arijit Mondal',
            status:'Instructor and Founder of Codademy',
            imageUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJ3iCboKnT-YUYXRVyj4owpKoPazvoce-Faw&s'
        },
        {
            uid:2,
            name:'Sarabinda Roy',
            status:'Instructor and Founder of Codademy',
            imageUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJ3iCboKnT-YUYXRVyj4owpKoPazvoce-Faw&s'
        },
        {
            uid:3,
            name:'Arindam Pakhira',
            status:'Instructor at Codademy',
            imageUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJ3iCboKnT-YUYXRVyj4owpKoPazvoce-Faw&s'
        },
        {
            uid:4,
            name:'Krishna Paul',
            status:'Instructor and Founder of Codademy',
            imageUrl:'https://avatars.githubusercontent.com/u/89384077?v=4'
        },
        
    ];
    return(
        <View>
            <Text style={styles.headingText}>Contact List</Text>
            <ScrollView
            style={styles.container}
            scrollEnabled={false}
            >
                {contacts.map(({uid,name,status,imageUrl})=>(
                    <View key={uid} style = {styles.userCard}>
                    <Image 
                    source={{
                        uri:imageUrl
                    }}
                    style={styles.userImage}
                    />
                    <View>
                    <Text style={styles.userName}>{name}</Text>
                    <Text style={styles.userStatus}>{status}</Text>
                    
                    </View>
                   </View>
                ))}

            </ScrollView>
        </View>
    )
}

export default ContactList


const styles = StyleSheet.create({
    headingText :{
        fontSize: 25,
        fontWeight:'bold',
        paddingHorizontal: 10,
    },
    container:{
        
        paddingTop:10,
    },
    userCard:{
        flex:1,
        flexDirection:'row',
        alignItems:'center',
        backgroundColor:'#457897',
        marginBottom:3,
        marginLeft:16,
        marginRight:16,
        padding:8,
        borderRadius:14,


    },
    userImage:{
        width:100,
        height:100,
        borderRadius:100/2,
        marginRight:14,
    },
    userName:{
        fontSize:20,
        fontWeight:'700',
        color:'#fff'
    },
    userStatus:{
        fontSize:14,
        fontWeight:'500'
    },
})