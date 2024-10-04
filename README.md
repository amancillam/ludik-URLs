# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


## Explico un poco el porque:

**BENEFICIOS SET**: La verificación de duplicados en un Set es O(1) (tiempo constante) en promedio, lo que mejora significativamente la eficiencia, especialmente si el número de URLs es grande.
Filtrado usando propiedades específicas del objeto URL:

**BENEFICIOS URLs**:Se utiliza la clase URL nativa de JavaScript, que es mucho más eficiente para descomponer las URLs en partes (como el hostname y pathname).

**USE TRY/CATCHE**:Esto mejora la estabilidad del algoritmo y reduce el riesgo de fallos en la ejecución cuando se encuentran datos incorrectos o incompletos.

**Optimizado para manejar grandes volúmenes de datos y proporciona resultados rápidamente, incluso cuando se trabaja con listas de URLs grandes.**