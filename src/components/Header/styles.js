import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: 'black',
    borderRadius: 0,
    padding: '0 20px',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  searchBox: {
    [theme.breakpoints.down('630')] :{
      display: 'none',
    },
  },
}))

export default useStyles
