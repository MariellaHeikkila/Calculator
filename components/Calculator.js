import React, { useState } from 'react';
import { View, Text } from 'react-native';
import styles from '../styles/style.js'
import { TextInput } from 'react-native';


const Calculator = () => {
    
    const numbers = new Array(10).fill().map((_, index) => index);
    
    const [number, setNumber] = useState(numbers);
    const [showselection, setShowSelection] = useState(0);
    const [value1, setValue1] = useState('');
    const [value2, setValue2] = useState('');
    const [inputFocus, setInputFocus] = useState('value1');

    const handleInputFocus = (input) => {
        setInputFocus(input);
    };

    const handleNumberSelect =(num) => {

        if (inputFocus === 'value1') {
            setValue1(prev => prev + num.toString());
        } else if (inputFocus === 'value2') {
            setValue2(prev => prev + num.toString());
        }
        
    };

    const addValues = (value1, value2) => {
        sum = parseInt(value1) + parseInt(value2);
        return setShowSelection(sum);
    };

    const substractValues = (value1, value2) => {
        sum = parseInt(value1) - parseInt(value2);
        return setShowSelection(sum);
    };

    const empty = () => {
        setValue1('');
        setValue2('');
        setShowSelection(0);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.line} >Calculator</Text>
            <Value value={value1} setvalue={setValue1} handleInputFocus={handleInputFocus} inputName='value1'/>
            <Value value={value2} setvalue={setValue2} handleInputFocus={handleInputFocus} inputName='value2'/>
            <Text style={styles.line}>Calculation: {showselection}</Text>
            <View style={styles.numbers}>
            {number.map((num, i) => (                
                <Text style={styles.item} key={i} onPress={() => handleNumberSelect(num)}>
                    {num}
                </Text>                
            ))}
            </View>
            <View style={styles.numbers}>
            <Text style={styles.item} onPress={()=> addValues(value1, value2)}>+</Text>
            <Text style={styles.item} onPress={()=> substractValues(value1, value2)}>-</Text>
            <Text style={styles.item} onPress={()=> empty()}>Empty</Text>
            </View>
        </View>
    );
};

export default Calculator;

const Value = ({value, setvalue, handleInputFocus, inputName}) => {
    return (
        <View>
            <TextInput
            style={styles.line}
            value={value.toString()}
            onChangeText={(text) => setvalue(text)}
            onFocus={() => handleInputFocus(inputName)}
            />
        </View>
    )
}