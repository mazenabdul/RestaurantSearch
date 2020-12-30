import {useState, useEffect} from 'react'
import yelp from '../api/yelp'

export default () => {
   //State to store the fetched businesses
   const [results, setResults] = useState([])

   //State to manage error logs
   const [errors, setErrors] = useState('')
 
   //Function to request the Yelp API with the entered search term
   const searchApi = async (enteredTerm) => {
     try {
       const response = await yelp.get('/search', {
         params: {
           term: enteredTerm,
           location: 'Toronto',
           limit: 50
         }
       })
       setResults(response.data.businesses)
   } catch (err) {
     setErrors('Oops! Something went wrong. Try again.')
   }
 }
 
   //By default, when the app runs for the first time, it should display some results on load
   useEffect(() => {
     searchApi('Pasta')
   },[])

   return [searchApi, results, errors]
}