import React from "react";

import Skeleton from 'react-loading-skeleton';

const SkeletonBadgeLists = () => {
  return (
    <div className="Badges__container">
        <div className="BadgesList">
          <ul className="list-unstyled">
            {Array(9)
              .fill()
              .map((item, index) => (
                <li key={index}>

                  <div className="card BadgesListItem">
      
                    <div className="row">
                      <div className="col-2 col-sm-2">
                        <Skeleton circle="true" height={80} width={80} />
                      </div>
                      <div className="col-10 col-sm-10">
                          <h5 className="card-title">
                            <Skeleton height={30} width={`100%`}   />
                          </h5>

                          <Skeleton height={20} width={`100%`}  count={2}/>
                          
                        
                      </div>
                    </div>
                  </div>
                </li>
            ))}
          </ul>
              
        </div>
      </div>
            
         
  );

}

export default SkeletonBadgeLists;