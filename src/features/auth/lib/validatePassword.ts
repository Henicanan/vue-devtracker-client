export const validatePassword = (
  password: string,
  confirmPassword?: string,
  minLength: number = 6
): boolean | null => {
  if (
    !password ||
    password !== confirmPassword ||
    password.length < minLength
  ) {
    return false;
  }
  return true;
};
