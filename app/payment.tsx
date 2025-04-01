import { useRouter } from "expo-router"
import { ArrowLeft, Banknote, ChevronDown, CreditCard, EllipsisVertical, Home, Minus, Plus, QrCode, Share2, ShoppingBag, Trash2, Truck } from "lucide-react-native"
import { Image, SafeAreaView, ScrollView, Text, TouchableOpacity, View } from "react-native"
import { Button } from "~/components/ui/button"
import { COLORS, globalStyles, textStyles } from "~/constants/styleGlobal"
import order from "../data/order.json"
import PaymentItem from "~/components/payment/PaymentItem"
import ButtonIcon from "~/components/button/ButtonIcon"
import ButtonHeader from "~/components/button/ButtonHeader"
import ListPayment from "~/components/payment/ListPayment"
import PaymentCurrentCount from "~/components/payment/PaymentCurrentCount"
import PaymentInformation from "~/components/payment/PaymentInformation"

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
                    <PaymentCurrentCount />
                </Button>

                <ButtonHeader
                    icon={<EllipsisVertical color={COLORS.icon} size={18} />}
                />
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
                <ListPayment />
                {renderOptions()}
                <PaymentInformation />
                {renderPaymentMethod()}

                <Button className="w-full">
                    <Text className="text-white font-bold">Place Order</Text>
                </Button>
            </View>
        </SafeAreaView>
    )
}
export default Payment;