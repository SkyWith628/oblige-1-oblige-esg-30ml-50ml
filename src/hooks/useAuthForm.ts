import { useMemo, useState } from "react";

export function useAuthForm<T extends Record<string, string>>(initialValues: T) {
  const [values, setValues] = useState<T>(initialValues);
  const [submitted, setSubmitted] = useState(false);

  const isValid = useMemo(
    () => Object.values(values).every((value) => value.trim().length > 0),
    [values]
  );

  const updateField = (name: keyof T, value: string) => {
    setValues((current) => ({ ...current, [name]: value }));
  };

  return { values, updateField, isValid, submitted, setSubmitted };
}
