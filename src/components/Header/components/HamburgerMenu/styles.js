import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  hamburgerMenu: {
    display: 'none',
    [theme.breakpoints.down('630')] :{
      display: 'block',
    },
  },
  icon: {
    color: 'white',
  },
  drawer: {
    height: 'calc(100% - 50px)',
    marginTop: '50px',
  },
  searchBox: {
    padding: '10px 20px',
  },
}))

export default useStyles
