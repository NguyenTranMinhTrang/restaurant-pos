import { Text, View } from "react-native"
import { COLORS, globalStyles, textStyles } from "~/constants/styleGlobal"
import { useAppSelector } from "~/redux/hooks/hook"

const PaymentCurrentCount = () => {
    const count = useAppSelector(state => state.order.orders.length);
    return (
        <View style={[ globalStyles.row, globalStyles.center ]}>
            <Text className="mr-3" style={textStyles.h3}>Table 4</Text>
            <View className="h-6 w-6 rounded-full bg-primary items-center justify-center">
                <Text style={{ color: COLORS.white }}>{count}</Text>
            </View>
        </View>
    )
}

export default PaymentCurrentCount;