import {Link} from 'react-router-dom'

function Error404() {
  return (
    <div className='text-center py-4 my-4'>
        <img src="https://img.freepik.com/free-vector/error-404-concept-illustration_114360-1811.jpg?ga=GA1.1.2112457093.1716619292&semt=ais_hybrid" width="300px" alt="" />
        <h2 className='fw-bold my-3'>Page Not Found</h2>
        <Link to="/" className="btn btn-theme">Home</Link>
    </div>
  )
}

export default Error404
