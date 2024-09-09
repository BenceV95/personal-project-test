import React from 'react'
import EmployeeList from '@/components/EmployeeList/EmployeeList'

const Page = () => {

  const employees = [
    {
      id: 1,
      name: "asd",
      role: "qwe",
      position: "abc"
    }
  ]

  return (
    <EmployeeList employees={employees} />
  )
}

export default Page