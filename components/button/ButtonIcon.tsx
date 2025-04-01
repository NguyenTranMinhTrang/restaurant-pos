import { Text, View } from "react-native";
import { Button } from "../ui/button"

interface ButtonIconProps {
    variants?: "link" | "default" | "destructive" | "outline" | "secondary" | "ghost";
    icon?: JSX.Element;
    label?: string;
    className?: string;
}

const ButtonIcon = (props: ButtonIconProps) => {
    const {
        variants = 'outline',
        icon,
        label,
        className
    } = props
    return (
        <Button
            variant={variants}
            className={`bg-white rounded-3xl ${className}`}>
            <View className="flex-row items-center">
                {icon && icon}
                <Text className="ml-2">{label}</Text>
            </View>
        </Button>
    )
}

export default ButtonIcon;