import Milk from '../assets/milk.jpg';

export default function Home() {
  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Home Page</h1>
      <img src={Milk} alt='milk' />
    </div>
  );
}
