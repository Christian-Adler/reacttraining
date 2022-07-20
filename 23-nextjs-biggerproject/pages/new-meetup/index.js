import NewMeetupForm from "../../components/meetups/NewMeetupForm";
import {useRouter} from "next/router";
import {Fragment} from "react";
import Head from "next/head";

function NewMeetupPage() {
  const router = useRouter();
  const addMeetupHandler = async (enteredMeetup) => {
    console.log(enteredMeetup);
    const response = await fetch('/api/new-meetup', {
      method: 'POST',
      body: JSON.stringify(enteredMeetup),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    
    const data = await response.json();
    console.log(data);
    
    router.replace('/');
  };
  
  return <Fragment>
    <Head>
      <title>Create new Meetup</title>
      <meta name="description" content="Some description for Search Engine"/>
    </Head>
    <NewMeetupForm onAddMeetup={addMeetupHandler}/>
  </Fragment>;
}

export default NewMeetupPage;
