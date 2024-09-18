import "./Header.css";
function Header() {
  return (
    <header className="container">
      <div className="header-info">
        <p>
          Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
        </p>
        <a href="/">Shop Now</a>
      </div>

      <select name="language" id="language">
        <option value="english">English</option>
        <option value="russian">Russian</option>
        <option value="uzbek">Uzbek</option>
      </select>
    </header>
  );
}

export default Header;
