"use client";

import { useFormStatus } from "react-dom";

const FormSumbmitButton = () => {
  const { pending } = useFormStatus();
  return (
    <button type="submit" disabled={pending}>
      {`${pending ? "Sending Meal..." : "Share Meal"}`}
    </button>
  );
};

export default FormSumbmitButton;
