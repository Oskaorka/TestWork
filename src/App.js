import "./App.scss";
import { DataListProvider } from "./hooks/getData";
import { DataSitesProvider } from "./hooks/getDataSites";
import Main from "./layout/main";

function App() {
  return (
    // <DataListProvider>
    // </DataListProvider>
    <DataSitesProvider>
      <DataListProvider>
        <Main />
      </DataListProvider>
    </DataSitesProvider>
  );
}

export default App;
