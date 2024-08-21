import React from 'react';

const UserSelector = ({ setUserRole }) => {
  return (
    <div className="user-selector">
      <h3>Select Your Role</h3>
      <button onClick={() => setUserRole('traveler')}>Traveler</button>
      <button onClick={() => setUserRole('farmer')}>Farmer</button>
      <button onClick={() => setUserRole('event-planner')}>Event Planner</button>
    </div>
  );
};

export default UserSelector;
