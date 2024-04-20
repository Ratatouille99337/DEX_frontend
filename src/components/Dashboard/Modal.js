import React, { useState } from "react";
import Input from "../Inputs/Input";
import Button from "../Buttons/Button";

// load assets
import { AnimatePresence, motion} from "framer-motion";
import "../../assets/css/modal.css";

const Modal = () => {
  const [modalFlag, setModalFlag] = useState(false);
  return (
    <div>
      <button type="button" onClick={()=>setModalFlag(!modalFlag)}>Toggle Button</button>
          {modalFlag && (
            <AnimatePresence >
              <motion.div
                animate="visible"
                variants={{
                  visible: {opacity: 1, y: 0},
                  hidden: {opacity: 0, y: "-20%"}
                }}
                exit="hidden"
                initial="hidden"
              >              
              <div className="modal">
                <div className="modal-content">
                  <div class="contain">
                  <Input
                  className="input default-input"
                  type="text"
                  placeholder="Email/Phone number"
                />
                <Input
                  className="input default-input"
                  type="text"
                  placeholder="Email/Phone number"
                />
                <Input
                  className="input default-input"
                  type="text"
                  placeholder="Email/Phone number"
                />
                <Input
                  className="input default-input"
                  type="text"
                  placeholder="Email/Phone number"
                />
                <Input
                  className="input default-input"
                  type="text"
                  placeholder="Email/Phone number"
                />
                  </div>
                </div>
                
              </div>
              </motion.div>
            </AnimatePresence>
          )}
    </div>
  );
};

export default Modal;
