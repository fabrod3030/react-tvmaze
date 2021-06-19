import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  inputContainer: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    [theme.breakpoints.down('350')] :{
      flexDirection: 'column',
    },
  },
  inputSection: {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    '& > input': {
        height: '25px',
    },
  },
  icon: {
    position: 'absolute',
    right: 1,
    padding: 0,
    height: '25px',
    width: '25px',
    backgroundColor: 'white',
    '&:hover': {
      backgroundColor: 'white',
    },
  },
}))

export default useStyles
