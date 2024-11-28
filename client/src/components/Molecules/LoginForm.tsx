import { useEffect, useState } from 'react';
import FormField from '../Molecules/FormField';
import Button from '../atoms/Button';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const token = localStorage.getItem("authToken");

  useEffect(() => {
    if (token) {
      navigate("/modules");
    }
  }, [token, navigate]);

  const handleLogin = async () => {
    try {
      const response = await fetch(`http://127.0.0.1:8000/api/login_check`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username, 
          password,
        }),
      });

      if (!response.ok) {
        throw new Error("Invalid credentials or server error");
      }

      const data = await response.json();
      const token = data.token; 

      localStorage.setItem("authToken", token);

      navigate("/modules");
    } catch (error: any) {
      setError(error.message);
    }
  };

  return (
    <div className="p-6 bg-white shadow-lg rounded-lg w-96">
      <h1 className="text-2xl font-bold text-center mb-4">Login</h1>
      {error && <p className="text-red-500 text-center mb-4">{error}</p>}
      <form onSubmit={(e) => { e.preventDefault(); handleLogin(); }}>
        <FormField
          label="Email"
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter your email"
          required
        />
        <FormField
          label="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter your password"
          required
        />
        <Button
          label="Login"
          onClick={handleLogin}
          type="submit"
          className="w-full py-2 border hover:bg-slate-200"
        />
      </form>
    </div>
  );
};

export default LoginForm;
