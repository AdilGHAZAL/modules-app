import { Link, useNavigate } from 'react-router-dom';
import Button from '../atoms/Button';

const Navbar = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("authToken");

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    navigate("/");
  };

  return (
    <nav className="bg-black text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-xl font-bold">
          AtomicDesignApp
        </Link>
        {token ? (
          <Button
            label="Logout"
            onClick={handleLogout}
            className="bg-red-500 hover:bg-red-600"
          />
        ) : (
          <Link to="/">
            <Button label="Login" onClick={() => {}} />
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
