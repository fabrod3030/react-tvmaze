import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
      filterContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        padding: '20px 40px',
        justifyContent: 'flex-end',
        [theme.breakpoints.between('630', '900')]: {
          justifyContent: 'center',
        },
        [theme.breakpoints.down('630')]: {
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
