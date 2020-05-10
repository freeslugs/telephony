import React, { useEffect } from 'react';
import { useRouter } from 'next/router'
import { makeStyles } from '@material-ui/core/styles';
import {
  Container,
  CircularProgress,
  Typography,
  Box,
  Link,
  Grid,
  Avatar,
  Paper,
  TextField,
  SvgIcon,
  Fab,
  MicIcon,
  IconButton,
}  from '@material-ui/core';
import { Alert, AlertTitle } from '@material-ui/lab';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import {Howl, Howler} from 'howler';
import theme from '../theme'
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
  ' ': "Space",
  '@': "At",
  '.': "Period",
  ',': "Comma",
  ':': "Colon",
  ';': "Semicolon",
  '-': "Hyphen",
  '_': "Underscore",
  '!': 'Exclamation Mark',
  '?': 'Question Mark',
  "/": 'Forward Slash',
  '#': 'Hashtag',
  '$': "Dollar sign",
}

const colors = [
  '#1976D2',
  '#03A9F4',
  '#009688',
  '#4CAF50',
  '#8BC34A',
  '#9E9D24',
  '#FFAB00',
  '#FF3D00',
  '#795548',
  '#9C27B0',
  '#E91E63',
  '#f44336',
]

const voices = [
  'en-GB_KateVoice',
  'en-GB_KateV3Voice',
  'en-US_AllisonVoice',
  'en-US_AllisonV3Voice',
  'en-US_EmilyV3Voice',
  'en-US_HenryV3Voice',
  'en-US_KevinV3Voice',
  'en-US_LisaVoice',
  'en-US_LisaV3Voice',
  'en-US_MichaelVoice',
  'en-US_MichaelV3Voice',
  'en-US_OliviaV3Voice',
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
    backgroundColor: theme.palette.secondary.main,
    width: 60,
    height: 60
  },
  card: {
    padding: theme.spacing(1, 2), 
    marginRight: 10, 
    marginBottom: theme.spacing(1),
    minWidth: 40,
    textAlign: 'center'
  },
  textInput: {
    marginTop: theme.spacing(3), 
    display: 'flex',
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  mic: {
    alignSelf: 'center',
  }
}));

export default function Index(props) {
  const classes = useStyles(props);
  const [text, setText] = React.useState('');
  const [mp3, setMP3] = React.useState(null)
  const [loading, setLoading] = React.useState(false)
  
  const words = text.toUpperCase().split('').map(l => { 
    if(dictionary[l]) {
      return [ dictionary[l].toUpperCase(), Object.keys(dictionary).indexOf(l) % colors.length ]   
    } else {
      return [l.toUpperCase(), colors.length ]
    }
  })

  const getMP3 = () => {
    const query = words.map(w => w[0]).join(',+')
    const mp3URL = `/api/tts?text=${query}`;
    var sound = new Howl({
      src: [mp3URL],
      format: 'mp3',
      autoplay: true,
      // rate: 0.75,
      onload: () => setLoading(false)
    });
    setLoading(true)
    setMP3(sound)
  }

  return (
    <Container component="main" maxWidth="md">
      {
        null && <Alert severity="error" style={{position: 'absolute', top: theme.spacing(1), right: theme.spacing(1)}}>
          <AlertTitle>Error</AlertTitle>
          {error.message}
        </Alert>
      }
      
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>    
          <SvgIcon style={{width: 35, height: 35}}>
            <path fill={"#fff"} d="M12,8H4A2,2 0 0,0 2,10V14A2,2 0 0,0 4,16H5V20A1,1 0 0,0 6,21H8A1,1 0 0,0 9,20V16H12L17,20V4L12,8M15,15.6L13,14H4V10H13L15,8.4V15.6M21.5,12C21.5,13.71 20.54,15.26 19,16V8C20.53,8.75 21.5,10.3 21.5,12Z" />
          </SvgIcon>
        </Avatar>
        <Typography component="h1" variant="h3">
          Telephony
        </Typography>
        <Typography component="h1" variant="h5" style={{marginTop: theme.spacing(2)}}>
          Read email addresses aloud like a Lieutenant General <Link color="secondary" href="https://en.wikipedia.org/wiki/NATO_phonetic_alphabet">*</Link>
        </Typography>
        <Box className={classes.textInput} maxWidth={400} width={'100%'}>
          <TextField
            variant="outlined"
            color='primary'
            margin="none"
            style={{display: 'flex',flexGrow: 1, flexShrink: 1}}
            id="text"
            label="Email (or anything, really)"
            name="text"
            autoFocus
            onChange={e => {
              setLoading(false)
              setText(e.target.value)
            }}
          />
          <Fab color='secondary' aria-label="add"
            style={{marginLeft: 20, boxShadow: 'none'}} 
            disabled={text.length == 0}
            onClick={getMP3}
          >
            { loading ? <CircularProgress /> : <PlayArrowIcon fontSize="large" /> } 
          </Fab>
        </Box>
      </div>
      <Box style={{marginTop: theme.spacing(3), display: 'flex', flexDirection: 'row', flexWrap: 'wrap'}}>
        {
          words.map((w, i) => <Paper 
            key={i} 
            className={classes.card}
            style={{backgroundColor: colors[w[1]] }}
          >
            <Typography component="p" variant="h6">{w[0]}</Typography>
          </Paper>)
        }
      </Box>

      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
}


