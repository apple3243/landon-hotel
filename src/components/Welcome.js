import React, {useState, useEffect} from 'react';
// import galleryList from './data/gallery_list.json'

const Welcome = () => {
    const [galleryList, setGalleryList] = useState([]);

    const loadGalleryListData = async() => {
        //Query the API Gateway
        const resp = await fetch("https://ara3sp3nzj.execute-api.ap-northeast-2.amazonaws.com/Production/gallery_lists");
        let jsonData = await resp.json();

        //Assign response data to our state variable
        setGalleryList(jsonData)
    }

    useEffect(() => {
        // Load the menu links data from the API Gateway
        loadGalleryListData();
    },[]);

    return(
        <div className="scene" id="welcome">
          <article className="content">
            <div className="gallery">
              {
                galleryList.map((data) =>
                  <img className={data.class} src={data.src} alt={`Intro Gallery ${data.alt} Sample Pictures`}/>
                )
              }
            </div>
            <h1>Welcome to the Landon&nbsp;Hotel</h1>
            <p>The original Landon perseveres after 50 years in the heart of West London. The West End neighborhood has something for everyone—from theater to dining to historic sights. And the not-to-miss Rooftop Cafe is a great place for travelers and locals to engage over drinks, food, and good&nbsp;conversation. &nbsp;To learn more about the Landon Hotel in the West End, browse our website and <a href="files/landon_information_sheet_London.pdf">download our handy information sheet</a>.</p>
          </article>
        </div>
    )
}

export default Welcome;