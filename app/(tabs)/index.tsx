import BottomSheet from "@gorhom/bottom-sheet";
import { useRouter } from "expo-router";
import { ArrowLeft, ChevronDown, Pencil, Share2 } from "lucide-react-native";
import React, { useRef } from "react";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import ButtonHeader from "~/components/button/ButtonHeader";
import SearchInput from "~/components/input/SearchInput";
import CurrentTable from "~/components/memu/CurrentTable";
import ListMenu, { ListMenuRef } from "~/components/memu/ListMenu";
import ModalChooseTable from "~/components/memu/ModalChooseTable";
import ModalBottomSheet, { ModalBottomSheetRef } from "~/components/modal/ModalBottomSheet";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { COLORS, globalStyles, textStyles } from "~/constants/styleGlobal";

const MenuTab = () => {

    const router = useRouter();

    const bottomSheetRef = useRef<ModalBottomSheetRef>(null);
    const refMenu = useRef<ListMenuRef>(null);

    const onEdit = () => {
        router.push('/payment');
    }

    const onOpenModal = () => {
        bottomSheetRef?.current?.open(
            <ModalChooseTable

            />
        );
    }

    const onSearch = (text: string) => {
        refMenu?.current?.onSearch(text);
    }

    const renderSearchBar = () => {
        return (
            <View style={[ globalStyles.mb2 ]}>
                <SearchInput
                    onChangeText={onSearch}
                />
            </View>
        )
    }
    const renderInforTable = () => {
        return (
            <View style={[ globalStyles.rowSpaceBetween, globalStyles.alignItemsCenter, globalStyles.mb2 ]}>
                <CurrentTable />
                <Button
                    variant={'outline'}
                    size='icon'
                    className="bg-white rounded-xl"
                    onPress={onEdit}>
                    <Pencil color={COLORS.icon} size={18} />
                </Button>
            </View>
        )
    }
    const renderHeader = () => {
        return (
            <View style={[ globalStyles.rowSpaceBetween, globalStyles.mb2 ]}>
                <ButtonHeader
                    icon={<ArrowLeft color={COLORS.icon} size={18} />}
                />

                <Button
                    variant={"outline"}
                    size={"lg"}
                    className="bg-white rounded-full"
                    onPress={onOpenModal}>
                    <View style={[ globalStyles.row, globalStyles.center ]}>
                        <Text className="mr-3" style={textStyles.h4}>Table 4</Text>
                        <ChevronDown color={COLORS.icon} size={18} />
                    </View>
                </Button>

                <ButtonHeader
                    icon={<Share2 color={COLORS.icon} size={18} />}
                />
            </View>
        )
    }

    return (
        <SafeAreaView className="flex-1 bg-background">
            <View className="flex-1 px-5">
                {renderHeader()}
                {renderInforTable()}
                {renderSearchBar()}
                <ListMenu
                    ref={refMenu}
                />
            </View>

            <ModalBottomSheet
                ref={bottomSheetRef}
                containerStyle="h-1/2"
            />

            <View style={{ height: 90 }} />
        </SafeAreaView>
    )
}

export default MenuTab;