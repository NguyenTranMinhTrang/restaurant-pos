import React from "react";
import { Text, View } from "react-native";
import { COLORS, globalStyles } from "~/constants/styleGlobal";

const DeliveryTab = () => {
    return (
        <View style={[ globalStyles.full, globalStyles.center, { backgroundColor: COLORS.background } ]}>
            <Text>DeliveryTab</Text>
        </View>
    )
}

export default DeliveryTab;