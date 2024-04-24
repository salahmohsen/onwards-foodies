"use client";
import { useFormState } from "react-dom";
import { shareMealAction } from "../../lib/serverActions";
import classes from "./form-data-validation.module.css";
import FormSumbmitButton from "./form-submit-button";

const FormDataValidation = ({ children }) => {
  const [state, formAction] = useFormState(shareMealAction, { message: null });
  return (
    <form className={classes.form} action={formAction}>
      {children}
      {state.message && <p>{state.message}</p>}
      <p className={classes.actions}>
        <FormSumbmitButton />
      </p>
    </form>
  );
};

export default FormDataValidation;
