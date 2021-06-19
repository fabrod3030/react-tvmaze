import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      height: '100%',
      boxSizing: 'border-box',
      '& > *': {
        margin: theme.spacing(1),
        width: theme.spacing(16),
        height: theme.spacing(16),
      },
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'black',
      minWidth: '300px',
    },
    container: {
        width: '350px',
        height: '500px',
        boxSizing: 'border-box',
        padding: '20px 0',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        backgroundColor:'white',
        borderRadius: '20px',
        boxShadow: '0px 0px 14px 9px rgb(199 199 199 / 40%)',
        [theme.breakpoints.down('400')] :{
          width: 'calc(100% - 20px)',
          height: 'calc(100% - 40px)',
        },
    },
  }))

  export default useStyles
