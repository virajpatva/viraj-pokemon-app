import React from "react";
function ListingCard({ displayer }) {
  return (
    <>
      {displayer.map((props) => (<div key={props.id} className='pokemon-card'>
        <div className="image">
          <img className='list-page-image' src={props.image_url} alt="" />
        </div>
        <div className="details">
          <div className="basic-details">
            <p><strong>Name : </strong>{props.name}</p>
            <p><strong>Height : </strong>{props.height}</p>
            <p><strong>Weight : </strong>{props.weight}</p>
          </div>
          <div className='ability-listing-page'>
            {props.ability.map((ab, index) => (<div key={index} className='ability'>{ab.ability.name}</div>))}
          </div>
        </div>
      </div>))
      }

    </>

  );
}

export default ListingCard;