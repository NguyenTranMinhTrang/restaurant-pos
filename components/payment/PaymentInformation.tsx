import { Text, View } from "react-native"
import { textStyles } from "~/constants/styleGlobal"
import { useAppSelector } from "~/redux/hooks/hook";

const PaymentInformation = () => {
    const orders = useAppSelector(state => state.order.orders);

    const totalAmount = orders.reduce((total, item) => {
        return total + (item.price * item.quantity)
    }, 0);

    const tax = totalAmount * 0.05;

    return (
        <View className="mb-3">
            <Text style={[ textStyles.caption ]} className="font-bold mb-2">Payment Information</Text>
            <View className="bg-white px-4 rounded-md">
                <View className="flex-row items-center justify-between py-3 border-b border-gray-200">
                    <Text style={textStyles.caption}>Subtotal</Text>
                    <Text>${totalAmount.toFixed(2)}</Text>
                </View>

                <View className="flex-row items-center justify-between py-3 border-b border-gray-200">
                    <Text style={textStyles.caption}>Tax 5%</Text>
                    <Text >${tax.toFixed(2)}</Text>
                </View>

                <View className="flex-row items-center justify-between py-3">
                    <Text style={textStyles.h3}>Total Amount</Text>
                    <Text style={textStyles.h3}>${(totalAmount + tax).toFixed(2)}</Text>
                </View>
            </View>
        </View>
    )
}

export default PaymentInformation;