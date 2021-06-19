import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
    iconBox: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        '& > img': {
          maxHeight: '150px',
          paddingBottom: '10px',
          objectFit: 'contain',
        },
        '& > p': {
          textAlign: 'center',
          fontSize: '20pt',
        },
      },
  }))

  export default useStyles
