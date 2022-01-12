import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        marginTop: 50
    },

    header: {
        fontSize: 30,
        textAlign: 'center',
        fontWeight: 'bold',
        marginBottom: 25
    },

    box: {
        borderWidth: 1,
        borderRadius: 10,
        borderColor: 'gray',
        padding: 10,
        marginBottom: 25
    },

    row: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        fontWeight: 'bold',
        marginBottom: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },

    leftCol: {
        width: '40%',
    },

    rightCol: {
        width: '50%'
    },

    input: {
        borderWidth: 1,
        borderRadius: 5,
        borderColor: 'gray',
        padding: 10
    },

    button: {
        marginRight: 87.5,
        borderRadius: 5,
        backgroundColor: '#3992db',
        padding: 10,
        width: '25%'
    },

    buttonText: {
        color: 'white',
        textAlign: 'center'
    },

    show: {
        display: 'flex'
    },

    hide: {
        display: 'none'
    }
});

export {styles}