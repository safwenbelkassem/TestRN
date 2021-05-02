import React, { useRef, useState, useCallback, useEffect } from 'react'
import { View, TouchableOpacity, Text } from "react-native"
import BottomSheet from '@gorhom/bottom-sheet';
import BottomSheetCloseContent from './BottomSheetCloseContent'
import BottomSheetOpenContent from './BottomSheetOpenContent'

const BottomSheetContent = ({ bottomSheetState, item, closeBottomSheet }) => {
    const [indexBottomSheet, setindexBottomSheet] = useState(0)
    const bottomSheetRef = useRef();
    var snapPoints = ['23%', '90%']

    const handleSheetChanges = useCallback((index: number) => {
        setindexBottomSheet(index)
    }, []);

    useEffect(() => {
        if (bottomSheetState) {
            bottomSheetRef.current.collapse()
        } else {
            bottomSheetRef.current.close()
        }
    }, [bottomSheetState, item])

   
    return (
        <BottomSheet
            ref={bottomSheetRef}
            index={1}
            snapPoints={snapPoints}
            onChange={handleSheetChanges}
        >
            <View >
                {indexBottomSheet == 1 ?
                    <>
                          <BottomSheetOpenContent closeAction={closeBottomSheet} item={item}/>
                    </>
                    : <>
                        <BottomSheetCloseContent closeAction={closeBottomSheet} item={item}/>
                    </>}


            </View>
        </BottomSheet>
    )
}
export default BottomSheetContent