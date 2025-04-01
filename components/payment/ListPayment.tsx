import { ScrollView, Text, View } from "react-native"
import { textStyles } from "~/constants/styleGlobal"
import { useAppSelector } from "~/redux/hooks/hook"
import PaymentItem from "./PaymentItem";

const ListPayment = () => {
    const list = useAppSelector(state => state.order.orders);
    return (
        <View className="flex-1 mb-3">
            <Text style={[ textStyles.caption ]} className="font-bold mb-2">List Order</Text>
            <ScrollView showsVerticalScrollIndicator={false}>
                {
                    list.map((item, index) => {
                        return (
                            <PaymentItem
                                key={`${item.id}-${index}`}
                                item={item}
                            />
                        )
                    })
                }
            </ScrollView>
        </View>
    )
}

export default ListPayment;