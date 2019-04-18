import React from 'react';

const DynamicHelpCard = () => {
  return (
    <div className="Card uk-margin-small-bottom">
      <div className="uk-card uk-card-default uk-card-small uk-card-body">
          <div className="uk-card-body">
            <p>First input is values. Values must be separated by commas.</p>
            <p>Example: 1, 2, 3.</p>
            <p>Second input is dates. They must be sorted as n<sub>i</sub> {"<"}  n<sub>{"i+1"}</sub>. Dates must be separated by commas.</p>
            <p>Format: DD.MM.YY or only year.</p>
            <p>Example: 03.08.2011, 25.10.2011, 01.02.2012.</p>
            <div className="uk-card-footer">
            	<p>Amount of values and amount of dates must be identically!</p>
            </div>
          </div>
      </div>
    </div>
  )
}

export default DynamicHelpCard;