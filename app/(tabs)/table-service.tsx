import React from "react";
import { Text, View } from "react-native";
import { COLORS, globalStyles } from "~/constants/styleGlobal";

const TableServiceTab = () => {
    return (
        <View style={[ globalStyles.full, globalStyles.center, { backgroundColor: COLORS.background } ]}>
            <Text>TableServiceTab</Text>
        </View>
    )
}

export default TableServiceTab;