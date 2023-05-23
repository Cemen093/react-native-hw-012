import React, {useState} from 'react';
import {View, Text, Button, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import PhotoItem from "./PhotoItem";
import {saveImage} from "../utils/imagePicker";


const PhotoList = ({ images, style,  ...props }) => {
    const [selectedItems, setSelectedItems] = useState([]);
    const saveSelectedImages = async () => {
        for (const selectedItem of selectedItems) {
            await saveImage(selectedItem.webformatURL)
        }
    };

    const renderItem = ({ item }) => {
        return <PhotoItem
            item={item}
            selectedItems={selectedItems}
            setSelectedItems={setSelectedItems}
        />
    };

    return (
        <View style={[styles.container, style]} {...props}>
            <FlatList
                data={images}
                renderItem={renderItem}
                keyExtractor={(item) => item.id.toString()}
                numColumns={2}
                contentContainerStyle={styles.contentContainer}
            />
            {selectedItems.length > 0 &&
                <TouchableOpacity style={styles.button} onPress={saveSelectedImages}>
                    <Text style={styles.buttonText}>Сохранить</Text>
                </TouchableOpacity>
            }
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 5,
        justifyContent: "space-around",
        alignItems: "center",
    },
    contentContainer: {
        paddingVertical: 10,
        paddingHorizontal: 15,
    },
    image: {
        width: 150,
        height: 150,
        margin: 5,
    },
    button: {
        borderWidth: 2,
        borderColor: '#2980B9',
        padding: 10,
        borderRadius: 5,
    },
    buttonText: {
        color: '#2980B9',
        fontWeight: 'bold',
        textAlign: 'center',
    },
})

export default PhotoList;
