import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import Paper from '@material-ui/core/Paper';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import TextField from '@material-ui/core/TextField';
import theme from './theme'
import Copyright from './Copyright';

const dictionary = { 
  A: "Alfa",
  B: "Bravo",
  C: "Charlie",
  D: "Delta",
  E: "Echo",
  F: "Foxtrot",
  G: "Golf",
  H: "Hotel",
  I: "India",
  J: "Juliett",
  K: "Kilo",
  L: "Lima",
  M: "Mike",
  N: "November",
  O: "Oscar",
  P: "Papa",
  Q: "Quebec",
  R: "Romeo",
  S: "Sierra",
  T: "Tango",
  U: "Uniform",
  V: "Victor",
  W: "Whiskey",
  X: "Xray",
  Y: "Yankee",
  Z: "Zulu",
  '@': "At",
  '.': "Period"
}

const colors = [
  '#1976D2',
  '#03A9F4',
  '#00ACC1',
  '#009688',
  '#4CAF50',
  '#8BC34A',
  '#9E9D24',
  '#FFA000',
  '#FF5722',
  '#795548',
  '#9C27B0',
  '#E91E63',
  '#f44336',
]

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.light,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  card: {
    padding: theme.spacing(0, 1), 
    marginRight: 10, 
    marginBottom: theme.spacing(1),
    minWidth: 40,
    textAlign: 'center'
  }
}));

export default function Index(props) {
  const classes = useStyles(props);
  const [text, setText] = React.useState('');

  const words = text.toUpperCase().split('').map(l => { 
    if(dictionary[l]) {
      return [ dictionary[l].toUpperCase(), Object.keys(dictionary).indexOf(l) % colors.length ]   
    } else {
      return [l.toUpperCase(), colors.length ]
    }
  })

  return (
    <Container component="main" maxWidth="md">
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h3">
          Telephony
        </Typography>
        <Typography component="h1" variant="h5" style={{marginTop: theme.spacing(1)}}>
          Read email addresses aloud like a Lieutenant General 
        </Typography>
        <form className={classes.form} noValidate width="xs">
          <TextField
            variant="outlined"
            color='primary'
            margin="normal"
            // required
            fullWidth
            id="word"
            label="Word"
            name="word"
            autoFocus
            onChange={e => setText(e.target.value)}
          />
        </form>
      </div>
      <Box style={{marginTop: theme.spacing(1 ), display: 'flex', flexDirection: 'row', flexWrap: 'wrap'}}>
        {
          words.map((w, i) => <Paper 
            key={i} 
            className={classes.card}
            style={{backgroundColor: colors[w[1]] }}
          >
            <p>{w[0]}</p>
          </Paper>)
        }
      </Box>

      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
}


