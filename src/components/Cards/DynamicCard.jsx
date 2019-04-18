import React from 'react';

const DynamicCard = ({average, momentAverage, absIncrease, equal}) => {
  return (
    <div className="Card">
      <div className="uk-card uk-card-default uk-card-small uk-card-body uk-margin">
        <div className="uk-card-header">
              <div className="uk-grid-small uk-flex-middle uk-grid">
                  <div className="uk-width-expand">
                      <h3 className="uk-card-title uk-margin-remove-bottom">Your result</h3>
                      <p className="uk-text-meta uk-margin-remove-top"></p>
                  </div>
              </div>
          </div>
          <div className="uk-card-body">
              <span className="uk-text-warning">The result may not be entirely accurate!</span>
              <p>Average for interval time series: 
                <br/>
                <span className="uk-text-emphasis">{average}</span>
              </p>
              <p>{`${equal ? "Average for a moment dynamic range with unequal intervals: " : "Average for a moment dynamic range with equal intervals:" }`}
                <br/>
                <span className="uk-text-emphasis">{momentAverage}</span>
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
