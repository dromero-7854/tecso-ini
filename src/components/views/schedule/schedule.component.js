import React from 'react';
import { connect } from 'react-redux'
import ViewTitle from '../../common/view-title/view-title.component';

const Schedule = (props) => {
  
  const { user } = props; 
  console.log(user);
  
  return (
    <div>
      <ViewTitle title='Agenda' />
    </div>
  );
};

const mapStateToProps = (state) => {
  const { user } = state.auth;
  return {
    user
  };
}

export default connect(mapStateToProps)(Schedule);