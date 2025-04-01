import { Image, Text, View } from "react-native"
import { COLORS, SPACING, globalStyles, textStyles } from "~/constants/styleGlobal"
import { Button } from "../ui/button"
import { Minus, Plus } from "lucide-react-native"
import { Item } from "./ListMenu"
import { useState } from "react"
import { useAppDispatch } from "~/redux/hooks/hook"
import { addOrder } from "~/redux/reducers/orderReducer"


interface MenuItemProps {
    item: Item;
}
const MenuItem = (props: MenuItemProps) => {
    const { item } = props;
    const [ quantity, setQuantity ] = useState(1);
    const dispatch = useAppDispatch();

    const onIncreaseQuantity = () => {
        setQuantity(prev => prev + 1);
        dispatch(addOrder(item));
    }

    const onDecreaseQuantity = () => {
        if (quantity > 1) {
            setQuantity(prev => prev - 1);
        }
    }

    return (
        <View
            style={[
                globalStyles.p2,
                globalStyles.radius1,
                globalStyles.row,
                {
                    backgroundColor: COLORS.white,
                }
            ]}>
            <View style={[ { flex: 0.4 }, globalStyles.center, globalStyles.mr2 ]}>
                <Image
                    source={{ uri: item.img }}
                    style={{ height: 90, width: '100%', borderRadius: SPACING.small }}
                    resizeMode="cover"
                />
            </View>
            <View style={[
                globalStyles.full,
            ]}>
                <View className="flex-row items-start justify-betweens">
                    <Text className="flex-1" style={[ textStyles.body, textStyles.bold ]}>{item.name}</Text>
                    <View className="flex-row items-center">
                        <View
                            className={`h-2 w-2 rounded-full my-1`}
                            style={{ backgroundColor: item.vegOrNonVeg.color }}
                        />
                        <Text style={textStyles.caption} className="ml-2">{item.vegOrNonVeg.label}</Text>
                    </View>
                </View>
                <Text style={[ textStyles.body, { color: COLORS.primary } ]}>{item.price} $</Text>
                <View style={[ globalStyles.row, globalStyles.mt1 ]}>
                    <Button
                        variant={'outline'}
                        size={"icon-sm"}
                        style={{ borderRadius: 15 }}
                        onPress={onIncreaseQuantity}>
                        <Plus color={COLORS.icon} size={16} />
                    </Button>

                    <Text style={[ textStyles.body ]} className="px-5"> {quantity}</Text>

                    <Button
                        variant={'outline'}
                        size={"icon-sm"}
                        style={{ borderRadius: 15 }}
                        onPress={onDecreaseQuantity}>
                        <Minus color={COLORS.icon} size={16} />
                    </Button>
                </View>
            </View>
        </View>
    )
}

export default MenuItem;