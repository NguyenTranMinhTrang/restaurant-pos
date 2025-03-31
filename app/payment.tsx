import { useRouter } from "expo-router"
import { ArrowLeft, ChevronDown, EllipsisVertical, Share2 } from "lucide-react-native"
import { Image, SafeAreaView, ScrollView, Text, View } from "react-native"
import { Button } from "~/components/ui/button"
import { COLORS, globalStyles, textStyles } from "~/constants/styleGlobal"
import order from "../data/order.json"

const Payment = () => {
    const router = useRouter();

    const onBack = () => {
        router.back();
    }
    const renderHeader = () => {
        return (
            <View style={[ globalStyles.rowSpaceBetween, globalStyles.mb2 ]}>
                <Button
                    variant={'outline'}
                    size='icon'
                    style={{ borderRadius: 25 }}
                    onPress={onBack}>
                    <ArrowLeft color={COLORS.icon} size={18} />
                </Button>

                <Button
                    variant={"outline"}
                    size={"lg"}
                    style={{ borderRadius: 25 }}>
                    <View style={[ globalStyles.row, globalStyles.center ]}>
                        <Text className="mr-3" style={textStyles.h3}>Table 4</Text>
                        <View className="h-7 w-7 rounded-full bg-primary items-center justify-center">
                            <Text style={{ color: COLORS.white }}>3</Text>
                        </View>
                    </View>
                </Button>

                <Button
                    variant={'outline'}
                    size='icon'
                    style={{ borderRadius: 25 }}>
                    <EllipsisVertical color={COLORS.icon} size={18} />
                </Button>

            </View>
        )
    }

    const renderListOrder = () => {
        return (
            <View className="flex-5">
                <ScrollView>
                    {
                        order.map((item, index) => {
                            return (
                                <View
                                    key={`${item.id}-${index}`}
                                    className="flex-row bg-white rounded-md p-4 mb-3 h-[110px]">
                                    <View className="flex flex-4 items-center justify-center bg-slate-600">
                                        {/* <Image
                                            source={{ uri: "https://images.unsplash.com/photo-1547592166-23ac45744acd?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80" }}
                                            style={{ height: '100%', width: '100%' }}
                                            className="h-full w-full rounded-md"
                                            resizeMode="cover"
                                        /> */}
                                    </View>

                                    <View className="flex-6">

                                    </View>
                                </View>
                            )
                        })
                    }
                </ScrollView>
            </View>
        )
    }

    return (
        <SafeAreaView className="flex-1 bg-background">
            <View className="flex-1 px-5">
                {renderHeader()}
                {renderListOrder()}
            </View>
        </SafeAreaView>
    )
}
export default Payment;