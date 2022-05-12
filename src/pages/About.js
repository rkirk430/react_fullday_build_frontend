import { useState, useEffect } from "react";

function About(props) {
    // Create State to Hold About Data
    const [about, setAbout] = useState(null);

    // Create function to make API Call
    const getAboutData = async () => {
        //Make API Call and Get Response
        const response = await fetch(props.URL + "about");
        //Turn Response into Javascript Object
        const data = await response.json();
        //Set the About State to the Data
        setAbout(data);
    };

    //Make an Initial call for the data inside a useEffect, so it only happens once on a component load
    useEffect(() => getAboutData(), []);

    //Define a function that will return the JSX needed once we get the data
    const loaded = () => (
        <div>
            <h2> {about.name}</h2>
            <h2> {about.email} </h2>
            <p> {about.bio} </p>
        </div>
    );

    //If Data arrives return the result of loaded, if not, an h1 that says loading
    return about ? loaded() : <h1>Loading...</h1>
  }
  
  export default About;