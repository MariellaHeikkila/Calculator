import React, { useState } from 'react';
import { View, Text, Keyboard } from 'react-native';
import styles from '../styles/style.js'
import { TextInput } from 'react-native';


const Calculator = () => {
    
    const numbers = new Array(10).fill().map((_, index) => index);
    
    const [number, setNumber] = useState(numbers);
    const [showselection, setShowSelection] = useState(0);
    const [values, setValues] = useState({value1: '', value2: ''});
    
    const [inputFocus, setInputFocus] = useState('value1');

    const handleInputFocus = (input) => {
        Keyboard.dismiss();
        setInputFocus(input);
        
    };

    const handleNumberSelect =(num) => {

        if (inputFocus === 'value1') {
            setValues(prev => ({ ...prev, value1: prev.value1 + num.toString() }));
        } else if (inputFocus === 'value2') {
            setValues(prev => ({ ...prev, value2: prev.value2 + num.toString() }));
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
        setValues({ value1: '', value2: '' });
        setShowSelection(0);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.line} >Calculator</Text>
            <Value value={values.value1} setvalue={setValues} handleInputFocus={handleInputFocus} inputName='value1'/>
            <Value value={values.value2} setvalue={setValues.value2} handleInputFocus={handleInputFocus} inputName='value2'/>
            <Text style={styles.line}>Calculation: {showselection}</Text>
            <View style={styles.numbers}>
            {number.map((num, i) => (                
                <Text style={styles.item} key={i} onPress={() => handleNumberSelect(num)}>
                    {num}
                </Text>                
            ))}
            </View>
            <View style={styles.numbers}>
            <Text style={styles.item} onPress={()=> addValues(values.value1, values.value2)}>+</Text>
            <Text style={styles.item} onPress={()=> substractValues(values.value1, values.value2)}>-</Text>
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
            value={value}
            onChangeText={(text) => setvalue(text)}
            onFocus={() => handleInputFocus(inputName)}            
            />
        </View>
    )
}