import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

interface ModuleDetails {
    id: number;
    title: string;
    description: string;
    createdAt: string;
}

const ModuleDetailsPage = () => {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();
    const [module, setModule] = useState<ModuleDetails | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const token = localStorage.getItem("authToken");

    useEffect(() => {
        if (!token) {
            navigate("/login");
        } else if (id) {
            fetch(`http://127.0.0.1:8000/api/modules/${id}`, {
                headers: { "Authorization": `Bearer ${token}` },
            })
                .then((response) => {
                    if (!response.ok) {
                        throw new Error("Failed to fetch module details");
                    }
                    return response.json();
                })
                .then((data) => setModule(data))
                .catch((error) => setError(error.message))
                .finally(() => setLoading(false));
        }
    }, [id, token, navigate]);

    if (loading) {
        return (
            <p>Loading module details...</p>
        );
    }

    if (error) {
        return (
            <p className="text-red-500">Error: {error}</p>
        );
    }

    if (!module) {
        return (
            <p>Module not found.</p>
        );
    }

    return (
        <div className="p-4 bg-white shadow-md rounded">
            <h1 className="text-2xl font-bold mb-2">{module.title}</h1>
            <p className="text-gray-700 mb-4">{module.description}</p>
            <p className="text-gray-500">Created At: {new Date(module.createdAt).toLocaleDateString()}</p>
        </div>
    );
};

export default ModuleDetailsPage;
