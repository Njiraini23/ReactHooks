import React, {useState} from 'react'
import useDocumentTitle from '../hooks/useDocumentTitle'

function DocTiteOne() {
  const [count, seCount] = useState(0)

  useDocumentTitle(count)

  return (
    <div>
      <button onClick={ ()=> seCount(count + 1)}>Count - {count} </button>
    </div>
  )
}

export default DocTiteOne
