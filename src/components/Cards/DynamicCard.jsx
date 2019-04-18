import React from 'react';

const DynamicCard = ({average, deviation, variance, absIncrease}) => {
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
              <p>Average for interval time series: 
                <br/>
                <span className="uk-text-emphasis">{average}</span>
              </p>
              <p>Для неравного интервала: 
                <br/>
                <span className="uk-text-emphasis">{deviation}</span>
              </p>
              <p>Для равного интервала: 
                <br/>
                <span className="uk-text-emphasis">{variance}</span>
              </p>
              <p>Average absolute increase: 
                <br/>
                <span className="uk-text-emphasis">{absIncrease}</span>
              </p>
          </div>
      </div>
    </div>
  )
}

export default DynamicCard;
