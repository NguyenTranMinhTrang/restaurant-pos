import { useRouter } from "expo-router";
import { ArrowLeft, ChevronDown, Pencil, Share2 } from "lucide-react-native";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import SearchInput from "~/components/input/SearchInput";
import ListMenu from "~/components/memu/ListMenu";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { COLORS, globalStyles, textStyles } from "~/constants/styleGlobal";

const MenuTab = () => {

    const router = useRouter();

    const onEdit = () => {
        router.push('/payment');
    }

    const renderSearchBar = () => {
        return (
            <View style={[ globalStyles.mb2 ]}>
                <SearchInput />
            </View>
        )
    }
    const renderInforTable = () => {
        return (
            <View style={[ globalStyles.rowSpaceBetween, globalStyles.alignItemsCenter, globalStyles.mb2 ]}>
                <View className="flex-row items-center">
                    <Text style={textStyles.h3}>Table 4
                        <Text style={[ textStyles.bodyLight, { fontSize: 20 } ]}> Floyd Miles</Text>
                    </Text>

                    <View style={[ styles.ball, globalStyles.center, globalStyles.ml1 ]} >
                        <Text style={{ color: COLORS.white }}>3</Text>
                    </View>
                </View>

                <Button
                    variant={'outline'}
                    size='icon'
                    style={{ borderRadius: 10 }}
                    onPress={onEdit}>
                    <Pencil color={COLORS.icon} size={18} />
                </Button>
            </View>
        )
    }
    const renderHeader = () => {
        return (
            <View style={[ globalStyles.rowSpaceBetween, globalStyles.mb2 ]}>
                <Button
                    variant={'outline'}
                    size='icon'
                    style={{ borderRadius: 25 }}>
                    <ArrowLeft color={COLORS.icon} size={18} />
                </Button>

                <Button
                    variant={"outline"}
                    size={"lg"}
                    style={{ borderRadius: 25 }}>
                    <View style={[ globalStyles.row, globalStyles.center ]}>
                        <Text className="mr-3" style={textStyles.h3}>Table 4</Text>
                        <ChevronDown color={COLORS.icon} size={18} />
                    </View>
                </Button>

                <Button
                    variant={'outline'}
                    size='icon'
                    style={{ borderRadius: 25 }}>
                    <Share2 color={COLORS.icon} size={18} />
                </Button>

            </View>
        )
    }

    return (
        <SafeAreaView style={[ globalStyles.full, { backgroundColor: COLORS.background } ]}>
            <View style={[ globalStyles.full, globalStyles.px2 ]}>
                {renderHeader()}
                {renderInforTable()}
                {renderSearchBar()}
                <ListMenu />
            </View>
            <View style={{ height: 90 }} />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    ball: {
        height: 25,
        width: 25,
        backgroundColor: COLORS.primary,
        borderRadius: 15,
    }
});

export default MenuTab;