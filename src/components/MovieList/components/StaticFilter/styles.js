import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
staticFilter: {
    display: 'none',
    position: 'fixed',
    top: '150px',
    right: '10px',
    [theme.breakpoints.down('630')] :{
      display: 'block',
    },
  },
  button: {
      backgroundColor: 'black',
      color: 'white',
  },
  filterBox: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: 'gray',
    alignItems: 'center',
    borderRadius: '20px',
    padding: '20px 40px',
    [theme.breakpoints.up('630')]: {
      display: 'none',
    },
  },
  inputBox: {
    padding: '0 10px',
  },
  filter: {
    backgroundColor: 'black',
    color: 'white',
  },
}))

export default useStyles
