export const validatePassword = (
  password: string,
  confirmPassword?: string,
  minLength: number = 6
): boolean | null => {
  return (
    !password || password !== confirmPassword || password.length < minLength
  );
};
