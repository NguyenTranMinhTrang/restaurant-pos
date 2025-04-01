import { ScrollView, Text, TouchableOpacity, View } from "react-native"
import { textStyles } from "~/constants/styleGlobal";
import tables from "../../data/table.json";
import { useState } from "react";

interface Table {
    id: number;
    name: string;
    customerName: string;
}

const ModalChooseTable = () => {
    const [ currentTable, setCurrentTable ] = useState(1);

    const onChangeTable = (id: number) => () => {
        setCurrentTable(id);
    }

    return (
        <View>
            <Text style={textStyles.h3} className="text-center mb-3">Choose Table</Text>
            <ScrollView>
                {
                    (tables as Table[]).map((item, index) => (
                        <TouchableOpacity
                            className="flex-row justify-between items-center py-4 border-b border-gray-200" key={index}
                            onPress={onChangeTable(item.id)}>
                            <Text className="text-xl">{item.name} <Text style={textStyles.bodyLight}>{item.customerName}</Text></Text>

                            <View className="h-6 w-6 rounded-full border border-gray-200 items-center justify-center">
                                {
                                    currentTable === item.id && <View className="h-3 w-3 rounded-full bg-primary" />
                                }
                            </View>
                        </TouchableOpacity>
                    ))
                }
            </ScrollView>
        </View>
    )
}

export default ModalChooseTable;