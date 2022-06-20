import classes from './User.module.css';
import {Component} from "react";

class User extends Component {
  // constructor() {
  // }
  
  /**
   * specific method expected from react
   */
  render() {
    return <li className={classes.user}>{this.props.name}</li>;
  }
}

// functional
// const User = (props) => {
//   return <li className={classes.user}>{props.name}</li>;
// };

export default User;
