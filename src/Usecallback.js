import React, { useCallback, useMemo, useState } from 'react'

function SortName({list, SortFun}){
    const sortedlist =useMemo (() => {
      return  [...list].sort(SortFun)
    },[list, SortFun])

    return <div>sorted names: {sortedlist.join(', ')}</div>
}

export default function Usecallback() {
        const [names] =useState(['John','Doe','Smith','Jane'])

        const InverseSort = useCallback( (a,b) => a.localeCompare(b) * -1,[])
  return (
    <div>
    <h1 style={{textAlign:'center'}}>UseCallback</h1>

<div><SortName list={names} SortFun={InverseSort}/></div>
</div>
  )
}
