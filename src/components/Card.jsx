import React from 'react';

const Card = ({average, deviation, variance}) => {
  return (
    <div className="Card">
      <div className="uk-card uk-card-default uk-card-small uk-card-body">
        <div className="uk-card-header">
              <div className="uk-grid-small uk-flex-middle uk-grid">
                  <div className="uk-width-expand">
                      <h3 className="uk-card-title uk-margin-remove-bottom">Your result</h3>
                      <p className="uk-text-meta uk-margin-remove-top"></p>
                  </div>
              </div>
          </div>
          <div className="uk-card-body">
              <p>Average statistical: {average}</p>
              <p>Root mean square: {deviation}</p>
              <p>The variance value: {variance}</p>
          </div>
      </div>
    </div>
  )
}


export default Card;
