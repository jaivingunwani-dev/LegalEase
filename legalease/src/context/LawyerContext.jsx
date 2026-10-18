import { createContext, useState, useEffect } from "react";

const LawyerContext = createContext();

function LawyerProvider({ children }) {
  const [lawyers, setLawyers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchLawyers() {
      try {
        const response = await fetch(
          "https://6ad4d99c48476c0785d94bb3.mockapi.io/lawyers"   
        );

        if (!response.ok) {
          throw new Error("Failed to fetch lawyers");
        }

        const data = await response.json();
        setLawyers(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchLawyers();
  }, []);

  return (
    <LawyerContext.Provider value={{ lawyers, loading, error }}>
      {children}
    </LawyerContext.Provider>
  );
}

export { LawyerContext, LawyerProvider };