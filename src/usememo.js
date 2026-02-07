import React, { useMemo, useState } from 'react'

export default function Usememo() {

    const [numbers] = useState([10.20,30])
    const total = useMemo(() => numbers.reduce((a,b) => a+b ,0),[numbers])

    const [names] =useState(['John','Doe','Smith','Jane'])
    const sortedNames = useMemo(()=> [...names].sort(),[names]) 
  return (
    <div>
        <h1 style={{textAlign:'center'}}>Use Memo </h1>
        <p>Total : {total}</p>
        <p>names: {names.join(', ')}</p>
        <p>sorted names: {sortedNames.join(', ')}</p>
    </div>

  )
}
