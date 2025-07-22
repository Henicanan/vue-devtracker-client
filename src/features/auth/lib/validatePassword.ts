export const validatePassword = (
  password: string,
  confirmPassword?: string,
  minLength: number = 6
): boolean => {
  return (
    typeof password === 'string' &&
    typeof confirmPassword === 'string' &&
    password === confirmPassword &&
    password.length >= minLength
  );
};
