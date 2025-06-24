export const validatePassword = (
  password: string,
  confirmPassword?: string,
  minLength: number = 6
): string | null => {
  if (!password) return "Password is required";
  if (password !== confirmPassword) return "Password do not match";
  if (password.length < minLength)
    return `Password must be at least ${minLength} characters long`;
  return null;
};
