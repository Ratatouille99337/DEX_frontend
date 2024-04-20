import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { devApiLink } from "../../config";
import "../../assets/css/signup.scss";
import Input from "../../components/Inputs/Input";
import Button from "../../components/Buttons/Button";
import Button1 from "../../components/Buttons/Button1";
import google from "../../assets/image/google-icon.png";
import apple from "../../assets/image/apple-icon.png";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";                          

const Signup = ({ style, text }) => {
  const [modalFlag, setModalFlag] = useState(false);
  const [username, setUsername] = useState("");
  const [useremail, setUseremail] = useState("");
  const [userPhone, setUserPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirm_password, setConfirm_password] = useState("");

  let flag = 0;
  // handle signup
  const handleSignUp = () => {
    if (username == "") {
      flag = 1;
      toast.error("Name field is required");
    }
    if (useremail == "") {
      toast.error("User field is required");
      flag = 1;
    }
    if (userPhone == "") {
      toast.error("Phonenumber field is required");
      flag = 1;
    }
    if (password == "") {
      toast.error("password field is required");
      flag = 1;
    }

    if (password !== confirm_password) {
      toast.error("Password is not match. Please confirm password.");
      flag = 1;
    }
    if (flag == 0) {
      axios
        .post(devApiLink + "/user/register", {
          email: useremail,
          password: password,
          phone: userPhone,
          name: username,
        })
        .then((res) => {
          console.log(res.data);
          // setUsername = "";
          // setUseremail = "";
          // setUserPhone = "";
          // setPassword = "";
          // setConfirm_password = "";
        });
      // .catch((err) => {
      //   console.log(err.response.data);
      // });
      setModalFlag(!modalFlag);
    }
  };

  return (
    <div>
      <div
        className="sign-modal"
        style={style}
        onClick={() => setModalFlag(!modalFlag)}
      >
        {text}
      </div>
      <div className="modalView">
        {modalFlag && (
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
                      onClick={() => setModalFlag(!modalFlag)}
                      className="close"
                      title="Close Modal"
                    >
                      &times;
                    </span>
                  </div>
                  <ToastContainer />
                  <div class="contain">
                    <Input
                      className="input default-input"
                      type="text"
                      placeholder="UserName"
                      value={username}
                      handleUpdate={setUsername}
                    />
                    <Input
                      className="input default-input"
                      type="text"
                      placeholder="Email"
                      value={useremail}
                      handleUpdate={setUseremail}
                    />
                    <Input
                      className="input default-input"
                      type="text"
                      placeholder="PhoneNumber"
                      value={userPhone}
                      handleUpdate={setUserPhone}
                    />
                    <Input
                      className="input default-input"
                      type="password"
                      placeholder="Password"
                      value={password}
                      handleUpdate={setPassword}
                    />
                    <Input
                      className="input default-input"
                      type="password"
                      placeholder="Confirm Password"
                      value={confirm_password}
                      handleUpdate={setConfirm_password}
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

export default Signup;
