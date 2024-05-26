import {Container, Row, Col} from "react-bootstrap"
import {Link} from "react-router-dom"

const FooterComponent = () => {
  return (
    <div className="footer py-5">
        <Container>
            <Row className="d-flex justify-content-between">
                <Col lg="5">
                    <h3 className="fw-bold">Ready Top Up</h3>
                    <p className="desc">Ready Top Up adalah website top up pulsa dan game yang mudah dan cepat digunakan. Anda dapat melakukan top up pulsa dan kuota untuk semua operator di Indonesia dengan harga yang kompetitif.</p>
                    <div className="no mb-1 nt-4">
                        <Link className="text-decoration-none">
                            <i className="fa-brands fa-whatsapp"></i>
                            <p className="m-0">+62 895-33424-8010</p>
                        </Link>
                    </div>
                    <div className="mail">
                        <Link>
                            <i className="fa-regular fa-envelope"></i>
                            <p className="m-0">person-email@gmail.com</p>
                        </Link>
                    </div>
                </Col>
                <Col className="d-flex flex-column col-lg-2 col mt-lg-0 mt-5">
                    <h5 className="fw-bold">Menu</h5>
                    <Link to="">Home</Link>
                    <Link to="kelas">Promo</Link>
                    <Link to="testimonial">Testimonial</Link>
                    <Link to="faq">FAQ</Link>
                    <Link to="syaratketen">Syarat & Ketentuan</Link>
                </Col>
                <Col lg="4" className="mt-lg-0 mt-5">
                    <h5 className="fw-bold mb-3">Subscribe Untuk Info Menarik</h5>
                    <div className="subscribes">
                    <input type="text" placeholder="Subscribe..." />
                    <button className="btn btn-danger rounded-end rounded-0" style={{ backgroundColor: '#03045E' }} >Subscribe</button>
                    </div>
                    <div className="social mt-3"></div>
                    <i className="fa-brands fa-facebook"></i>
                    <i className="fa-brands fa-twitter"></i>
                    <i className="fa-brands fa-linkedin"></i>
                    <i className="fa-brands fa-youtube"></i>
                </Col>
            </Row>
            <Row>
                <Col>
                    <p className="text-center px-md-0 px-3">&copy; Copyright {new Date().getFullYear()} by <span className="fw-bold">Muhammad Dzhafa</span>, All Right Reserved</p>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default FooterComponent;