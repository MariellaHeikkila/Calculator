import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';
import styles from '../styles/style.js'


const Calculator = () => {
    
    const numbers = new Array(10).fill().map((_, index) => index);
    
    const [number, setNumber] = useState(numbers);
    const [showselection, setShowSelection] = useState(0);
    const [value1, setValue1] = useState(0);
    const [value2, setValue2] = useState(0);

    const handleNumberSelect = (selectedNumber) => {
        // Logic to handle number selection
        // check if value1 is empty, if it is, set value1 to selectedNumber
        if(value1 === 0) {
        setValue1(selectedNumber)
        } else if(value2 === 0) {
            setValue2(selectedNumber)
        }        
        
    };

    const addValues = (value1, value2) => {
        sum = value1 + value2; 

        return setShowSelection(sum);
    };

    const substractValues = (value1, value2) => {
        sum = value1 - value2; 

        return setShowSelection(sum);
    };

    const empty = () => {        

        setValue1(0);
        setValue2(0);
        setShowSelection(0);

    };

    return (
        <View style={styles.container}>
            <Text style={styles.line} >Calculator</Text>
            <Text style={styles.line}>First Number: {value1}</Text>
            <Text style={styles.line}>Second Number: {value2}</Text>
            <Text style={styles.line}>Calculation: {showselection}</Text>
            <View style={styles.numbers}>
            {number.map((num) => (                
                <Text style={styles.item} key={num} onPress={() => handleNumberSelect(num)}>
                    {num}
                </Text>                
            ))}
            </View>
            <Text style={styles.button} onPress={()=> addValues(value1, value2)}>Add</Text>
            <Text style={styles.button} onPress={()=> substractValues(value1, value2)}>Substract</Text>
            <Text style={styles.button} onPress={()=> empty()}>Empty</Text>
        </View>
    );
};

export default Calculator;

