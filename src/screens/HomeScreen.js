import React, {useEffect, useState} from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import SearchBar from "../components/SearchBar";
import PhotoList from "../components/PhotoList";
import useFetching from "../hooks/useFetching";
import {getImages} from "../utils/api";
import LoadingPlaceholder from "../components/LoadingPlaceholder";
import RangeSlider from "../components/RangeSlider";

const HomeScreen = ({ navigation }) => {
    const [query, setQuery] = useState('water');
    const [value, setValue] = useState(10);
    const [images, setImages] = useState([]);
    const [fetchHits, isHitsLoading, errorMessage] = useFetching(async () => {
        const images = await getImages(query, value);
        setImages(images)
    })

    useEffect(() => {
        if (query){
            fetchHits();
        }
    }, [query, value]);

    return (
        <View style={styles.container}>
            <SearchBar style={{flex: 1}} term={query} onTermChange={(term) => setQuery(term)}/>
            <RangeSlider style={{flex: 0.3}} value={value} setValue={(value) => setValue(value)}/>
            {isHitsLoading ? <LoadingPlaceholder/> :
            <PhotoList images={images} style={{flex: 9}}/>}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: "100%",
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "gray",
    }
})

export default HomeScreen;
