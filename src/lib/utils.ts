import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Merges tailwind classes with clsx classes conditionally.
 * @param inputs - An array of class values to merge.
 * @returns Merged class names as a string.
 * @example
 * cn("text-red-500", "text-sm");
 */
export const cn = (...inputs: ClassValue[]): string => twMerge(clsx(inputs));

/**
 * Converts a Prisma object to a valid JSON object. The problem is with types like decimal bigInt, etc.
 * @param obj - The Prisma object to convert.
 * @returns A parsed JSON object.
 * @example const user = await prisma.user.findUnique({ where: { id: 1 } });
 * const validUser = getValidJSON(user);
 */
export const getValidJSON = (obj: any): any => JSON.parse(JSON.stringify(obj));

/**
 * Formats a number as a currency in Euro. Austrian locale.
 * @param value - The number to format as currency.
 * @returns The formatted currency string.
 */
export const formatCurrency = (value: number): string =>
  new Intl.NumberFormat("de-AT", {
    style: "currency",
    currency: "EUR",
  }).format(value);

/**
 * Constructs the full path by appending a given path to the base URL.
 * @param path - The path to append, e.g. "api/order". Without leading slash.
 * @returns The full path.
 */
export const getPath = (path: string): string =>
  `${process.env.NEXT_PUBLIC_BASE_URL}/${path}`;
