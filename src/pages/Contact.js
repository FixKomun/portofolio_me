import React, { useRef, useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import emailjs from "@emailjs/browser";
//Animations
import { pageTransitionUpDown } from "../components/animation/animations";
//Components
import ThumbsUp from "../components/animation/thumbsUp";
//Formik
import { useFormik } from "formik";
//YUP
import * as Yup from "yup";

const Contact = () => {
  const [thumbsAnimation, setThumbsAnimation] = useState(false);
  const navigate = useNavigate();
  const form = useRef();
  //console.log(process.env.REACT_APP_YOUR_SERVICE_ID);
  //Formik logics
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      textarea: "",
    },
    //Validate Form
    validationSchema: Yup.object({
      name: Yup.string()
        .max(20, "Name must be 20 characters or less")
        .required("Name is required"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      phone: Yup.number("Error pls"),
      textarea: Yup.string().max(300, "300 characters please."),
    }),
    //Submit Form
    onSubmit: (values) => {
      setThumbsAnimation(true);
      emailjs
        .sendForm(
          process.env.REACT_APP_YOUR_SERVICE_ID,
          process.env.REACT_APP_YOUR_TEMPLATE_ID,
          form.current,
          process.env.REACT_APP_YOUR_PUBLIC_KEY
        )
        .then(
          (result) => {
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
          }
        );
      navigate("/success");
    },
  });

  return (
    <StyledContact
      variants={pageTransitionUpDown}
      initial={{ opacity: 0, x: 0 }}
      animate="show"
      exit={{ opacity: 0 }}
    >
      <Form ref={form} onSubmit={formik.handleSubmit}>
        <div className="left-container">
          <div className="left-info">
            <h1>Contact Me</h1>
            <p>Let's stay in touch.</p>
          </div>
          <div className="thumbs-up">
            <ThumbsUp />
          </div>
        </div>
        <div className="right-container">
          <div className="input-name input">
            <label
              className={`label ${
                formik.touched.name && formik.errors.name ? "input-error" : ""
              }`}
              htmlFor="name"
            >
              {formik.touched.name && formik.errors.name
                ? formik.errors.name
                : "*Your name"}
            </label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              value={formik.values.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          </div>
          <div className="input-email input">
            <label
              className={`label ${
                formik.touched.email && formik.errors.email ? "input-error" : ""
              }`}
              htmlFor="email"
            >
              {formik.touched.email && formik.errors.email
                ? formik.errors.email
                : "*Your email"}
            </label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          </div>
          <div className="input-phone input">
            <label
              className={`label ${
                formik.touched.phone && formik.errors.phone ? "input-error" : ""
              }`}
              htmlFor="phone"
            >
              {formik.touched.phone && formik.errors.phone
                ? "Invalid phone number"
                : "Your phone"}
            </label>
            <input
              type="text"
              name="phone"
              placeholder="Enter your phone"
              value={formik.values.phone}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          </div>
          <div className="input-textarea input">
            <label
              className={`label ${
                formik.errors.textarea && formik.touched.textarea
                  ? "input-error"
                  : ""
              }`}
              htmlFor="textarea"
            >
              {formik.touched.textarea && formik.errors.textarea
                ? formik.errors.textarea
                : "What's on your mind?"}
            </label>
            <textarea
              name="textarea"
              value={formik.values.textarea}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          </div>
          <button type="submit" className="submit-button">
            Send.
          </button>
        </div>
      </Form>
    </StyledContact>
  );
};

const StyledContact = styled(motion.div)`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Form = styled.form`
  display: flex;
  border-radius: 1rem;
  padding: 3rem 5rem;
  background: #b3b2b2;
  width: 60%;
  color: #434658;
  .left-container {
    flex: 1;
    .thumbs-up {
      margin-left: 1rem;
    }
    .left-info {
      padding-bottom: 4rem;
      h1 {
        font-size: 2.2rem;
      }
      p {
        font-size: 1.1rem;
      }
    }
  }
  .right-container {
    flex: 2;

    .label {
      display: block;
    }
    input {
      padding: 8px;
      width: 100%;
      border-radius: 3px;
      border: 2px solid#43465883;
      font-family: "Poppins", sans-serif;
      margin-bottom: 1rem;
      font-size: 1rem;
      :focus {
        outline: none;
        border: 2px solid#434658d3;
      }
    }
    textarea {
      font-family: "Poppins", sans-serif;
      border: 2px solid#43465883;
      border-radius: 3px;
      width: 100%;
      height: 100px;
      resize: none;
      font-size: 1rem;
      :focus {
        outline: none;
        border: 2px solid #434658d3;
      }
    }
    .submit-button {
      padding: 0.5rem 4rem;
      background: #283a68;
      border-radius: 3px;
      font-size: 1rem;
      color: #e9e9e9;
      letter-spacing: 1px;
      border: none;
      transition: all 0.2s ease-in;
      cursor: pointer;
      margin-left: 30%;
      margin-top: 1rem;
      :hover {
        outline: none;
        box-shadow: 2px 2px black;
      }
    }
  }
`;

export default Contact;
