import React, { useState } from "react";
import {
    View,
    TextInput,
    TouchableOpacity,
    Text,
    TextInputProps,
} from "react-native";
import { Eye, EyeOff } from "lucide-react-native"; // Lucide Icons
import { Control, Controller, FieldErrors, RegisterOptions } from "react-hook-form";

interface InputFieldProps {
    control: Control<any>;
    nameField: string;
    placeHolder: string;
    keyboardType?: TextInputProps[ "keyboardType" ];
    typeInput?: "text" | "password";
    rules?: RegisterOptions;
    errors: FieldErrors;
}

const InputField = (props: InputFieldProps) => {
    const {
        control,
        nameField,
        placeHolder,
        rules,
        errors,
        keyboardType = "default",
        typeInput = "text",
    } = props;
    const [ secureText, setSecureText ] = useState(typeInput === "password");

    // Toggle password visibility
    const toggleSecureText = () => {
        setSecureText((prev) => !prev);
    };

    return (
        <View className="mb-4">
            <Controller
                control={control}
                name={nameField}
                rules={rules}
                render={({ field: { onChange, onBlur, value } }) => (
                    <View className="flex-row items-center border border-gray-300 rounded-md px-3">
                        <TextInput
                            className="flex-1 h-10 text-base"
                            placeholder={placeHolder}
                            onChangeText={onChange}
                            onBlur={onBlur}
                            value={value}
                            secureTextEntry={typeInput === "password" && secureText}
                            keyboardType={keyboardType}
                        />
                        {typeInput === "password" && (
                            <TouchableOpacity
                                onPress={toggleSecureText}
                                className="p-2"
                            >
                                {secureText ? (
                                    <EyeOff size={20} color="#666" />
                                ) : (
                                    <Eye size={20} color="#666" />
                                )}
                            </TouchableOpacity>
                        )}
                    </View>
                )}
            />
            {errors[ nameField ]?.message && (
                <Text className="text-red-500 text-xs mt-1">
                    {errors[ nameField ]?.message ?? ''}
                </Text>
            )}
        </View>
    );
};

export default InputField;