import React from 'react'
import { View, TouchableOpacity, Image, Text } from "react-native"
import { styles } from '../../Modules/Dashbord/StyleCard'
import { stylesBottomSheet } from '../../Common/BottomSheet/styleBottomSheet'
import LinearGradient from 'react-native-linear-gradient';

const DashboardItemCard = ({ shoes, action }) => {

    return (
        <TouchableOpacity onPress={() => action(shoes)} style={styles.containerImage} >
            <Image style={styles.imageThumbnail} source={{ uri: shoes.image }}></Image>
            {/* <View style={{
                position: "absolute", width: 120, height: 200, backgroundColor: 'yellow', right: 0, marginVertical: 20,
                marginHorizontal: 30,
            }}></View> */}
            <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 0, y: 1 }}   colors={[  "rgba(0,0,0,0)","rgba(0,0,0,0.4)","rgba(0,0,0,0.7)",]}

                style={{
                    position: "absolute", height: '30%', backgroundColor: 'yellow', right: 0, left: 0, marginVertical: 20,
                    marginHorizontal: 30, borderBottomEndRadius: 10, borderBottomStartRadius: 10
                }}>
                <Text style={[stylesBottomSheet.text, { fontWeight: "600", textAlign: 'left', marginLeft: 30,marginTop:5 ,color:"white"}]}>{shoes.category}</Text>
                <Text style={[stylesBottomSheet.text, { fontWeight: "600", textAlign: 'left', marginLeft: 30,marginTop:-5,color:"white"}]}>{shoes.name}</Text>
            
             <Text style={[stylesBottomSheet.text, { fontWeight: "400", textAlign: 'left', marginLeft: 30 ,marginTop:-5,color:"white"}]}>{shoes.price} $</Text>
            </LinearGradient>
        </TouchableOpacity>
    )
}
export default DashboardItemCard