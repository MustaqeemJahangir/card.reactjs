import React from "react";


const Card = ({title , description , image,location,time}) => {

return (
  <>
  <div className="mian-headier">
    <img src={image}  />
    <h2>{title}</h2>
    <h4>{description}</h4>
    
    <h5>{location}</h5>
  <h5>{time}</h5>
  </div>
  

  </>
)
}
export default Card;