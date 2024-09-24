// import { useEffect, useState } from "react"



// const useFetch = (url, others={}) => {
//      const [data, setData] = useState([])
//      const [error, setError] = useState(null)
//      const [loading, setLoading] = useState(false)

//      const fetchData = async () => {
//         try {
//             const response = await fetch(url, {...others})
//             if(!response.ok) throw new Error(response.statusText)
//                 const result = await response.json()
//             if(result) {
//                 setData(result)
//                 setLoading(false)
//                 setError(null)
//             }
//         } catch(error) {
//             setLoading(false)
//             setError(error)
//         }
//      }

//      useEffect(()=> {
//         fetchData()
//      },[url])

//      return {
//         data, loading, error
//      }
// }

// export default useFetch