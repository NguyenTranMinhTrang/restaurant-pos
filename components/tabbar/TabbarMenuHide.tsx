import { NavigationRoute, ParamListBase } from "@react-navigation/native";
import { ReactNode } from "react";
import { Text, TouchableOpacity, View } from "react-native"
import { COLORS } from "~/constants/styleGlobal";

interface TabbarMenuHideProps {
    label: string;
    icon: ReactNode;
    isFocused: boolean;
    route: NavigationRoute<ParamListBase, string>;
    onCloseMenu: () => void;
    onPress: (isFocused: boolean, route: NavigationRoute<ParamListBase, string>) => void;
}

const TabbarMenuHide = (props: TabbarMenuHideProps) => {
    const { isFocused, label, icon, route, onPress, onCloseMenu } = props;

    const onNavigate = () => {
        onPress(isFocused, route);
        onCloseMenu();
    }

    return (
        <TouchableOpacity className="flex-row items-center p-4 border-b border-gray-200" onPress={onNavigate}>
            {icon}
            <Text className="ml-4" style={{ color: isFocused ? COLORS.primary : COLORS.icon }}>{label}</Text>
        </TouchableOpacity>
    )
}

export default TabbarMenuHide;