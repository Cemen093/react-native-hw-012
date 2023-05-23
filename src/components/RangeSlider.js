import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Slider from '@react-native-community/slider';

const RangeSlider = ({ value, setValue, style, min=10, max = 100,
                         step=1, ...props}) => {

    return (
        <View style={[styles.sliderContainer, style]}>
            <Text style={styles.value}>{min}</Text>
            <Slider
                style={styles.slider}
                minimumValue={min}
                maximumValue={max}
                step={step}
                value={value}
                onValueChange={(value) => setValue(value)}
            />
            <Text style={styles.value}>{max}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    sliderContainer: {
        flex: 1,
        marginVertical: 5,
        marginHorizontal: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    text: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    value: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    slider: {
        flex: 1,
        marginHorizontal: 10,
    },
});

export default RangeSlider;
