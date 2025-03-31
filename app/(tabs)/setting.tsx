import React from "react";
import { Text, View } from "react-native";
import { COLORS, globalStyles } from "~/constants/styleGlobal";

const SettingTab = () => {
    return (
        <View style={[ globalStyles.full, globalStyles.center, { backgroundColor: COLORS.background } ]}>
            <Text>SettingTab</Text>
        </View>
    )
}

export default SettingTab;