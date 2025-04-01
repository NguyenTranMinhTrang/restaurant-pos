import { StyleSheet, Text, View } from "react-native"
import { COLORS, globalStyles, textStyles } from "~/constants/styleGlobal"
import { useAppSelector } from "~/redux/hooks/hook"

const CurrentTable = () => {
    const numberOfOrders = useAppSelector(state => state.order.orders.length);
    return (
        <View className="flex-row items-center">
            <Text style={textStyles.h3}>Table 4
                <Text style={[ textStyles.bodyLight, { fontSize: 20 } ]}> Floyd Miles</Text>
            </Text>

            <View style={[ styles.ball, globalStyles.center, globalStyles.ml1 ]} >
                <Text style={{ color: COLORS.white }}>{numberOfOrders}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    ball: {
        height: 25,
        width: 25,
        backgroundColor: COLORS.primary,
        borderRadius: 15,
    }
});

export default CurrentTable;
