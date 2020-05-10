import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

const Copyright = () => <Typography variant="body2" color="textSecondary" align="center">
  {'Inspired by my mom. Copyright © '}
  <Link color="inherit" href="https://github.com/freeslugs">
    Gilad Penn
  </Link>{' 2020.'}
  <Link color="inherit" href="https://github.com/freeslugs/telephony">
  	100% open source
  </Link>
</Typography>

export default Copyright;