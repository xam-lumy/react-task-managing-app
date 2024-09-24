import React from 'react'
import { useParams } from 'react-router-dom'

const RecipeDetails = () => {
    const params = useParams()
    const {id} = params
  return (
    <div>
        <h1>{`This is number ${id}`}</h1>
    </div>
  )
}

export default RecipeDetails