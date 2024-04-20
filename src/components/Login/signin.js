import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import "../../assets/css/signin.scss";
import Input from "../../components/Inputs/Input";
import Button from "../../components/Buttons/Button";
import Button1 from "../../components/Buttons/Button1";
import google from "../../assets/image/google-icon.png";
import apple from "../../assets/image/apple-icon.png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { devApiLink } from "../../config";
import axios from "axios";

const Signin = ({ style, text }) => {
  const [modalFlag1, setModalFlag1] = useState(false);
  const [useremail1, setUseremail1] = useState("");
  const [password1, setPassword1] = useState("");

  let flag = 0;

  const handleSignUp = () => {
    if (useremail1 == "") {
      toast.error("User field is required");
      flag = 1;
    }

    if (password1 == "") {
      toast.error("password field is required");
      flag = 1;
    }

    if (flag == 0) {
      axios
        .post(devApiLink + "/user/login", {
          email: useremail1,
          password: password1,
        })
        .then((res) => {
          console.log(res.data.msg);
          toast.error(res.data.msg);
          // alert(res.data.msg);
          if (res.data.status) window.location = "/assets";
        });
    }
  };
  return (
    <div>
      <div
        className="sign-modal"
        style={style}
        onClick={() => setModalFlag1(!modalFlag1)}
      >
        {text}
      </div>
      <div className="modalView">
        {modalFlag1 && (
          <AnimatePresence>
            <motion.div
              animate="visible"
              variants={{
                visible: { opacity: 1, y: 0 },
                hidden: { opacity: 0, y: "-20%" },
              }}
              exit="hidden"
              initial="hidden"
            >
              <div className="modal">
                <div className="modal-content">
                  <div class="imgcontainer">
                    <span
                      onClick={() => setModalFlag1(!modalFlag1)}
                      className="close"
                      title="Close Modal"
                    >
                      &times;
                    </span>
                  </div>

                  <div class="contain">
                    <ToastContainer />
                    <Input
                      className="input default-input"
                      type="text"
                      placeholder="Email"
                      value={useremail1}
                      handleUpdate={setUseremail1}
                    />
                    <Input
                      className="input default-input"
                      type="password"
                      placeholder="Password"
                      value={password1}
                      handleUpdate={setPassword1}
                    />

                    <Button
                      className="btn default-btn"
                      type="button"
                      text="Sign Up"
                      // link="/accounts"
                      style={{ width: "100%" }}
                      action={handleSignUp}
                    />

                    <hr class="modalLine" />

                    <Button1
                      className="btn default-btn"
                      type="link"
                      text="Continue with Google"
                      link="/register"
                      img={google}
                      style={{
                        width: "100%",
                        backgroundColor: "transparent",
                        border: "1px solid black",
                        color: "var(--background-modal-line-color)",
                      }}
                    />

                    <Button1
                      className="btn default-btn"
                      type="link"
                      text="Continue with Apple"
                      link="/register"
                      img={apple}
                      style={{
                        width: "100%",
                        backgroundColor: "transparent",
                        border: "1px solid black",
                        color: "var(--background-modal-line-color)",
                      }}
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        )}
      </div>
    </div>
  );
};

export default Signin;
