import { Link } from "react-router-dom"

function Footer() {
  return (
    <footer className="text-center small mt-auto">
        <div className="container-lg container-fluid">
            <Link to="/" className="text-dark fw-bold fs-6 py-0">Router</Link>
            <p>Copyright @ {new Date()?.getFullYear()}</p>
        </div>
    </footer>
  )
}

export default Footer
