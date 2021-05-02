
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#d9e3f0',
    },
    containerImage: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.00,
        elevation: 24,
        flexDirection: 'column-reverse',
        width:400
    },
    imageThumbnail: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 200,
        backgroundColor: 'white',
        borderRadius: 10,
        shadowColor: 'gray',
        marginVertical: 20,
        marginHorizontal: 30,


    },
});
