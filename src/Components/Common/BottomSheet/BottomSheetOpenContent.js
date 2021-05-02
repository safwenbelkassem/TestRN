import React, { useRef, useState, useCallback, useEffect } from 'react'
import { View, TouchableOpacity, Text, Image, Dimensions } from "react-native"
import Carousel from 'react-native-snap-carousel';
import { stylesBottomSheet } from './styleBottomSheet'

const { width, height } = Dimensions.get('window');

export default BottomSheetOpenContent = ({ item, closeAction }) => {

    _renderItem = ({ item, index }) => {
        return (
            <Image style={{ flex: 1, resizeMode: "cover", borderRadius: 10 }} source={{ uri: item }}></Image>
        );
    }

    return (
        <View style={stylesBottomSheet.container}>
            <View style={stylesBottomSheet.closeButtonContainer}>
                <TouchableOpacity onPress={closeAction} style={stylesBottomSheet.closeButton}>
                    <Image style={{ flex: 1, resizeMode: "cover" }} source={{ uri: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAV1BMVEX///8jHyAAAAAJAAALAAMNBAdoZmdiYGFmZGRta2sFAABpZ2hwbm8YExRbWFlhXl+dnJweGhsTDQ/T09O0s7M2MzNMSUqHhYbFxMWWlJQXEhNWVFRzcnIz5JTBAAAEQklEQVR4nO2d63aqMBCFBUVEpFatWtu+/3MeKeUUJbsEGEgya3+/XbMyzhWSDIsFIYQQQgghhBBCCCGEEEIIIYQQQgghhBBCCCGEEEIIEeR026X59X0i6e/XLN3dThNJt+F0iZOPojjG57cJpL+d42NRfCTxxZmOr3ERVRzijbj0dXz4kV7Er+LSrXiNo19WL8LSX1YN6W5UPDUVjKJkLyp9nzxIj1046qWIplPxScGouAgKt+TJhKWKn2LCP5Nn4Q6MeGstQs6KzxYsZd+EZNuzK1qriJJURPSmrWD0sRMR3YfUoGGUSGRUgwXvgSjz5/UhM2kooeKLScGoyATW3I/r0bSQ8Y5qctE7x6vIqvvw3sqlIioCBaN4qt73D84H81pGdTcPnUyDw1ls3fa8ASOOsWIKFIziKVr7TtZoOcnQNhy5aLRai67cGnPWG27FFMqTbuvHL2lQLKIYlG7qe2Eszt8q9nfUDVTQmQVL2i1yvay+KuKolmvoB4EdtZ9rwSzq0kUrcP7rk27SJVJw/n60xR79+6vcWkYGFXQagzVYRdsqlvuZZH6Bjrq0iyGvXbQCJvqlTUbN/Vfwj2JtEYuZ7y5aAZN9Z+nHddB5mXhkPTAWcQzKv0UfCY7FvxwVlwmPYrBmSF2EMSi+SSACLhrIHpuQLFgCkwYoGrBMDHgymQmYNpamd4E7qKBnWbQJdLtVW0WsoKcuWgFTR8tR8y1S0L5hdwJM/9tHK+6QgktHL53swbHY3Fv5gr/yOAZr4KNQo/RDS/ubRZvA5f93wGBjsAbWuR9H/YIxGIQFS2DR+FYx6BisgUVjmy8ytN8RiotWwFg8ns37jqDv8RjoqGBPDrfn3gLTDVAwmCTzC+w7jQrOf9RCANiYtdkGFoM1sLC3FAzQRSssHTW0LNoEFvcHBYOMwZqs21FDtmBJp4r+Pw920eGoYbtoxRfqQ0u2ChS8OyrqRO9dalDNNgadD3NzlmsC1NtQfRyqz6Xq66FNTxN0LKrvS9U/W6h/PlT/jN/rPY1hf9F71L9rU/++dMg776Dqovp9C/V7T2vt+4fde8CwWw3DUdXv46s/iwELvZbzNLhMKDkTpf5cm10M1sBY9PdsIj5fao4tfATa04yq/oyw+nPe8MaFlrP6Q+9bYEf1LBbxRUsld2bU33tSf3dN/f3D8XdIPXdU9feAZe5ye9zd4KkK/ZaGJyo4LhqCMxWgJKczFaQsWOLlXAzZ2SYwZblzVPXzabBbyc8YctKG658TpX7Wl/55bWjm3tiI8Wfm3nrmuYnzvwrfzzz7cv6aaJp9OeH8UgezL00zaKWeAwyl38EMWv1zhPXPgm7N85Z9VH1yVCfzvPXPZH+cqy9frjyYq199G6GY+NsIhctvIyzK71tk+/WE37fI95nT71sQQgghhBBCCCGEEEIIIYQQQgghhBBCCCGEEEIIIYQo5B8vlDCBniO5qwAAAABJRU5ErkJggg==" }}></Image>
                </TouchableOpacity>
            </View>
            <View >
                <View style={stylesBottomSheet.carouselContainer}>
                    <Carousel
                        ref={(c) => { this._carousel = c; }}
                        data={item.images}
                        renderItem={this._renderItem}
                        sliderWidth={width}
                        itemWidth={300}

                    />
                </View>
                <View style={stylesBottomSheet.textContainer}>
                    <Text style={[stylesBottomSheet.text, { fontWeight: "900" }]}>{item.name}</Text>
                    <Text style={[stylesBottomSheet.text, { fontWeight: "400" }]}> {item.price}</Text>
                    <Text style={[stylesBottomSheet.text, { fontWeight: "400" }]}> {item.category}</Text>
                    <Text style={[stylesBottomSheet.text, { fontWeight: "400" }]}>
                        Le lorem ipsum est, en imprimerie, une suite de mots sans
                        signification utilisée à titre provisoire pour calibrer
                        une mise en page, le texte définitif venant remplacer
                        le faux-texte dès qu'il est prêt ou que la mise en page est achevée.
                        Généralement, on utilise un texte en faux latin,
                        le Lorem ipsum ou Lipsum.
                           </Text>
                </View>
            </View>
        </View>
    )
}
