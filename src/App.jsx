import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Dashboard, NewInteriew } from "./pages";
import { Provider } from "react-redux";
import { persistor, store } from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <Routes>
            <Route path="/new" element={<NewInteriew />} />
            <Route path="/" element={<Dashboard />} />
          </Routes>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  )
}

export default App;