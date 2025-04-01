import { forwardRef, useImperativeHandle, useState } from "react";
import { Modal, Text, TouchableOpacity, View } from "react-native";
import { useImmer } from "use-immer";

interface ModalBottomSheetProps {
    containerStyle?: string;
}

export interface ModalBottomSheetRef {
    open: (children: React.ReactNode) => void;
    close: () => void;
}

interface ModalBottomSheetState {
    isModalVisible: boolean;
    children: React.ReactNode;
}

const ModalBottomSheet = forwardRef<ModalBottomSheetRef, ModalBottomSheetProps>((props, ref) => {
    const { containerStyle } = props;

    const [ state, setState ] = useImmer<ModalBottomSheetState>({
        isModalVisible: false,
        children: null
    })

    const onCloseModal = () => {
        setState(draft => {
            draft.isModalVisible = false;
        })
    };

    const onOpenModal = (children: React.ReactNode) => {
        setState(draft => {
            draft.isModalVisible = true;
            draft.children = children;
        })
    };

    useImperativeHandle(ref, () => ({
        open: onOpenModal,
        close: onCloseModal,
    }));

    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={state.isModalVisible}
            onRequestClose={onCloseModal}>
            <TouchableOpacity
                className="flex-1 bg-black/50"
                activeOpacity={1}
                onPress={onCloseModal}>
                <TouchableOpacity
                    activeOpacity={1}
                    className={`bg-white rounded-t-3xl p-5 absolute bottom-0 w-full min-h-[30%] ${containerStyle}`}
                    onPress={e => e.stopPropagation()}>
                    {state.children && state.children}
                </TouchableOpacity>
            </TouchableOpacity>
        </Modal>
    )
})

export default ModalBottomSheet;