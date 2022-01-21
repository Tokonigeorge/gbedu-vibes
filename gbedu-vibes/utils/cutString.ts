export const cutString = (string: string, num: number) => {
  return string.length > num ? `${string.substring(0, num)}...` : string;
};
