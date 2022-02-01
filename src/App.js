import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.scss";
import { DataListProvider } from "./hooks/getData";
import { DataSitesProvider } from "./hooks/getDataSites";
import Main from "./layout/main";
import PageFinalize from "./layout/pageFinalize";
import PageResult from "./layout/pageResult";

function App() {
  return (
    <>
      <DataSitesProvider>
        <DataListProvider>
          <Router>
            <Routes>
              <Route path="/" element={<Main />} />
              <Route path="/results/:testId" element={<PageResult />} />
              <Route path="/finalize/:testId" element={<PageFinalize />} />
            </Routes>
          </Router>
        </DataListProvider>
      </DataSitesProvider>
    </>
  );
}

export default App;
