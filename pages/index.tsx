import React from 'react';
import { Carousel } from './components/Carousel';
export default function Home() {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
      backgroundColor: 'linear-gradient(to right, #414347, #000)',
    }}>
      <h5 style={{ color: 'white', }}>Welcome to My E-Commerce Store</h5>
      <p style={{ color: 'white' }}>Discover a wide range of products at unbeatable prices.
       Shop now and enjoy exclusive deals!</p>  
       <Carousel />

    </div>
  );
}
