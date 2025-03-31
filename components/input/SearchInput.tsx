import { TextInput, TouchableOpacity, View } from "react-native"
import { COLORS, globalStyles } from "~/constants/styleGlobal";
import { Search, X } from "lucide-react-native";
import { useState } from "react";

interface SearchInputProps {
    onChangeText?: (text: string) => void;
}

const SearchInput = (props: SearchInputProps) => {
    const { onChangeText } = props;
    const [ text, setText ] = useState('');

    const onClear = () => {
        setText('');
        onChangeText?.('');
    }

    return (
        <View
            style={[
                globalStyles.row,
                globalStyles.alignItemsCenter,
                {
                    height: 44,
                    borderRadius: 24,
                    backgroundColor: COLORS.white,
                    borderColor: COLORS.border,
                    borderWidth: 1,
                }
            ]}>
            <View style={[ globalStyles.px1 ]}>
                <Search color={COLORS.icon} size={20} />
            </View>

            <TextInput
                cursorColor={COLORS.icon}
                placeholder="Search ..."
                style={{ flex: 1, fontSize: 16 }}
                onChange={(e) => {
                    setText(e.nativeEvent.text);
                    onChangeText?.(e.nativeEvent.text);
                }}
            />

            {
                text &&
                <TouchableOpacity style={[ globalStyles.px2 ]} onPress={onClear}>
                    <X color={COLORS.error} size={16} />
                </TouchableOpacity>
            }


        </View>
    )
}

export default SearchInput;