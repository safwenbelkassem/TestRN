import { StyleSheet } from 'react-native'

export const stylesBottomSheet = StyleSheet.create({

    container: { height: "100%" },
    closeButtonContainer:{ height: "5%", flexDirection: 'row-reverse' },
    closeButton:{ width: 40, marginRight: 5 },
    carouselContainer:{ height: "40%", marginBottom: 50, marginTop: 30 },
    textContainer:{ alignItems: 'flex-start', height: "60%", width: "100%", paddingLeft: 30, paddingRight: 10 },
    text: {fontVariant: ["lining-nums"], marginBottom: 10 },
    containerdesc: { height: "20%", flexDirection: 'row' },
    imageContainer:{ width: "50%", height: "100%", padding: 20,paddingTop:5 },
    image:{ height: "3%", flexDirection: 'row-reverse' }
})