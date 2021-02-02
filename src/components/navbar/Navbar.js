import Link from 'next/link'
import {connect} from 'react-redux'

const Navbar = (props) => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <div className="container">
            <Link href="/"><a className="navbar-brand">NEXTSHOP</a></Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                    <Link href="/" className="nav-link"><a className="nav-link" aria-current="page">หน้าหลัก</a></Link>
                </li>
                <li className="nav-item">
                    <Link href="/manage"><a className="nav-link">จัดการร้าน</a></Link>
                </li>
                <li className="nav-item">
                    <Link href="/about.html"><a className="nav-link">เกี่ยวกับเรา</a></Link>
                </li>
                <li className="nav-item">
                    <Link href="/contact_us.html"><a className="nav-link">ติดต่อเรา</a></Link>
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
                    <a className="nav-link" href="#">ตะกร้า <span className="badge rounded-pill bg-danger">{props.product.cartitems}</span> ชิ้น</a>
                </li>
            </ul>
           
            </div>
        </div>
    </nav>
    )
}

const mapStateToProps = state => ({
    product: state.product
})

export default connect(mapStateToProps)(Navbar)
