import {connect} from 'react-redux'
const Navbar = (props) => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
        <div className="container">
            <a className="navbar-brand" href="#">NEXTSHOP</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">HOME</a>
                </li>
                <li className="nav-item">
                <a className="nav-link" href="#">MANAGE</a>
                </li>
            </ul>

            {/* <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item">
                    <h3>Counter: {props.counter}</h3>
                </li>
            </ul> */}

            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                {/* <li className="nav-item">
                    <a className="nav-link" href="#">LOGIN</a>
                </li> */}
                <li className="nav-item">
                    <a className="nav-link" href="#">8 items (2,120.00 ฿THB)</a>
                </li>
            </ul>
           
            </div>
        </div>
    </nav>
    )
}

// mapStateToProps
// รับฟังก์ชันจาก store มาใช้งาน
const mapStateToProps = state => ({
    counter: state.counter.value
})
  

export default connect(mapStateToProps)(Navbar)
