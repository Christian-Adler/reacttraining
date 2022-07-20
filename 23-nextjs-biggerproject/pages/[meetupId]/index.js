import MeetupDetail from "../../components/meetups/MeetupDetail";
import {MongoClient, ObjectId} from "mongodb";
import {Fragment} from "react";
import Head from "next/head";

const MeetupDetails = (props) => {
  return <Fragment>
    <Head>
      <title>{props.meetupData.title}</title>
      <meta name="description" content={props.meetupData.description}/>
    </Head>
    <MeetupDetail img={props.meetupData.image} title={props.meetupData.title}
                  address={props.meetupData.address} description={props.meetupData.description}/>
  </Fragment>;
};

export async function getStaticProps(context) {
  // fetch data for a single meetup
  
  const meetupId = context.params.meetupId;
  
  // in the terminal of the server:
  console.log('meetupId', meetupId);
  
  const client = await MongoClient.connect('mongodb+srv://systemUser:DwtvpgWjHvL14TNF@cluster0.1boc8vq.mongodb.net/meetups?retryWrites=true&w=majority');
  const db = client.db();
  
  const meetupsCollection = db.collection('meetups');
  const selectedMeetup = await meetupsCollection.findOne({ _id: ObjectId(meetupId) });
  console.log('selectedMeetup', selectedMeetup);
  client.close();
  
  return {
    props: {
      meetupData: {
        id: selectedMeetup._id.toString(),
        image: selectedMeetup.image,
        title: selectedMeetup.title,
        address: selectedMeetup.address,
        description: selectedMeetup.description
      }
    }
  }
}

// needed if used getStaticProps in a dynamic [] page
export async function getStaticPaths() {
  
  const client = await MongoClient.connect('mongodb+srv://systemUser:DwtvpgWjHvL14TNF@cluster0.1boc8vq.mongodb.net/meetups?retryWrites=true&w=majority');
  const db = client.db();
  
  const meetupsCollection = db.collection('meetups');
  const meetups = await meetupsCollection.find({}, { _id: 1 }).toArray();
  
  client.close();
  
  return {
    fallback: false,
    paths: meetups.map((meetup) => ({ params: { meetupId: meetup._id.toString() } }))
  }
}

export default MeetupDetails;
