import React from "react";
import { Text, View } from "react-native";
import { COLORS, globalStyles } from "~/constants/styleGlobal";

const MenuTab = () => {
    return (
        <View style={[ globalStyles.full, globalStyles.center, { backgroundColor: COLORS.background } ]}>
            <Text>MenuTab</Text>
        </View>
    )
}

export default MenuTab;