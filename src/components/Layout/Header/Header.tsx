import Link from 'next/link';

export const Header = () => {
  return (
    <header>
      <nav>
        <h1>SaraRioseco</h1>
        <ul>
          <Link href='/'>
            <li>HOME</li>
          </Link>
          <Link href='/resume'>
            <li>RESUME</li>
          </Link>
          <Link href='/about'>
            <li>ABOUT ME</li>
          </Link>
          <Link href='/projects'>
            <li>PROJECTS</li>
          </Link>
          <Link href='/contact'>
            <li>CONTACT ME</li>
          </Link>
        </ul>
      </nav>
    </header>
  );
};
