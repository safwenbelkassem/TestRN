import React, { useState } from 'react';

import { FlatList, View, TouchableOpacity, Text, SafeAreaView, Image } from "react-native"
import BottomSheetContent from '../../Common/BottomSheet/BottomSheetContent';
import DashboardItemCard from "../../Common/Cards/DashboardItemCard"
import { styles } from './StyleCard'
import { HeaderWithTitle } from "../../Common/Headers/header"




const shoes = require('../../../utils/shoes.json')
const title = "Dashbord"

const DashbordScreen = ({ navigation, route }) => {
    const [bottomSheetState, setBottomSheetState] = useState(false)
    const [selectedItem, setItem] = useState(false)
   
    setSelectedItem = (item) => {
        setItem(item)
        if (item) setBottomSheetState(true)
        
    }
    closeBottomSheet = () =>{
        setBottomSheetState(!bottomSheetState)
    }
    return (
        <>
            { HeaderWithTitle(title)}
            <SafeAreaView style={styles.container}>
                <FlatList
                    data={shoes.products}
                    renderItem={({ item }) => (
                        <DashboardItemCard shoes={item} action={() => setSelectedItem(item)} />
                    )}
                    keyExtractor={(item, index) => index}
                />
            </SafeAreaView>
            <BottomSheetContent bottomSheetState={bottomSheetState} closeBottomSheet={()=>closeBottomSheet()} item={selectedItem}  />
        </>
    )
}
export default DashbordScreen