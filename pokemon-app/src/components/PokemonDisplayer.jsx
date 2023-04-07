import React from "react";
function Pokemon({ details }) {
  const ability = details.ability || [];
  return (
    <>
      <div className='pokemon-details'>
        <div >
          <img className='pokemon-card-image' src={details.image_url} alt="" />
        </div>
        <div className="details">
          <div className="basic-details">
            <ul>
              <li><strong>Name : </strong>{details.name}</li>
              <li><strong>Height : </strong>{details.height}</li>
              <li><strong>Weight : </strong>{details.weight}</li>
              <li><strong>Base Experience : </strong>{details.base_experience}</li>
              <li><strong>Order : </strong>{details.order}</li>
            </ul>
            <div className="abilitybox">
              {ability.map((ab, index) => (<div key={index} className='ability'>{ab.ability.name}</div>))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Pokemon;