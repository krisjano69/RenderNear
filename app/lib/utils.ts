import { ClassValue } from 'clsx';  // Importing ClassValue type
import clsx from 'clsx';            // Importing the clsx function
import { twMerge } from 'tailwind-merge';  // Importing the twMerge function

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}


