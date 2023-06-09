import React, {useEffect, useState} from 'react';
import arrivalInfoList from './data/arrival_info_list.json';
// import checkListService from './data/check_list_service.json';
// import checkListAcc from './data/check_list_acc.json';

const Hotelinfo = () => {
  const [checkListService, setCheckListService] = useState([]);
  const [checkListAcc, setCheckListAcc] = useState([]);

  const loadServiceData = async() => {
      //Query the API Gateway
      const resp = await fetch("https://ara3sp3nzj.execute-api.ap-northeast-2.amazonaws.com/Production/services");
      let jsonData = await resp.json();

      //Assign response data to our state variable
      setCheckListService(jsonData)
  }

  useEffect(() => {
      // Load the service data from the API Gateway
      loadServiceData();
  },[]);

  const loadAccessabilityData = async() => {
      //Query the API Gateway
      const resp = await fetch("https://ara3sp3nzj.execute-api.ap-northeast-2.amazonaws.com/Production/accessability");
      let jsonData = await resp.json();

      //Assign response data to our state variable
      setCheckListAcc(jsonData)
  }

  useEffect(() => {
      // Load the accessability data from the API Gateway
      loadAccessabilityData();
  },[]);

    return(
        <div className="scene" id="hotelinfo">
        <article className="heading">
          <h1>Essential Info</h1>
        </article>
        <article id="usefulinfo">
          <section id="arrivalinfo">
            <h2>Arrival Information</h2>
            <ul>
              {
                arrivalInfoList.map((data) => 
                  <li><strong>{data.title}</strong> {data.text}</li>    
                )
              }
            </ul>
          </section>
          <section className="checklist" id="services">
            <h2>Services and Amenities</h2>
            <p>Our services and amenities are designed to make your travel easy, your stay comfortable, and your experience one-of-a-kind.</p>
            <ul>
              {
                checkListService.map((data) => 
                  <li>{data.text}</li>
                )
              }
            </ul>
          </section>
          <section className="checklist" id="accessibility">
            <h2>Accessibility</h2>
            <p>We're committed to maintaining the same quality of service for every individual. We offer the following facilities for those with special needs:</p>
            <ul>
              {
                checkListAcc.map((data) =>
                  <li>{data.text}</li>
                )
              }
            </ul>
          </section>
        </article>
        <article id="greenprogram">
          <h2>Landon Green Program</h2>
          <p><strong>The Landon Hotel - London</strong> was recently renovated, and we considered the impact on the earth the entire way. From green building materials, to solar power, to energy-friendly lighting and appliances throughout the hotel - we’re saving energy in every socket, outlet, and switch. We’ve also initiated a recycling and composting program that reduces the load to local landfills, while providing valuable raw material for use in new products, or in the case of compost, for use in local gardens and landscapes.</p>
        </article>
      </div>
    )
}

export default Hotelinfo;