import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Feature(props) {
     return (
          <div className="a-feature text-center">
               <div className="icon-container">
                    <FontAwesomeIcon icon={props.icon} />
               </div>
               <h3 className="heading">{props.heading}</h3>
               <p className="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, nihil. Veniam doloribus saepe accusantium odio, consequatur, iusto et neque aperiam, eveniet autem ad.</p>
          </div>
     );
}
export default Feature;