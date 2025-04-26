import React from "react";

const TeamMemberCard = ({ member }) => {
  const { name, image, role, bio } = member;

  return (
    <div className="team-member-card">
      <img src={image} alt={name} className="member-image" />
      <div className="member-details">
        <h3 className="member-name">{name}</h3>
        <p className="member-role">{role}</p>
        <p className="member-bio">{bio}</p>
      </div>
    </div>
  );
};

export default TeamMemberCard;