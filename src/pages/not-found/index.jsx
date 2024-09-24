import React from 'react'
import { Link } from 'react-router-dom'

const NotFound= () => {
  return (
    <div>
        <h1>Sorry Page Not Found</h1>
        <Link to={'/recipe'}>Go to recipe list</Link>
    </div>
  )
}

export default NotFound