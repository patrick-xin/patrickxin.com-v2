import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
export const getYear = () => {
  const d = new Date();
  return d.getFullYear();
};

export function absoluteUrl(path: string) {
  return `${process.env.NEXT_PUBLIC_APP_URL}${path}`;
}

export function getRandomColor(): string {
  const assignedColors: string[] = [];
  const colors = [
    "bg-red-700/20",
    "bg-blue-700/20",
    "bg-green-700/20",
    "bg-yellow-700/20",
    "bg-indigo-700/20",
    "bg-purple-700/20",
    "bg-pink-700/20",
    "bg-teal-700/20",
    "bg-orange-700/20",
    "bg-cyan-700/20",
    "bg-lime-700/20",
    "bg-amber-700/20",
    "bg-emerald-700/20",
    "bg-gray-700/20",
  ];
  if (colors.length === 0) {
    // All colors have been assigned, reset the available colors
    colors.push(...assignedColors);
    assignedColors.length = 0;
  }

  const randomIndex = Math.floor(Math.random() * colors.length);
  const colorClass = colors[randomIndex];

  // Move the assigned color to the assignedColors array
  assignedColors.push(colorClass);
  colors.splice(randomIndex, 1);

  return colorClass;
}
