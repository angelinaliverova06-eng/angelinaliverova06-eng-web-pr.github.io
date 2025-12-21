import React from 'react';
import '../components.css';

function TeamMember({ member }) {
  return (
    <div className="team-member">
      <h3>{member.name} ({member.role})</h3>
      <p>{member.description}</p>
    </div>
  );
}

export default TeamMember;