import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import React, { useEffect, useState } from 'react';
import Entypo from 'react-native-vector-icons/Entypo';
import FruitModal from './FruitModal';
import ItemList from './ItemList';

interface Props {
    commitedItems: (items: SelectedItems[]) => void;
}
export interface SelectedItems {
    id: number;
    name: string;
    selected: boolean;
}

const MultiSelect = ({ commitedItems }: Props) => {
    const [modalVisible, setModalVisible] = useState(false);
    const [selectedItems, setSelectedItems] = useState<SelectedItems[]>([]);
    const [fruits] = useState<SelectedItems[]>([
        {
            id: 1,
            name: 'Apple',
            selected: false,
        },
        {
            id: 2,
            name: 'Pear',
            selected: false,
        },
        {
            id: 3,
            name: 'Grape',
            selected: false,
        },
        {
            id: 4,
            name: 'Orange',
            selected: false,
        },
        {
            id: 6,
            name: 'Strawberry',
            selected: false,
        },
        {
            id: 7,
            name: 'Banana',
            selected: false,
        },
        {
            id: 8,
            name: 'Kiwi',
            selected: false,
        },
    ]);

    useEffect(() => {
        commitedItems(selectedItems);
    }, [commitedItems, selectedItems]);

    const handleToggleAddItem = (item: SelectedItems) => {
        const found = selectedItems.find(itm => itm.id === item.id);

        if (found) {
            found.selected = false;
            const index = selectedItems.findIndex(itm => itm.id === item.id);
            const newSelectedItems = [...selectedItems];
            newSelectedItems.splice(index, 1);
            setSelectedItems(newSelectedItems);
        } else {
            item.selected = true;
            setSelectedItems([...selectedItems, item]);
        }
    };

    const handleRemoveItem = (item: SelectedItems) => {
        item.selected = false;
        const index = selectedItems.findIndex(itm => itm.id === item.id);
        const newItems = [...selectedItems];
        newItems.splice(index, 1);
        setSelectedItems(newItems);
    };

    return (
        <View style={styles.main}>
            {/* Modal */}
            <FruitModal
                modalVisible={modalVisible}
                setModalVisible={setModalVisible}
                fruits={fruits}
                handleToggleAddItem={handleToggleAddItem}
            />

            <Text style={styles.label}>Multi Select</Text>
            <Text style={styles.subLabel}>Select your favorite fruits.</Text>
            <View style={styles.multiSelectContent}>
                <View style={styles.selectContent}>
                    <View style={styles.list}>
                        {selectedItems.map(item => (
                            <ItemList
                                key={item.id}
                                item={item}
                                handleRemoveItem={handleRemoveItem}
                            />
                        ))}
                        <TouchableOpacity
                            style={styles.addButton}
                            onPress={() => setModalVisible(true)}>
                            <Entypo color={'#ffffff'} name={'plus'} size={22} />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    main: {
        marginVertical: 20,
    },
    label: {
        color: '#212121',
        fontSize: 17,
        fontWeight: '500',
    },
    subLabel: {
        fontSize: 13,
    },
    multiSelectContent: {
        borderWidth: 1,
        borderColor: '#e0e0e0',
        borderRadius: 10,
        marginTop: 10,
    },
    selectContent: {
        paddingVertical: 5,
    },
    list: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'flex-start',
        flexWrap: 'wrap',
    },
    divider: {
        height: 1,
        backgroundColor: '#e0e0e0',
    },
    addButton: {
        padding: 8,
        backgroundColor: '#039BE5',
        borderRadius: 20,
        flexDirection: 'row',
        alignItems: 'center',
        margin: 3,
    },
});

export default MultiSelect;
