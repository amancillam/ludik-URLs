export function processURLs(urls) {
    const seen = new Set();
    const filteredURLs = [];
  
    urls.forEach(url => {
      try {
        const urlObj = new URL(url);
  
        if (urlObj.hostname.includes("shop") && urlObj.pathname.endsWith(".html")) {
          if (!seen.has(url)) {
            seen.add(url);
            filteredURLs.push(url);
          }
        }
      } catch (error) {
        console.error("Error al procesar la URL:", url, error);
      }
    });
  
    return filteredURLs;
  }
  