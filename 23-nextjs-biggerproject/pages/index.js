import MeetupList from "../components/meetups/MeetupList";
import {useEffect, useState} from "react";

const DUMMY_MEETUPS = [
  {
    id: 'm1', title: 'first meetup', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/HNL_Wiki_Wiki_Bus.jpg/1280px-HNL_Wiki_Wiki_Bus.jpg',
    address: 'Some Addres 1, 124234 City', description: "First desc"
  },
  {
    id: 'm2', title: 'second meetup', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/HNL_Wiki_Wiki_Bus.jpg/1280px-HNL_Wiki_Wiki_Bus.jpg',
    address: 'Some Addres 2, 124234 City', description: "Sec desc"
  },
];

const HomePage = () => {
  const [loadedMeetups, setLoadedMeetups] = useState([]);
  useEffect(() => {
    // send http request fetch data
    setLoadedMeetups(DUMMY_MEETUPS);
  }, []);
  
  
  return <MeetupList meetups={loadedMeetups}/>;
};

export default HomePage;
