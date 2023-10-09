import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { setUser } from "../redux/loginSlice";

export default function Navbar(){

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const userLoged = useSelector((state:any)=> state.loginRedux)

    const dispatch = useDispatch();

    function logout(){
        dispatch(setUser({
            "id":-1,
            "email":'',
            "name":'',
            "pass":''
        }))

    }

    return(

        <nav className="navbar navbar-expand-sm bg-body-tertiary">
            <div className="container-fluid">
            <a className="navbar-brand" href="#">Navbar</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                    <Link className="nav-link active"  to="/">Home</Link>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Link</a>
                </li>
                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Dropdown
                    </a>
                    <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="#">Action</a></li>
                    <li><a className="dropdown-item" href="#">Another action</a></li>

                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                    </ul>
                </li>
                <li className="nav-item">
                    <a className="nav-link disabled" aria-disabled="true">Disabled</a>
                </li>
                <li className="nav-item">
                    <Link className="nav-link active"  to="/about">About</Link>
                </li>
                </ul>
                <div className= {userLoged.email==''?'show':'collapse'} >
                    <Link to="/login">Login</Link>
                </div>
                <div className={userLoged.email!=''?'show':'collapse'}>
                    Usuario:{userLoged.email}
                    <button onClick={logout}>logout</button>
                </div>
            </div>
            </div>
        </nav>
    )
}