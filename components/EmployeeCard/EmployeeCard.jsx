import React from 'react'

const EmployeeCard = ({name, role, position}) => {
  return (
    <div>
      <h2>{name}</h2>
      <h2>{role}</h2>
      <h2>{position}</h2>
    </div>
  )
}

export default EmployeeCard