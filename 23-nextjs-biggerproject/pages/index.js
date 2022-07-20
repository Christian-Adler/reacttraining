import MeetupList from "../components/meetups/MeetupList";
import {MongoClient} from "mongodb";

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
  
  const client = await MongoClient.connect('mongodb+srv://systemUser:DwtvpgWjHvL14TNF@cluster0.1boc8vq.mongodb.net/meetups?retryWrites=true&w=majority');
  const db = client.db();
  
  const meetupsCollection = db.collection('meetups');
  const meetups = await meetupsCollection.find().toArray();
  
  client.close();
  
  return {
    props: {
      meetups: meetups.map(meetup => ({
        id: meetup._id.toString(),
        title: meetup.title,
        image: meetup.image,
        address: meetup.address
      }))
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
