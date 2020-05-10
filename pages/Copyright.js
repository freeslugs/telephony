import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

const Copyright = () => <Typography variant="body2" color="textSecondary" align="center">
  {'Copyright © '}
  <Link color="inherit" href="https://bauhauslabs.com/">
    Bauhaus Labs
  </Link>{' 2020.'}
</Typography>

export default Copyright;