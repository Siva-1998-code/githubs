import React from 'react'

const Home = () => {
    return (
        <div>
            <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
                </div>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src="https://img.freepik.com/free-photo/pro-gamer-playing-space-shooter-online-championship-with-modern-graphics-using-wireless-controller_482257-524.jpg?w=1060&t=st=1683817820~exp=1683818420~hmac=a47424379ef9f153aa30f384b27fe3de8514b5ba2a87ba0dd70d42c0adeb9b8f" class="d-block w-100" alt="IPhone" height="600px" />
                    </div>
                    <div class="carousel-item">
                        <img src="https://img.freepik.com/premium-psd/modern-smart-tv-display-mockup_513308-24.jpg?w=996" class="d-block w-100" alt="IPhone" height="600px" />
                    </div>
                    <div class="carousel-item">
                        <img src="https://img.freepik.com/free-photo/pink-headphones-wireless-digital-device_53876-96804.jpg?w=996&t=st=1683818034~exp=1683818634~hmac=0b290ea8aa53cfb312a580be350c405cf5e086b6ca8f2b83b10ce3fd066cbcfa?w=1060" class="d-block w-100" alt="IPhone" height="600px" />
                    </div>
                    <div class="carousel-item">
                        <img src="https://img.freepik.com/free-photo/new-smartphone-balancing-with-cloth_23-2150296457.jpg?w=996&t=st=1683797399~exp=1683797999~hmac=055f0ba583c7bcb29c359d6015a6f001f77a87bb65e500f08e64186cf6fdfe8e" class="d-block w-100" alt="IPhone" height="600px" />
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    )
}

export default Home