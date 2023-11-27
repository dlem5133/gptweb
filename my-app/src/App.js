import { useState } from "react";

import Main from "./components/Main";
import Modal from "./components/Modal";

function App() {
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

  return (
    <>
      <Main openModal={openModal} closeModal={closeModal} />
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
