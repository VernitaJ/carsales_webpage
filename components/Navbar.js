import Link from 'next/link';

function Navbar() {
  return (
    <div className="navbar">
    <ul>
      <li>
        <Link href="/">
          <a>Home</a>
        </Link>
      </li>
      <li>
        <Link href="/about">
          <a>About Us</a>
        </Link>
      </li>
      <li>
        <Link href="/cars">
          <a>Blog Post</a>
        </Link>
      </li>
    </ul>
    </div>
  );
}

export default Navbar;
