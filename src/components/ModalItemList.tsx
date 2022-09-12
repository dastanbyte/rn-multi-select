import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { SelectedItems } from './MultiSelect';
import Feather from 'react-native-vector-icons/Feather';

interface Props {
    item: SelectedItems;
    handleToggleAddItem: (item: SelectedItems) => void;
}

const ModalItemList = ({ item, handleToggleAddItem }: Props) => {
    return (
        <TouchableOpacity
            onPress={() => handleToggleAddItem(item)}
            key={item.id}
            style={styles.modalItem}>
            <Text
                // eslint-disable-next-line prettier/prettier
                style={[{ fontSize: 16 }, item.selected ? { fontWeight: 'bold', color: '#212121' } : { fontWeight: 'normal', color: '#616161' }]}>
                {item.name}
            </Text>
            {item.selected && (
                <Feather name={'check'} size={18} color={'#00C853'} />
            )}
        </TouchableOpacity>
    );
};

export default ModalItemList;

const styles = StyleSheet.create({
    modalItem: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 10,
        paddingHorizontal: 5,
    },
});
