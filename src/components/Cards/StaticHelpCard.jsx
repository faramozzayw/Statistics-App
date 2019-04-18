import React from 'react';

const StaticHelpCard = () => {
  return (
    <div className="Card uk-margin-small-bottom">
      <div className="uk-card uk-card-default uk-card-small uk-card-body">
          <div className="uk-card-body">
            <p>First input is values. They must be sorted as n<sub>i</sub> {"<"}  n<sub>{"i+1"}</sub>. Values must be separated by commas.</p>
            <p>Example: 1,2,3,4,5,6</p>
            <p>First input is frequency. Frequencies must be separated by commas.</p>
            <p>Example: 3,6,7,11,5,9</p>
            <div className="uk-card-footer">
            	<p>Amount of values and amount of  frequencies must be identically!</p>
            </div>
          </div>
      </div>
    </div>
  )
}

export default StaticHelpCard;
