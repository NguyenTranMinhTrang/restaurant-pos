import { useForm } from "react-hook-form";
import { Text, View } from "react-native";
import InputField from "~/components/input/InputField";
import { Button } from "~/components/ui/button";

interface ValueForm {
    email: string;
    password: string;
}

const Login = () => {
    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm<ValueForm>({
        defaultValues: {
            email: "",
            password: "",
        },
    });

    const onSubmit = (data: ValueForm) => {
        console.log("Form Data:", data);
    };

    return (
        <View className="flex-1 justify-center px-5 bg-gray-100">
            {/* Username Field */}
            <InputField
                control={control}
                nameField="username"
                placeHolder="Enter your username"
                rules={{ required: "Username is required" }}
                errors={errors}
            />

            {/* Password Field */}
            <InputField
                control={control}
                nameField="password"
                placeHolder="Enter your password"
                typeInput="password"
                rules={{
                    required: "Password is required",
                    minLength: {
                        value: 6,
                        message: "Password must be at least 6 characters",
                    },
                }}
                errors={errors}
            />

            <Button onPress={handleSubmit(onSubmit)} >
                <Text>Submit</Text>
            </Button>
        </View>
    );
}

export default Login;