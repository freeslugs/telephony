import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

const Copyright = () => <Typography variant="body2" color="textSecondary" align="center">
  {'Copyright © '}
  <Link color="inherit" href="https://github.com/freeslugs">
    Gilad Penn
  </Link>{' 2020.'}
</Typography>

export default Copyright;