import React, { useState } from "react";
import Modal from "react-modal";
import ModalContent from "./ModalContent";

function ModalComp() {
  const [modalOpen, setModalOpen] = useState(false);

  const modalOpenTrue = () => {
    setModalOpen(true);
  };

  const modalOpenFalse = () => {
    setModalOpen(false);
  };

  return (
    <div>
      <button
        onClick={modalOpenTrue}
        style={{
          backgroundColor: "rgba(0, 40, 104, 1)",
          borderRadius: "4px",
          width: "44vw",
          color: "white",
        }}
      >
        {" "}
        <h2>Sign Me Up!</h2>{" "}
      </button>

      <Modal isOpen={modalOpen}>
        <button
          onClick={modalOpenFalse}
          style={{
            color: "rgba(250, 5, 35, .7)",
            backgroundColor: "lightgrey",
            borderRadius: "4px",
          }}
        >
          X
        </button>
        <ModalContent></ModalContent>
      </Modal>
    </div>
  );
}

export default ModalComp;
