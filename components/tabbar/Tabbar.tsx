import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import { LayoutChangeEvent, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { COLORS, globalStyles, SPACING } from "~/constants/styleGlobal";
import { icon, showRoutes } from "./TabbarConstants";
import { ListCollapse } from "lucide-react-native";
import TabbarButton from "./TabbarButton";
import { useRef, useState } from "react";
import { useAnimatedStyle, useSharedValue, withTiming } from "react-native-reanimated";


export interface IconTabbar {
    color: string;
}

const TabBar = (props: BottomTabBarProps) => {
    const { state, descriptors, navigation } = props;

    const [ dimentions, setDimentions ] = useState({ height: 0, width: 0 });

    const filteredRoutes = useRef(state.routes.filter((route) => showRoutes.includes(route.name)));

    const buttonWidth = dimentions.width / (filteredRoutes.current.length + 1);


    const onLayout = (event: LayoutChangeEvent) => {
        const { width, height } = event.nativeEvent.layout;
        setDimentions({ width, height });
    }

    const onPressMore = () => {

    }

    const activeRouteName = state.routes[ state.index ].name;

    return (
        <View style={styles.tabBar} onLayout={onLayout}>
            {filteredRoutes.current.map((route, index) => {

                const { options } = descriptors[ route.key ];
                const label =
                    options.tabBarLabel !== undefined
                        ? options.tabBarLabel
                        : options.title !== undefined
                            ? options.title
                            : route.name;

                const isFocused = route.name === activeRouteName;

                const onPress = () => {
                    const event = navigation.emit({
                        type: 'tabPress',
                        target: route.key,
                        canPreventDefault: true,
                    });

                    if (!isFocused && !event.defaultPrevented) {
                        navigation.navigate(route.name, route.params);
                    }
                };

                const onLongPress = () => {
                    navigation.emit({
                        type: 'tabLongPress',
                        target: route.key,
                    });
                };

                return (
                    <TabbarButton
                        key={route.key}
                        routeName={route.name}
                        title={options.title ?? ""}
                        isFocused={isFocused}
                        icon={icon[ route.name ]({ color: isFocused ? COLORS.primary : '#222' })}
                        onPress={onPress}
                        onLongPress={onLongPress}
                    />
                );
            })}

            <TouchableOpacity
                style={[ styles.tabBarButton, globalStyles.py1 ]}
                onPress={onPressMore}>
                <ListCollapse color={'#222'} size={20} />
                <Text style={{ color: '#222', fontWeight: '400' }}>
                    More
                </Text>
            </TouchableOpacity>

        </View>
    );
}

const styles = StyleSheet.create({
    tabBar: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: COLORS.white,
        position: 'absolute',
        bottom: 50,
        alignItems: 'center',
        marginHorizontal: SPACING.medium,
        borderRadius: 35,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowRadius: 10,
        shadowOpacity: 0.1,
    },
    tabBarButton: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        gap: SPACING.tiny,
    },
});

export default TabBar;
