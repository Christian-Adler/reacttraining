// server side code!

// /api/new-meetup

/*
MongoDB Atlas
systemUser
DwtvpgWjHvL14TNF
mongodb+srv://systemUser:<password>@cluster0.1boc8vq.mongodb.net/?retryWrites=true&w=majority
 */


import {MongoClient} from "mongodb";

async function handler(req, res) {
  const method = req.method;
  if (method === 'POST') {
    const data = req.body;
    //const { title, image, address, description } = data;
    // to do try catch
    const client = await MongoClient.connect('mongodb+srv://systemUser:DwtvpgWjHvL14TNF@cluster0.1boc8vq.mongodb.net/meetups?retryWrites=true&w=majority');
    const db = client.db();
    
    const meetupsCollection = db.collection('meetups');
    const result = await meetupsCollection.insertOne(data);
    
    console.log(result);
    
    await client.close();
    
    res.status(201).json({ message: 'Meetup inserted!' });
  }
}

export default handler;
