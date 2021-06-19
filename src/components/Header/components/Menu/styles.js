import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  headerMenu: {
    height: '100%',
    '& > *': {
      color: 'white',
    },
    '& > ul': {
      display: 'flex',
      alignItems: 'center',
      '& > *': {
        padding: '0 20px',
        cursor: 'pointer',
      },
    },
    [theme.breakpoints.down('630')] :{
      display: 'none',
    },
  },
}))

export default useStyles
