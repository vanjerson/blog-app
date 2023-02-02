import {Link} from 'react-router-dom'

function StoryHeader() {
    return(
        
      <div className="header-main">
            
            <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="light" style={{position: 'fixed', zIndex: '4', width: '100%'}}>
  <div className="container-fluid">
    <Link to="/" className="navbar-brand"><img src="https://aws.wideinfo.org/ourplanetary.com/wp-content/uploads/2017/07/06151035/logo_blog-1-2.png" style={{height:'60px', width:'100px'}}/> </Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0" >
        <li className="nav-item">
          <Link to="/story" className="nav-link" aria-current="page" style={{color: 'green'}}>My Story</Link>
        </li>
        <li className="nav-item">
          <Link to="/About" className="nav-link" style={{color: 'green'}}>About</Link>
        </li>
        <li className="nav-item dropdown">
          <Link to="/Projects" className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false" style={{color: 'green'}}>
            My Gallery
          </Link>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#" style={{color: 'green'}}>Travel</a></li>
            <li><a className="dropdown-item" href="#" style={{color: 'green'}}>Gaming</a></li>
            <li><hr className="dropdown-divider"></hr></li>
            <li><a className="dropdown-item" href="#" style={{color: 'green'}}>Something else here</a></li>
          </ul>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled"></a>
        </li>
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" style={{border: '1px solid green'}}></input>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
            
</div>

    )
}

export default StoryHeader;