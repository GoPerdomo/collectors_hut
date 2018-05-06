// Checks if password is valid and returns an error to be displayed on input fields
export default (minPassLength, isLong, hasNumber) => {
  let errorString;
  const base = "Password should contain";
  const lengthError = `at least ${minPassLength} characters`;
  const numberError = "at least one number";

  if (!isLong && !hasNumber) errorString = `${base} ${lengthError} and ${numberError}`;
  if (isLong && !hasNumber) errorString = `${base} ${numberError}`;
  if (!isLong && hasNumber) errorString = `${base} ${lengthError}`;

  return errorString;
};
