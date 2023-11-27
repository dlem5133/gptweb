import { useState } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Root from "./pages/Root";
import Modal from "./components/Modal";

import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import HighlightDetail from "./pages/HighlightDetail";

function App() {
  // Modal
  const [isModal, setModal] = useState(false);
  const [isModalData, setModalData] = useState(null);

  const openModal = (data) => {
    setModalData(data);
    setModal(true);
  };

  const closeModal = () => {
    setModalData(null);
    setModal(false);
  };

  //react-router
  const router = createBrowserRouter([
    {
      path: "",
      element: <Root />,
      errorElement: <NotFound />,
      children: [
        {
          path: "/",
          element: <Home openModal={openModal} closeModal={closeModal} />,
        },
        {
          path: "/highlight/:id",
          element: <HighlightDetail />,
        },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
      {isModal ? (
        <Modal
          data={isModalData}
          fnCloseModal={() => {
            setModal(false);
          }}
        />
      ) : null}
    </>
  );
}

export default App;
