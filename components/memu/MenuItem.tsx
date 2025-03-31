import { Image, Text, View } from "react-native"
import { COLORS, SPACING, globalStyles, textStyles } from "~/constants/styleGlobal"
import { Button } from "../ui/button"
import { Minus, Plus } from "lucide-react-native"
import { Item } from "./ListMenu"
import { useState } from "react"


interface MenuItemProps {
    item: Item;
}
const MenuItem = (props: MenuItemProps) => {
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
            style={[
                globalStyles.p2,
                globalStyles.radius1,
                globalStyles.row,
                {
                    backgroundColor: COLORS.white,
                    height: 110,
                }
            ]}>
            <View style={[ { flex: 0.4 }, globalStyles.center, globalStyles.mr2 ]}>
                <Image
                    source={{ uri: item.img }}
                    style={{ height: '100%', width: '100%', borderRadius: SPACING.small }}
                    resizeMode="cover"
                />
            </View>
            <View style={[
                globalStyles.full,
                globalStyles.column,

            ]}>
                <Text style={[ textStyles.body, textStyles.bold ]}>{item.name}</Text>
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