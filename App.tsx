import React from "react";

import {
  SafeAreaView,
  View,
  Text,
  ScrollView
} from 'react-native'
import FlatCards from "./components/FlatCards";
import ElevatedCards from "./components/ElevatedCards";
import FancyCard from "./components/FancyCard";
import ActionCard from "./components/ActionCard";
import ContactList from "./components/ContactList";


function App(){
  return(
    <SafeAreaView>
      <ScrollView>
      <View>
      <FlatCards/>
      <ElevatedCards/>
      <FancyCard/>
      <FancyCard/>
      <FancyCard/>
      <ActionCard/>
      <ContactList/>
      </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default App

