import React from 'react'
import EmployeeCard from '../EmployeeCard/EmployeeCard'

const EmployeeList = ({employees}) => {
  return (
    <div>
        <ul>
            {
                employees.map(emp => {
                    return <li key={emp.id}>
                        <EmployeeCard 
                        name={emp.name} 
                        role={emp.role}
                        position={emp.position} />
                    </li>
                })
            }
        </ul>
    </div>
  )
}

export default EmployeeList