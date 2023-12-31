export const Navbar = () => {
  return (
    <>
      <header>
        <div className="logo-brand">
          <a href="/">Adnan Khan</a>
        </div>
        <nav>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
            <li>
              <a href="/login">Login</a>
            </li>
            <li>
              <a href="/register">Register</a>
            </li>
            <li>
              <a href="/service">Service</a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};
