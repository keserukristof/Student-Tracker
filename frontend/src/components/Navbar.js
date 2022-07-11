import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container-fluid">
                <Link to='/' style={{ textDecoration: 'none' }}>
                    <a class="navbar-brand">Demo Application</a>
                </Link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <Link to='/student-manager' style={{ textDecoration: 'none' }}>
                                <a class="nav-link" aria-current="page">Student Manager</a>
                            </Link>
                        </li>
                        <li class="nav-item">
                            <Link to='/class-manager' style={{ textDecoration: 'none' }}>
                                <a class="nav-link">Class Manager</a>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;