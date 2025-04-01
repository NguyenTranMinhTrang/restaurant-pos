import { Minus, Plus, Trash2 } from "lucide-react-native"
import { Image, Text, TouchableOpacity, View } from "react-native"
import { COLORS, textStyles } from "~/constants/styleGlobal"
import { Button } from "../ui/button"
import { OrderIem } from "~/app/payment"
import { useState } from "react"

interface PaymentItemProps {
    item: OrderIem;
}
const PaymentItem = (props: PaymentItemProps) => {

    const { item } = props;

    const [ quantity, setQuantity ] = useState(1);

    const onIncreaseQuantity = () => {
        setQuantity(prev => prev + 1);
    }

    const onDecreaseQuantity = () => {
        if (quantity > 1) {
            setQuantity(prev => prev - 1);
        }
    }

    return (
        <View
            className="flex-row bg-white rounded-md p-4 mb-3 h-[110px]">
            <View className="flex flex-[0.35] items-center justify-center mr-3">
                <Image
                    source={{ uri: "https://images.unsplash.com/photo-1547592166-23ac45744acd?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80" }}
                    style={{ height: '100%', width: '100%' }}
                    className="h-full w-full rounded-md"
                    resizeMode="cover"
                />
            </View>

            <View className="flex-[0.65]">
                <View className="flex-row items-center justify-between">
                    <Text style={[ textStyles.body, textStyles.bold ]}>{item.name}</Text>
                    <TouchableOpacity>
                        <Trash2 color={COLORS.error} size={18} />
                    </TouchableOpacity>
                </View>
                <View className="flex-row items-center">
                    <View
                        className={`h-2 w-2 rounded-full my-1`}
                        style={{ backgroundColor: item.vegOrNonVeg.color }}
                    />
                    <Text style={textStyles.caption} className="ml-2">{item.vegOrNonVeg.label}</Text>
                </View>

                <View className="flex-row items-center justify-between mt-2">
                    <View className="flex-row items-center">
                        <Button
                            variant={'outline'}
                            size={"icon-sm"}
                            style={{ borderRadius: 15 }}
                            onPress={onIncreaseQuantity}>
                            <Plus color={COLORS.icon} size={16} />
                        </Button>

                        <Text style={[ textStyles.body ]} className="px-4"> {quantity} </Text>

                        <Button
                            variant={'outline'}
                            size={"icon-sm"}
                            style={{ borderRadius: 15 }}
                            onPress={onDecreaseQuantity}>
                            <Minus color={COLORS.icon} size={16} />
                        </Button>
                    </View>

                    <Text style={[ textStyles.body, { color: COLORS.primary } ]}>{item.price * quantity} $</Text>

                </View>

            </View>
        </View>
    )
}

export default PaymentItem;