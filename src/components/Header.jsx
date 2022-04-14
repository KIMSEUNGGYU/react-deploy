import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header>
      <nav>
        <Link to='/'>
          <li>HOME</li>
        </Link>
        <Link to='/about'>
          <li>ABOUT</li>
        </Link>
        <Link to='/counter'>
          <li>COUNTER</li>
        </Link>
      </nav>
    </header>
  );
}
