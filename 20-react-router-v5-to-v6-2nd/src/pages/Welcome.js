import {Link, Route, Routes} from 'react-router-dom';
import {Fragment} from "react";

const Welcome = () => {
  return (
    <section>
      <h1>The Welcome Page</h1>
      <Link to="new-user">New user</Link>
      <Routes>
        <Route path="new-user" element={<Fragment><p>Welcome, new user!</p>
          <Link to="../">Close New user</Link></Fragment>}/>
      </Routes>
    </section>
  );
};

export default Welcome;
