// components/Header.js
import Link from 'next/link';

function Header() {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link href="/">Ana Sayfa</Link>
          </li>
          <li>
            <Link href="/about">Hakkımızda</Link>
          </li>
          {/* Burada diğer sayfaların linklerini ekleyebilirsiniz */}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
