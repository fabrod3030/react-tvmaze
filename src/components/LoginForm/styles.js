import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        boxSizing: 'border-box',
        padding: '0 20px',
    },
    row: {
        position: 'relative',
        width: '100%',
        boxSizing: 'border-box',
        paddingBottom: '20px',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderRadius: '20px',
        '& > p': {
            color: 'black',
            width: '100%',
            textAlign: 'center',
            '& > a': {
                color: 'blue',
            },
        },
    },
    passwordToggle: {
        position: 'absolute',
        right: '2px',
        width: '15px',
        height: '15px',
        backgroundColor: 'white',
        '&:hover': {
            backgroundColor: 'white',
        },
    },
    loginButton: {
        backgroundColor: 'black',
        color: 'white',
        marginTop: '40px',
        width: '100%',
        '&:hover': {
            color: 'black',
            fontWeight: 'bold',
        },
    },
}))

export default useStyles