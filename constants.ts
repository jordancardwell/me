import { colors } from "@react-spring/shared";

export const COLOR_MAP = {
  black: "#001219ff",
  blue: "#005f73ff",
  "blue-green": "#0a9396ff",
  green: "#94d2bdff",
  champagne: "#e9d8a6ff",
  orange: "#ee9b00ff",
  "dark-orange": "#ca6702ff",
  rust: "#bb3e03ff",
  red: "#ae2012ff",
  "ruby-red": "#9b2226ff",
};

export const COLORS = Object.values(COLOR_MAP);
export const COLOR_NAMES = Object.keys(COLOR_MAP);
// remove black from random
COLORS.shift()
COLOR_NAMES.shift()

export function getRandomColor() {
  const colorIndex = Math.floor(Math.random() * COLORS.length);
  return COLORS[colorIndex];
}
