import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
function ListingCard({ displayer }) {
  const [nav, setNav] = useState('/');
  const navigate = useNavigate();
  useEffect(() => {
    navigate(nav);
  }, [nav])
  return (
    <>
      {displayer.map((props) => (<div key={props.id} className='pokemon-card' onClick={() => setNav(`/listpokemon/${props.id}`)}>
        <div>
          <img className='pokemon-card-image' src={props.image_url} alt="" />
        </div>
        <div className="pokemon-card-details">
          <div className="basic-details">
            <p><strong>Name : </strong>{props.name}</p>
            <p><strong>Height : </strong>{props.height}</p>
            <p><strong>Weight : </strong>{props.weight}</p>
          </div>
          <div className='pokemon-card-details-ability'>
            {props.ability.map((ab, index) => (<div key={index} className='ability'>{ab.ability.name}</div>))}
          </div>
        </div>
      </div>))
      }
    </>

  );
}

export default ListingCard;