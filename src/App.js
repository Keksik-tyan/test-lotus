import React, { useState, useEffect } from "react";
import Modal from "./component/Modal/Modal";
import Timer from "./component/Timer/Timer";
import Table from "./component/Table/Table";
import Button from "./component/Button/Button";

import "./App.css";


function App() {

  const [open, setOpen] = useState(false);
  const initTimer = 2*60;
  const [timeLeft, setTimeLeft] = useState(initTimer); 

  useEffect(() => {

    let timer = null;

    timer = setInterval(() => {
      setTimeLeft((timeLeft) => timeLeft - 1); 
    }, 1000);

    if (timeLeft === 0) {
      clearInterval(timer);
      setTimeout(() => {
        setTimeLeft(initTimer);
      }, 1000)
    }

    return () => {
      clearInterval(timer);
    };
  }, [timeLeft]);

  const closeModal = () => {
    setOpen(false);
  };

  const openModal = () => {
    setOpen(true);
  };


  return (
    <>
    <div className="app">
      <div className="buttons">
        <Button variant = "default" onClick={openModal}>Войти в комнату торгов</Button>
        <Button variant = "default" onClick={openModal}>Войти как участник №1</Button>
        <Button variant = "default" onClick={openModal}>Войти как участник №2</Button>
        <Button variant = "default" onClick={openModal}>Войти как участник №3</Button>
        <Button variant = "default" onClick={openModal}>Войти как участник №4</Button>
      </div>
      <Modal
        title="Ход торгов"
        isOpen={open}
        onCancel={closeModal}
      >
        <Timer seconds={timeLeft} />
        <Table/>
      </Modal>
    </div>    
    </>
  );
}

export default App;
