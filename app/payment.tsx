import { useRouter } from "expo-router"
import { ArrowLeft, Banknote, ChevronDown, CreditCard, EllipsisVertical, Home, Minus, Plus, QrCode, Share2, ShoppingBag, Trash2, Truck } from "lucide-react-native"
import { Image, SafeAreaView, ScrollView, Text, TouchableOpacity, View } from "react-native"
import { Button } from "~/components/ui/button"
import { COLORS, globalStyles, textStyles } from "~/constants/styleGlobal"
import order from "../data/order.json"
import PaymentItem from "~/components/payment/PaymentItem"
import ButtonIcon from "~/components/button/ButtonIcon"
import ButtonHeader from "~/components/button/ButtonHeader"

export interface OrderIem {
    id: number,
    name: string,
    price: number,
    quantity: number,
    img: string,
    vegOrNonVeg: {
        label: string,
        color: string
    }
}

const Payment = () => {
    const router = useRouter();

    const onBack = () => {
        router.back();
    }

    const renderHeader = () => {
        return (
            <View style={[ globalStyles.rowSpaceBetween, globalStyles.mb2 ]}>
                <ButtonHeader
                    icon={<ArrowLeft color={COLORS.icon} size={18} />}
                    onPress={onBack}
                />

                <Button
                    variant={"outline"}
                    size={"lg"}
                    style={{ borderRadius: 25, backgroundColor: COLORS.white }}>
                    <View style={[ globalStyles.row, globalStyles.center ]}>
                        <Text className="mr-3" style={textStyles.h3}>Table 4</Text>
                        <View className="h-6 w-6 rounded-full bg-primary items-center justify-center">
                            <Text style={{ color: COLORS.white }}>5</Text>
                        </View>
                    </View>
                </Button>

                <ButtonHeader
                    icon={<EllipsisVertical color={COLORS.icon} size={18} />}
                />
            </View>
        )
    }

    const renderListOrder = () => {
        return (
            <View className="flex-1 mb-3">
                <Text style={[ textStyles.caption ]} className="font-bold mb-2">List Order</Text>
                <ScrollView showsVerticalScrollIndicator={false}>
                    {
                        order.map((item, index) => {
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

    const renderOptions = () => {
        return (
            <View className="mb-3">
                <Text style={[ textStyles.caption ]} className="font-bold mb-2">Method</Text>
                <View className="flex-row justify-between">
                    <ButtonIcon
                        label="Dine In"
                        icon={<Home color={COLORS.icon} size={16} />}
                    />

                    <ButtonIcon
                        label="Take away"
                        icon={<ShoppingBag color={COLORS.icon} size={16} />}
                    />

                    <ButtonIcon
                        label="Delivery"
                        icon={<Truck color={COLORS.icon} size={16} />}
                    />
                </View>
            </View>
        )
    }

    const renderPaymentInfor = () => {
        return (
            <View className="mb-3">
                <Text style={[ textStyles.caption ]} className="font-bold mb-2">Payment Information</Text>
                <View className="bg-white px-4 rounded-md">
                    <View className="flex-row items-center justify-between py-3 border-b border-gray-200">
                        <Text style={textStyles.caption}>Subtotal</Text>
                        <Text>$2.50</Text>
                    </View>

                    <View className="flex-row items-center justify-between py-3 border-b border-gray-200">
                        <Text style={textStyles.caption}>Tax 5%</Text>
                        <Text >$2.50</Text>
                    </View>

                    <View className="flex-row items-center justify-between py-3">
                        <Text style={textStyles.h3}>Total Amount</Text>
                        <Text style={textStyles.h3}>$2.50</Text>
                    </View>
                </View>
            </View>
        )
    }

    const renderPaymentMethod = () => {
        return (
            <View className="mb-3 flex-row justify-between">
                <ButtonIcon
                    label="Cash"
                    icon={<Banknote color={COLORS.icon} size={16} />}
                />

                <ButtonIcon
                    label="Credit Card"
                    icon={<CreditCard color={COLORS.icon} size={16} />}
                />

                <ButtonIcon
                    label="Qr Code"
                    icon={<QrCode color={COLORS.icon} size={16} />}
                />
            </View>
        )
    }

    return (
        <SafeAreaView className="flex-1 bg-background">
            <View className="flex-1 px-5">
                {renderHeader()}
                {renderListOrder()}
                {renderOptions()}
                {renderPaymentInfor()}
                {renderPaymentMethod()}

                <Button className="w-full">
                    <Text className="text-white font-bold">Place Order</Text>
                </Button>
            </View>
        </SafeAreaView>
    )
}
export default Payment;