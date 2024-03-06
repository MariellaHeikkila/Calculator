import { StyleSheet } from 'react-native';



const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#e4e3e2',
    },
    numbers: {
        marginHorizontal: 30,
        justifyContent: 'space-between',
        flexDirection: 'row',
        padding: 10,
        borderWidth:1,
        borderRadius: 5,
        color: '#333',        
        flexWrap: 'wrap',
        backgroundColor: '#c77c19',
    },
    item: {
        width: '30%',
        padding: 5,
        borderWidth: 1,
        borderRadius: 5,
        marginVertical: 5,
        textAlign: 'center',
        fontSize: 16,
        fontWeight: 'bold',
        backgroundColor: '#bea481',
        color: '#fff',
    },
    button: {
        marginVertical: 10,
        padding: 10,
        backgroundColor: '#c77c19',
        borderRadius: 5,
        textAlign: 'center',
        fontSize: 16,
        fontWeight: 'bold',
        width: 200,
        color: '#fff',
    },
    line: {
        borderBottomWidth: 1,
        borderStyle: 'dashed',
        padding: 10,
        marginBottom: 10,
        width: 200,
        textAlign: 'center',
    }
});

export default styles;