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

const HomePage = (props) => {
  return <MeetupList meetups={props.meetups}/>;
};

/**
 *  only in pages folder
 *  executes during build process on server - this code is never in the client
 *  returned props go to props in component function on the first render cycle - therefore pre-rendering has already data (for SEO)
 * @returns {Promise<{props: {meetups: [{image: string, address: string, description: string, id: string, title: string},{image: string, address: string, description: string, id: string, title: string}]}}>}
 */
export async function getStaticProps() {
  // fetch data from API / database
  return {
    props: {
      meetups: DUMMY_MEETUPS
    },
    revalidate: 10
  };
}

// /**
//  * Not during the build process but on the server on every request - this code is never in the client  -credentials here would be "save"
//  * @returns {Promise<void>}
//  */
// export async function getServerSideProps(context) {
//   const req = context.req; // eg. auth
//   const res = context.res;
//
//   // fetch data from API / database
//   return {
//     props: {
//       meetups: DUMMY_MEETUPS
//     },
//   };
// }

export default HomePage;
