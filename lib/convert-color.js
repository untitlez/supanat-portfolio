import { parse, formatHex } from "culori";

export const convertColor = (value) => {
  const color = parse(value);
  const hex = formatHex(color);
  return hex;
};
