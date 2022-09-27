import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import {Link} from 'react-router-dom';

// const Navbar = () => {
//   return (
//     <nav className="navbar">
//       <h1>The Dojo Blog</h1>
//       <div className="links">
//         <a href="/">Home</a>
//         <a href="/create" style={{ 
//           color: 'white', 
//           backgroundColor: '#f1356d',
//           borderRadius: '8px' 
//         }}>New Blog</a>
//       </div>
//     </nav>
//   );
// }
 
// export default Navbar;

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const Navbar = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
          <Container>
            <Toolbar>
                <Typography variant="h6" className={classes.title}>
            <Button color="inherit" component={ Link } to="/">Journal Entries</Button>
                </Typography>
            <Button color="inherit" component={Link} to="/entries">List Entries</Button>
            <Button color="inherit" component={Link} to="/entries/new">Create Entries</Button>
            </Toolbar>
          </Container>
      </AppBar>
    </div>
  );
}

export default Navbar;