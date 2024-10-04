import React, { useEffect, useState } from "react";
import { processURLs } from "./URLProcessor";

function App() {
  const [filteredUrls, setFilteredUrls] = useState([]);
  const [totalCount, setTotalCount] = useState(0);

  useEffect(() => {
    const fetchUrls = async () => {
      try {
        const response = await fetch("/urls.txt");
        const text = await response.text();
        const urlList = text.split("\n").map(url => url.trim());
        
        const result = processURLs(urlList);
        
        setFilteredUrls(result);
        setTotalCount(result.length);
      } catch (error) {
        console.error("Error al leer el archivo:", error);
      }
    };

    fetchUrls();
  }, []);

  return (
    <div className="App">
      <h1>URLs Filtradas</h1>

      <p>Total de URLs que cumplen con los criterios: {totalCount}</p>

      <ul>
        {filteredUrls.map((url, index) => (
          <li key={index}>{url}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
