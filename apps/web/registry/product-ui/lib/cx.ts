import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

/**
 * Combines class names using clsx and merges Tailwind CSS classes using tailwind-merge.
 * This function is useful for conditionally applying classes in a React component.
 *
 * @param inputs - An array of class names or conditional class names.
 * @returns A single string with merged class names.
 */
export function cx(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
