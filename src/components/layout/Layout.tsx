const Layout = () => {
  return (
    <div className="main">
      <header className="header">
        <div className="header__container">
          {/* Logo */}
          <h1 className="header__logo">MyShop</h1>

          {/* Navigation */}
          <nav className="header__nav">
            <a href="/" className="header__link">
              Home
            </a>
            <a href="/shop" className="header__link">
              Shop
            </a>
            <a href="/about" className="header__link">
              About
            </a>
            <a href="/contact" className="header__link">
              Contact
            </a>
          </nav>

          {/* Cart */}
          <div className="header__cart">Cart Items : 0</div>
        </div>
      </header>
    </div>
  );
};

export default Layout;
