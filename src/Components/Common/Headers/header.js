
import React from 'react'
import { FlatList, View, Text } from "react-native"
export const HeaderWithTitle = (title) => {

    return (
        <View style={{
            flexDirection: 'row',
            shadowRadius: 0,
            height: 90,
            alignItems: 'center',
            backgroundColor: "#d9e3f0"
        }}>

            <View style={{
                flex: 3,
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                <Text
                    numberOfLines={2}
                    style={{
                        marginTop:30,
                        color: "#fff",
                        textAlign: 'center',
                        fontSize: 25
                    }}></Text>
            </View>

        </View>
    )
}
