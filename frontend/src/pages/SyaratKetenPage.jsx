import {Container, Row, Col} from "react-bootstrap"
import FaqComponent from "../components/FaqComponent"

const SyaratKetenPage = () => {
  return (
    <div className="syarat-ketentuan-page">
        <div className="syarat-ketentuan min-vh-100">
            <Container>
                <Row>
                    <Col>
                        <h1 className="fw-bold text-center mb-2 animate__animated animate__fadeInUp animate__delay-1s">Syarat & Ketentuan Website Ready Top Up</h1>
                        <p className="text-center">Terima kasih telah menggunakan website Ready Top Up!</p>
                    </Col>
                </Row>
                <Row className="pt-5">
                    <Col>
                        <p>Sebelum menggunakan website Ready Top Up, mohon luangkan waktu untuk membaca dan memahami Syarat dan Ketentuan berikut ini. Syarat dan Ketentuan ini mengatur hubungan antara Ready Top Up dan Anda sebagai pengguna website.</p>
                    </Col>
                </Row>
                <Row className="py-3">
                    <Col>
                        <h4 className="fw-bold">1. Pendaftaran Pengguna</h4>
                        <p>Untuk menggunakan website Ready Top Up, Anda harus mendaftar terlebih dahulu. Anda dapat mendaftar dengan menggunakan alamat email dan kata sandi yang Anda pilih. Anda bertanggung jawab untuk menjaga kerahasiaan informasi akun Anda dan untuk semua aktivitas yang terjadi di bawah akun Anda.</p>
                    </Col>
                </Row>
                <Row className="py-3">
                    <Col>
                        <h4 className="fw-bold">2. Transaksi</h4>
                        <p>Anda dapat melakukan top up pulsa dan kuota untuk semua operator di Indonesia melalui website Ready Top Up. Anda dapat memilih metode pembayaran yang Anda inginkan, seperti transfer bank, e-wallet, dan kartu kredit. Ready Top Up akan memproses transaksi Anda secepat mungkin.</p>
                    </Col>
                </Row>
                <Row className="py-3">
                    <Col>
                        <h4 className="fw-bold">3. Harga</h4>
                            <p>Harga pulsa dan kuota di Ready Top Up mengikuti harga yang ditetapkan oleh masing-masing operator. Ready Top Up tidak menambahkan biaya tambahan untuk transaksi top up.</p>
                    </Col>
                </Row>
                <Row className="py-3">
                    <Col>
                        <h4 className="fw-bold">4. Pengembalian Dana</h4>
                            <p>Ready Top Up akan melakukan pengembalian dana jika transaksi top up Anda gagal dan tidak dapat diproses. Pengembalian dana akan dilakukan ke metode pembayaran yang Anda gunakan saat melakukan top up.</p>
                    </Col>
                </Row>
                <Row className="py-3">
                    <Col>
                        <h4 className="fw-bold">5. Pemutusan Layanan</h4>
                            <p>Ready Top Up berhak untuk memutus layanan Anda jika Anda melanggar Syarat dan Ketentuan ini.</p>
                    </Col>
                </Row>
                <Row className="py-3">
                    <Col>
                        <h4 className="fw-bold">6. Perubahan Syarat dan Ketentuan</h4>
                            <p>Ready Top Up berhak untuk mengubah Syarat dan Ketentuan ini sewaktu-waktu. Anda akan diberitahu tentang perubahan Syarat dan Ketentuan ini melalui email atau website Ready Top Up.</p>
                    </Col>
                </Row>
                <Row className="py-3">
                    <Col>
                        <h4 className="fw-bold">7. Hukum yang Berlaku</h4>
                            <p>Syarat dan Ketentuan ini diatur dan ditafsirkan sesuai dengan hukum Republik Indonesia.</p>
                    </Col>
                </Row>
                <Row className="py-3">
                    <Col>
                        <h4 className="fw-bold">8. Hubungi Kami</h4>
                            <p>Jika Anda memiliki pertanyaan atau keluhan tentang website Ready Top Up, Anda dapat menghubungi kami melalui email atau melalui website Ready Top Up.</p>
                    </Col>
                </Row>
            </Container>
        </div>
        <FaqComponent/>
    </div>
  )
}

export default SyaratKetenPage