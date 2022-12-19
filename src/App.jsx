import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "#home";
import Login from "#login";
import List from "#list";
import Single from "#singleUser";
import New from "#new";
import NoMatch from "#noMatch";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="login" index element={<Login />} />
            <Route path="users">
              <Route index element={<List />} />
              <Route path=":userId" element={<Single />} />
              <Route path="new" exact element={<New />} />
              <Route />
            </Route>
            <Route path="products">
              <Route index element={<List />} />
              <Route path=":productId" element={<Single />} />
              <Route path="new" exact element={<New />} />
              <Route />
            </Route>
            <Route path="*" element={<NoMatch />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
