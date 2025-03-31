import { useEffect } from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native"
import Animated, { interpolate, useAnimatedStyle, useSharedValue, withTiming } from "react-native-reanimated";
import { COLORS, globalStyles, SPACING } from "~/constants/styleGlobal";

interface TabbarButtonProps {
    routeName: string;
    title: string;
    isFocused: boolean;
    icon: JSX.Element;
    onPress: () => void;
    onLongPress: () => void;
}
const TabbarButton = (props: TabbarButtonProps) => {
    const { routeName, title, isFocused, icon, onPress, onLongPress } = props;

    const scale = useSharedValue(0);

    useEffect(() => {
        scale.value = withTiming(isFocused ? 1 : 0);
    }, [ isFocused ]);

    const animatedTextStyle = useAnimatedStyle(() => {
        return {
            opacity: interpolate(scale.value, [ 0, 1 ], [ 1, 0 ]),
        };
    }, [ scale ]);

    const animatedIconStyle = useAnimatedStyle(() => {
        return {
            transform: [
                {
                    scale: interpolate(scale.value, [ 0, 1 ], [ 1, 1.2 ]),
                },
            ],
            top: interpolate(scale.value, [ 0, 1 ], [ 0, 9 ]),
        };
    }, [ scale ]);


    return (
        <TouchableOpacity
            key={routeName}
            accessibilityState={isFocused ? { selected: true } : {}}
            onPress={onPress}
            onLongPress={onLongPress}
            style={[ styles.tabBarButton, globalStyles.py1 ]}>
            <Animated.View style={[ animatedIconStyle ]}>
                {icon}
            </Animated.View>
            <Animated.Text style={[ { color: isFocused ? COLORS.primary : '#222', fontWeight: isFocused ? '600' : '400' }, animatedTextStyle ]}>
                {title}
            </Animated.Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    tabBarButton: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        gap: SPACING.tiny,
    },
});


export default TabbarButton;