//Prettier ignore
"use client";

import { Formik } from "formik";
import styles from "./ContactUs.module.scss";
import * as Yup from "yup";
import { Form } from "formik";
import Input from "../../atoms/InputFormik/Input";
import TextArea from "../../atoms/InputFormik/TextArea";
import FormImage from "../../../../public/assets/FormImage.png";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import { useState } from "react";
import { MutatingDots } from "react-loader-spinner";

interface IContactUs {}

const ContactUs = ({}: IContactUs) => {
  const [loading, setLoading] = useState<boolean>(false);

  interface IRequest {
    name: string;
    email: string;
    phone: string;
    description: string;
  }

  const initialValues = {
    name: "",
    email: "",
    phone: "",
    description: "",
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("Este campo es obligatorio"),
    email: Yup.string()
      .email("Email no valido")
      .required("Este campo es obligatorio"),
    phone: Yup.string().required("Este campo es obligatorio"),
    description: Yup.string().required("Este campo es obligatorio"),
  });

  let hubSpotData = {
    submittedAt: Date.now(),
    context: {
      pageUri: "www.codebits.com.co",
      pageName: "CodeBits",
    },
    legalConsentOptions: {
      consent: {
        consentToProcess: true,
        text: "I agree to allow Example Company to store and process my personal data.",
        communications: [
          {
            value: true,
            subscriptionTypeId: 999,
            text: "I agree to receive marketing communications from Example Company.",
          },
        ],
      },
    },
    fields: {},
  };

  const hubSpotFormUrl =
    "https://api.hsforms.com/submissions/v3/integration/submit/22800599/be60434b-06f3-4e3e-ac1b-51d5659d6e13";

  const submitRequest = async (values: IRequest, { resetForm }: any) => {
    setLoading(true);

    const fields = [
      {
        objectTypeId: "0-1",
        name: "firstname",
        value: values.name,
      },
      {
        objectTypeId: "0-1",
        name: "email",
        value: values.email,
      },
      {
        objectTypeId: "0-1",
        name: "phone",
        value: values.phone,
      },
      {
        objectTypeId: "0-1",
        name: "description",
        value: values.description,
      },
    ];

    hubSpotData.fields = fields;
    try {
      await axios.post(hubSpotFormUrl, hubSpotData);
      toast.success("Solicitud enviada, en breves te contactaremos");
    } catch (error) {
      toast.error("Ocurrió un error, intenta nuevamente");
    } finally {
      resetForm();
      setLoading(false);
    }
  };
  if (loading) {
    return (
      <>
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss={false}
          draggable
          pauseOnHover={false}
        />
        <div className={styles.loaderContainer}>
          <MutatingDots
            height="100"
            width="100"
            color="#32FDDF"
            secondaryColor="#F7277F"
            radius="18"
            ariaLabel="mutating-dots-loading"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
          />
        </div>
      </>
    );
  }

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover={false}
      />
      <div className={styles.contactUs}>
        <div className={styles.formContainer}>
          <h2 className={styles.title}>
            ¿Tienes algún proyecto en mente? O ¿Te interesa hacer parte de
            CodeBits?
          </h2>
          <Formik
            initialValues={initialValues}
            onSubmit={submitRequest}
            validationSchema={validationSchema}
          >
            <Form className={styles.form}>
              <Input type="text" name="name" label="Nombre*" />
              <Input type="text" name="email" label="Correo Electrónico*" />
              <Input type="number" name="phone" label="Número de Celular*" />
              <TextArea
                type="textarea"
                name="description"
                label="Descripción*"
              />
              <button type="submit" className={styles.button}>
                ENVIAR
              </button>
            </Form>
          </Formik>
        </div>
        <img src={FormImage.src} alt="" className={styles.image} />
      </div>
    </>
  );
};

export default ContactUs;
