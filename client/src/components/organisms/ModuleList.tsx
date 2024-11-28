
import { useEffect, useState } from "react";
import ModuleItem from "../Molecules/ModuleItem";
import { useNavigate } from "react-router-dom";

interface Module {
  id: number;
  title: string;
  description: string;
}

const ModuleList = () => {
  const navigate = useNavigate();
  const [modules, setModules] = useState<Module[]>([]);
  const [error, setError] = useState<string | null>(null);
  const token = localStorage.getItem("authToken");

  useEffect(() => {
    if (!token) {
      navigate("/login");
    } else {
      fetch(`http://127.0.0.1:8000/api/modules`, {
        headers: { "Authorization": `Bearer ${token}` },
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error("Failed to fetch modules");
          }
          return response.json();
        })
        .then((data) => setModules(data))
        .catch((error) => setError(error.message));
    }
  }, [token, navigate]);

  if (!token) {
    return <h1 className="text-xl text-red-600">You are not logged in</h1>;
  }

  return (
    <div className="p-4">
      {error && <p className="text-red-500 mb-4">Error: {error}</p>}
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {modules.map((module) => (
          <li key={module.id}>
            <ModuleItem module={module} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ModuleList;
