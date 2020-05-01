import React, {
    useEffect,
    useState,
} from 'react';

import Pagination from 'react-js-pagination';

import './index.css';

import { images } from '../../services/api';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import ShopCard from '../../components/ShopCard';



function Dashboard() {
    const [photos, setPhotos] = useState([]);
    const [page, setPage] = useState(1);
    const [totalPage, setTotalPage] = useState(0);

    const handlePageChange = (pageNumber) =>
        setPage(pageNumber);

    useEffect(() => {
        const loadData = async () => {
            const response = await images.get('/photos', {
                params: {
                    page: page,
                    client_id: '2d888541fe80477a46b3c0888a8866a5c3fe7dcc3470346a633a2a6478990956'
                }
            });
         
            setPhotos(response.data);
            setTotalPage(parseInt(response.headers['x-total']))
        }

        loadData();
    }, [page]);

    return (
        <div className="dashboard-container">
            <Header />
            <main className="main-container">
                {photos.map(photo =>
                    <ShopCard
                        key={photo.id}
                        photo={photo}
                        className="shopCard"
                    />)}
            </main>
            <Pagination
                hideDisabled
                innerClass="pagination"
                itemClass="itemclass"
                activeClass="active"
                activeLinkClass="activeLinkClass"
                activePage={page}
                onChange={handlePageChange}
                pageRangeDisplayed={10}
                totalItemsCount={totalPage}
            />
            <Footer />
        </div >
    );
}

export default Dashboard;
