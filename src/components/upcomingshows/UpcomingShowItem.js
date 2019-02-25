import React from 'react';
import EditShow from './EditShow';

const UpcomingShowItem = props => {
  return (
    <div className="ui item" key={props.index}>
      <br />
      <hr />
      <h4>SHOW</h4>
      <h5>{props.upcomingshow._id}</h5>
      <h5>{props.upcomingshow.posterImageLink}</h5>
      <h5>{props.upcomingshow.showDate}</h5>
      <h5>{props.upcomingshow.venue}</h5>
      <h5>{props.upcomingshow.showBlurb}</h5>
      <h5>{props.upcomingshow.ticketUrl}</h5>
      <EditShow
        editupcomingshow={props.editupcomingshow}
        showinfo={props.upcomingshow}
      />
      <br />
    </div>
  );
};

export default UpcomingShowItem;
