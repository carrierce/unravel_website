import React from 'react';

const UpcomingShowItem = props => {
  return (
    <div key={props.index}>
      <h4>SHOW</h4>
      <h5>{props.upcomingshow.posterImageLink}</h5>
      <h5>{props.upcomingshow.showDate}</h5>
      <h5>{props.upcomingshow.venue}</h5>
      <h5>{props.upcomingshow.showBlurb}</h5>
      <h5>{props.upcomingshow.ticketUrl}</h5>
      <br />
    </div>
  );
};

export default UpcomingShowItem;
