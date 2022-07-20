import MeetupDetail from "../../components/meetups/MeetupDetail";

const MeetupDetails = () => {
  return <MeetupDetail img="https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/HNL_Wiki_Wiki_Bus.jpg/1280px-HNL_Wiki_Wiki_Bus.jpg" title="Some title"
                       address="some address" description="desc"/>
};

export async function getStaticProps(context) {
  // fetch data for a single meetup
  
  const meetupId = context.params.meetupId;
  
  // in the terminal of the server:
  console.log('meetupId', meetupId);
  
  return {
    props: {
      id: meetupId,
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/HNL_Wiki_Wiki_Bus.jpg/1280px-HNL_Wiki_Wiki_Bus.jpg",
      title: "Some title",
      address: "some address",
      description: "desc"
    }
  }
}

// needed if used getStaticProps in a dynamic [] page
export async function getStaticPaths() {
  return {
    fallback: false,
    paths: [
      { params: { meetupId: 'm1' } },
      { params: { meetupId: 'm2' } }
    ]
  }
}

export default MeetupDetails;
