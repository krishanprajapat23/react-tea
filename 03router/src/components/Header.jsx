import { Link, NavLink } from "react-router-dom"

function Header({logo}) {
    return (
        <header>
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/"><img src={logo} alt="Router" width="50"/></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mx-lg-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink className={({isActive}) => isActive ? "nav-link active" : "nav-link"} to="/">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className={({isActive}) => isActive ? "nav-link active" : "nav-link"} to="about">About</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className={({isActive}) => isActive ? "nav-link active" : "nav-link"} to="contact">Contact</NavLink>
                            </li>
                        </ul>
                        <form className="d-flex">
                            <Link to="/github" className="btn btn-theme">Profile</Link>
                        </form>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header
