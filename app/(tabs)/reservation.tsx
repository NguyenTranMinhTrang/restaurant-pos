import React from "react";
import { Text, View } from "react-native";
import { COLORS, globalStyles } from "~/constants/styleGlobal";

const ReservationTab = () => {
    return (
        <View style={[ globalStyles.full, globalStyles.center, { backgroundColor: COLORS.background } ]}>
            <Text>ReservationTab</Text>
        </View>
    )
}

export default ReservationTab;