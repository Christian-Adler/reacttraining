import {Component, Fragment} from 'react';
import Users from './Users';
import classes from './UserFinder.module.css'

const DUMMY_USERS = [
  { id: 'u1', name: 'Max' },
  { id: 'u2', name: 'Manuel' },
  { id: 'u3', name: 'Julie' },
];

class UserFinder extends Component {
  constructor() {
    super();
    this.state = {
      filteredUsers: DUMMY_USERS,
      searchTerm: ''
    };
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
      this.setState({ filteredUsers: DUMMY_USERS.filter((user) => user.name.includes(this.state.searchTerm)) })
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
        <Users users={this.state.filteredUsers}/>
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
