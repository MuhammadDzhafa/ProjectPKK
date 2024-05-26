import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import FaqComponent from "../components/FaqComponent";
import axios from 'axios';

const Testimonialpage = () => {
  const [inventory, setInventory] = useState([]);
  const [selectedItems, setSelectedItems] = useState([]);

  useEffect(() => {
    fetchInventory();
  }, []);

  const fetchInventory = () => {
    axios.get('http://localhost:3001/api/inventory')
      .then(response => {
        setInventory(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the inventory!', error);
      });
  };

  const handleDelete = (id) => {
    axios.delete(`http://localhost:3001/api/inventory/${id}`)
      .then(response => {
        console.log('Item deleted', response.data);
        fetchInventory(); // Refresh the inventory list after deletion
        // Remove the deleted item from selectedItems
        setSelectedItems(prevItems => prevItems.filter(item => item.id !== id));
      })
      .catch(error => {
        console.error('There was an error deleting the item!', error);
      });
  };

  const handleSelectItem = (item) => {
    setSelectedItems(prevItems => {
      if (prevItems.includes(item)) {
        return prevItems.filter(i => i.id !== item.id);
      } else {
        return [...prevItems, item];
      }
    });
  };

  const calculateTotalPrice = () => {
    return selectedItems.reduce((total, item) => total + parseInt(item.price.replace(/[^0-9]/g, ''), 10), 0);
  };

  return (
    <div className="testimonial-page">
      <div className="testimonial">
        <Container>
          <Row>
            <Col>
              <h1 className="text-center fw-bold animate__animated animate__fadeInUp animate__delay-1s">
                {inventory.length === 0 ? 'Uupss.. Belum ada yang kamu beli nih' : 'Ditunggu yaa, barang kamu sedang kami proses'}
              </h1>
              <p className="text-center animate__animated animate__fadeInUp animate__delay-1s">
                {inventory.length === 0 ? 'Ayo Top Up Sekarang!!' : 'Terima kasih atas pembelian Anda!'}
              </p>
            </Col>
          </Row>
          <Row className="row-cols-lg-3 row-cols-1">
            {inventory.length > 0 && inventory.map((data) => (
              <Col key={data.id} className="mb-5">
                <p className="desc shadow-sm">{data.title}</p>
                <div className="people">
                <img
  src={data.image}
  alt={data.title}
  style={{ width: '100px', height: '100px', borderRadius: '50%' }}
/>

                  <div>
                    <h5 className="mb-1">{data.price}</h5>
                    <button 
                      className="btn btn-danger mt-2" 
                      onClick={() => handleDelete(data.id)}
                    >
                      Hapus
                    </button>
                    <button 
                      className={`btn mt-2 ${selectedItems.includes(data) ? 'btn-secondary' : 'btn-primary'}`} 
                      onClick={() => handleSelectItem(data)}
                    >
                      {selectedItems.includes(data) ? 'Deselect' : 'Select'}
                    </button>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
          <Row>
            <Col className="text-center mt-5">
              <h2>Total Harga: Rp. {calculateTotalPrice().toLocaleString()}</h2>
            </Col>
          </Row>
        </Container>
      </div>
      <FaqComponent />
    </div>
  );
};

export default Testimonialpage;
