import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { semuaKelas } from '../index';
import FaqComponent from "../components/FaqComponent";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Kelaspage = () => {
  const navigate = useNavigate();

  const handleBuyNow = (kelas) => {
    axios.post('http://localhost:3001/api/inventory', kelas)
      .then(response => {
        console.log('Item added to inventory', response.data);
        navigate('/testimonial');
      })
      .catch(error => {
        console.error('There was an error adding the item to inventory!', error);
      });
  };

  return (
    <div className="kelas-page">
      <div className="kelas min-vh-100">
        <Container>
          <Row>
            <Col>
              <h1 className="fw-bold text-center animate__animated animate__fadeInUp animate__delay-1s">Semua Promo</h1>
              <p className="text-center animate__animated animate__fadeInUp animate__delay-1s">Harga Mulai Dari...</p>
            </Col>
          </Row>
          <Row>
            {semuaKelas.map((kelas) => (
              <Col key={kelas.id} className="shadow rounded" data-aos="fade-up" data-aos-duration="1000" data-aos-delay={kelas.delay}>
                <img src={kelas.image} alt="unsplash.com" className="w-100 mb-5 rounded-top" />
                <div className="star mb-2 px-3">
                  <i className={kelas.star1}></i>
                  <i className={kelas.star2}></i>
                  <i className={kelas.star3}></i>
                  <i className={kelas.star4}></i>
                  <i className={kelas.star5}></i>
                </div>
                <h5 className="mb-5 px-3">{kelas.title}</h5>
                <div className="ket d-flex justify-content-between align-item-center px-3 pb-3">
                  <p className="m-0 text-primary fw-bold">{kelas.price}</p>
                  <p className="m-0 text-primary fw-bold"><span className="text-decoration-line-through">{kelas.price1}</span></p>
                  <button className="btn btn-danger rounded-1" style={{ backgroundColor: '#03045E' }} onClick={() => handleBuyNow(kelas)}>
                    Beli Sekarang
                  </button>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
      <FaqComponent />
    </div>
  );
};

export default Kelaspage;
