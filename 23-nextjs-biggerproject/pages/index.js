import MeetupList from "../components/meetups/MeetupList";

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
  return <MeetupList meetups={DUMMY_MEETUPS}/>;
};
export default HomePage;
