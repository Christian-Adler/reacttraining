import {Component, Fragment} from 'react';
import Users from './Users';
import classes from './UserFinder.module.css'
import UsersContext from "../store/users-context";
import ErrorBoundary from "./ErrorBoundary";

class UserFinder extends Component {
  // only one static context possible
  static contextType = UsersContext;
  
  constructor() {
    super();
    this.state = {
      filteredUsers: [],
      searchTerm: ''
    };
  }
  
  /**
   * initialy rendered the first time
   * runs only once = would be useEffect ohne Dependencies
   */
  componentDidMount() {
    // send http request
    this.setState({ filteredUsers: this.context.users });
  }
  
  /**
   * Component is reevaluated
   * @param prevProps
   * @param prevState
   * @param snapshot
   */
  componentDidUpdate(prevProps, prevState, snapshot) {
    // Wuerde endlos-Loop erzeugen, da durch Status-Aenderung ja jedes mal didUpdate wieder aufgerufen wuerde.
    // this.setState({ filteredUses: DUMMY_USERS.filter((user) => user.name.includes(searchTerm)) })
    // Daher pruefen, ob ueberhaupt ein State-update notwendig ist:
    if (prevState.searchTerm !== this.state.searchTerm) // Enstrpricht den dependencies in useEffect
      this.setState({ filteredUsers: this.context.users.filter((user) => user.name.includes(this.state.searchTerm)) })
  }
  
  searchChangeHandler(event) {
    this.setState({ searchTerm: event.target.value });
  }
  
  render() {
    return (
      <Fragment>
        <div className={classes.finder}>
          <input type='search' onChange={this.searchChangeHandler.bind(this)}/>
        </div>
        <ErrorBoundary>
          <Users users={this.state.filteredUsers}/>
        </ErrorBoundary>
      </Fragment>
    );
  }
}

// const UserFinder = () => {
//   const [filteredUsers, setFilteredUsers] = useState(DUMMY_USERS);
//   const [searchTerm, setSearchTerm] = useState('');
//
//   useEffect(() => {
//     setFilteredUsers(
//       DUMMY_USERS.filter((user) => user.name.includes(searchTerm))
//     );
//   }, [searchTerm]);
//
//   const searchChangeHandler = (event) => {
//     setSearchTerm(event.target.value);
//   };
//
//   return (
//     <Fragment>
//       <div className={classes.finder}>
//         <input type='search' onChange={searchChangeHandler}/>
//       </div>
//       <Users users={filteredUsers}/>
//     </Fragment>
//   );
// };

export default UserFinder;
