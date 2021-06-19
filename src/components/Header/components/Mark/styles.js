import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  headerMark: {
    '& > a > img': {
        height: '50px',
        objectFit: 'contain',
    },
    [theme.breakpoints.down('630')] :{
      display: 'none',
    },
  },
}))

export default useStyles
