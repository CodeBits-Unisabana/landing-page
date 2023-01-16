import { ErrorMessage, Field } from "formik";

// import "./Field.scss";
import styles from "./Input.module.scss";

import Error from "./Error";

interface IMinifiedFormField {
  type: string;
  name: string;
  label: string;
  guideLink?: string;
}

const Input = (props: IMinifiedFormField) => {
  const { type, name, label, guideLink, ...rest } = props;

  return (
    <div className={styles.input}>
      <label htmlFor={name} className={styles.label}>
        {label}
      </label>
      <Field
        type={type}
        id={name}
        name={name}
        className={styles.field}
        {...rest}
      />
      <div className={styles.errorContainer}>
        <ErrorMessage name={name}>
          {(children) => <Error>{children}</Error>}
        </ErrorMessage>
      </div>

      {guideLink ? (
        <span>
          ¿Olvidaste tu {label.toLowerCase()}?{" "}
          <a href={guideLink}>Click aquí</a>
        </span>
      ) : (
        ""
      )}
    </div>
  );
};

export default Input;
