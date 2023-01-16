import { ErrorMessage, Field } from "formik";

import Error from "./Error";
import styles from "./TextArea.module.scss";

interface IMinifiedFormField {
  type: string;
  name: string;
  label: string;
  guideLink?: string;
}

const TextArea = (props: IMinifiedFormField) => {
  const { type, name, label, guideLink, ...rest } = props;
  return (
    <div className={styles.input}>
      <label htmlFor={name} className={styles.label}>
        {label}
      </label>
      <Field
        as={type}
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

export default TextArea;
