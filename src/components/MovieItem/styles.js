import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  container: {
        width: '200px',
        height: '400px',
        display: 'flex',
        boxSizing: 'border-box',
        flexDirection: 'column',
        justifyContent: 'center',
        backgroundColor: 'black',
        float: 'left',
        margin: '10px',
        boxShadow: '0px 0px 5px 3px rgb(0 0 0)',
        '& > img': {
          width: '100%',
          height: '300px',
          objectFit: 'contain',
        },
        '&:hover': {
          '& > img': {
            opacity: 0.6,
          },
          '& > #detail ': {
            '& > a': {
              color: 'blue',
            },
          },
        },
      },
      detail: {
        display: 'flex',
        flexDirection: 'column',
        padding: '10px 10px',
        '& > a': {
          color: 'white',
          padding: '10px 0 10px 0',
        },
      },
  }))

  export default useStyles
