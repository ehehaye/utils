export declare const BANK_CARD_ID_REGEX: RegExp;

/**
 * Converts a base64 string to a Blob object.
 *
 * @param base64 - the base64 string to convert
 * @return the Blob object converted from the base64 string
 */
export declare function base64ToBlob(base64: string): Blob;

/**
 * Converts a base64 string to a File object with the specified file name.
 *
 * @param base64String - The base64 string to convert
 * @param fileName - The name of the file
 * @return The File object created from the base64 string
 */
export declare function base64ToFile(base64String: string, fileName: string): File;

/**
 * Convert a blob to base64.
 *
 * @param blob - The blob to be converted to base64.
 * @return A promise that resolves to the base64 representation of the input blob.
 */
export declare function blobToBase64(blob: Blob): Promise<string>;

/**
 * Create a new File object from the provided blob and file name.
 *
 * @param blob - The blob to be converted to a File object
 * @param fileName - The name of the file
 * @return The new File object created from the blob and file name
 */
export declare function blobToFile(blob: Blob, fileName: string): File;

/**
 * Chunks an array into smaller arrays of a specified size.
 *
 * @param arr The array to be chunked, of type `T[]`.
 * @param size The size of each chunk, of type `number`.
 * @return An array of arrays of type `T[][]`.
 */
export declare function chunk<T>(arr: T[], size: number): T[][];

/**
 * Clamp a value between a minimum and maximum value.
 *
 * @param value - The value to be clamped
 * @param min - The minimum value that `value` can be
 * @param max - The maximum value that `value` can be
 * @return The clamped value between `min` and `max`
 */
export declare function clamp(value: number, min: number, max: number): number;

/**
 * Copies the given string to the clipboard.
 *
 * @param str - the string to be copied
 * @return
 */
export declare function copy(str: string): void;

/**
 * A function that cuts a string based on the maximum length considering both single and double byte characters.
 *
 * @param {string} str - the input string to be processed
 * @param {number} maxLength - the maximum length the string should be cut to
 * @return {string} the resulting string after cutting based on the maxLength
 */
export declare const cutStrByFullLength: (str: string, maxLength: number) => string;

/**
 * Validates the format and value of a date string.
 *
 * @param dateStr - The date string to be validated (format: YYYY/MM/DD).
 * @return true if the date string is valid, false otherwise.
 */
export declare function dateValidate(dateStr: string): boolean;

/**
 * Returns a debounced function that delays invoking the input function until after `delay` milliseconds have elapsed since the last time the debounced function was invoked.
 *
 * @param func - The function to be invoked after `delay` milliseconds have elapsed since the last time the debounced function was invoked.
 * @param delay - The number of milliseconds to delay before invoking the `func`.
 * @return - Returns the debounced function.
 */
export declare function debounce(func: Function, delay: number): Function;

/**
 * Function to detect the type of device based on the user agent.
 *
 * @return The type of device, either 'Mobile' or 'Desktop'
 */
export declare function detectDeviceType(): string;

/**
 * Downloads a file from the given URL with the specified file name.
 *
 * @param url - The URL of the file to download
 * @param fileName - The name to save the downloaded file as
 * @return
 */
export declare function download(url: string, fileName: string): void;

export declare const EMAIL_REGEX: RegExp;

/**
 * Converts a file to base64 encoding.
 *
 * @param file - The file to be converted to base64.
 * @return A promise that resolves with the base64 encoded data of the file.
 */
export declare function fileToBase64(file: File): Promise<string>;

/**
 * Converts a file to a Blob object.
 *
 * @param file - The file to be converted to a Blob.
 * @return A Promise that resolves with the Blob object.
 */
export declare function fileToBlob(file: File): Promise<Blob>;

/**
 * Format a number to a specific precision and add thousand separators.
 *
 * @param val - The number to be formatted
 * @param precision - The number of decimal places to round to (default is 2)
 * @return The formatted number with the specified precision and thousand separators
 */
export declare function formatterNumberPrecision(val: number, precision?: number): string;

/**
 * Format the given timestamp according to the specified format.
 *
 * @param timestamp - The timestamp to format
 * @param format - The format string for the output
 * @return The formatted timestamp
 */
export declare function formatTimestamp(timestamp: number, format: string): string;

/**
 * Calculates the full length of a string taking into account unicode characters.
 *
 * @param {string} str - the input string to calculate the full length of
 * @return {number} the full length of the input string
 */
export declare const getStrFullLength: (str?: string) => number;

/**
 * Returns an object containing the parameters of the given URL.
 *
 * @param url The URL to be parsed, of type `string`.
 *
 * @returns An object containing the parameters of the URL, of type `{ [key: string]: string }`.
 */
export declare function getURLParameters(url: string): {
    [key: string]: string;
};

/**
 * Converts a hexadecimal color code to its RGBA equivalent.
 *
 * @param hex - the hexadecimal color code to convert
 * @param alpha - the alpha value for the RGBA color (optional, default is 1)
 * @return the RGBA equivalent of the input hexadecimal color code
 */
export declare function hexToRGBA(hex: string, alpha?: number): string;

/**
 * Applicable to mainland China
 */
export declare const ID_CARD_REGEX: RegExp;

/**
 * Executes the callback immediately and then sets up a recurring interval to call the callback function.
 *
 * @param cb - The callback function to be executed.
 * @param ms - The time interval for the recurring callback.
 * @param argus - The arguments to be passed to the callback function.
 * @return The ID value that uniquely identifies the interval.
 */
export declare function immediateInterval(cb: Function, ms: number, ...argus: any[]): number;

export declare const isArray: (arg: any) => arg is any[];

/**
 * Check if the input string is a Chinese string.
 * @param str The input string to be checked
 * @return Whether the input string is a Chinese string
 */
export declare function isChinese(str: string): boolean;

/**
 * Check if the value is a Date object.
 * @param {unknown} val - The value to be checked.
 * @returns {boolean} - Returns true if the value is a Date object, otherwise returns false.
 */
export declare const isDate: (val: unknown) => boolean;

/**
 * Check if the given number is a decimal.
 *
 * @param num - The number to be checked
 * @return true if the number is a decimal, false otherwise
 */
export declare function isDecimal(num: number): boolean;

/**
 * Check if the input string is a valid decimal number.
 *
 * @param str - The input string to be checked
 * @return Whether the input string is a valid decimal number
 */
export declare function isDecimalStr(str: string): boolean;

/**
 * Check if the input value is empty based on its type.
 *
 * @param val - The value to be checked for emptiness
 * @return true if the value is empty, false otherwise
 */
export declare function isEmpty(val: any): boolean;

/**
 * Check if the value is a function.
 * @param {unknown} val - The value to be checked.
 * @returns {boolean} - Returns true if the value is a function, otherwise returns false.
 */
export declare const isFunction: (val: unknown) => boolean;

/**
 * Checks if the browser is Internet Explorer.
 *
 * @return true if the browser is Internet Explorer, false otherwise
 */
export declare function isIE(): boolean;

/**
 * Check if the value is a Map object.
 * @param {unknown} val - The value to be checked.
 * @returns {boolean} - Returns true if the value is a Map object, otherwise returns false.
 */
export declare const isMap: (val: unknown) => boolean;

/**
 * Check if the value is a number.
 * @param {unknown} val - The value to be checked.
 * @returns {boolean} - Returns true if the value is a number, otherwise returns false.
 */
export declare const isNum: (val: unknown) => boolean;

/**
 * Check if the value is an object.
 * @param {unknown} val - The value to be checked.
 * @returns {boolean} - Returns true if the value is an object, otherwise returns false.
 */
export declare const isObject: (val: unknown) => boolean;

/**
 * Check if the given object is a Promise.
 *
 * @param {any} obj - The object to be checked
 * @return {boolean} Whether the object is a Promise or not
 */
export declare const isPromise: <T extends unknown = unknown>(val: unknown) => boolean;

/**
 * Check if the value is a RegExp object.
 * @param {unknown} val - The value to be checked.
 * @returns {boolean} - Returns true if the value is a RegExp object, otherwise returns false.
 */
export declare const isRegExp: (val: unknown) => boolean;

/**
 * Check if the value is a Set object.
 * @param {unknown} val - The value to be checked.
 * @returns {boolean} - Returns true if the value is a Set object, otherwise returns false.
 */
export declare const isSet: (val: unknown) => boolean;

/**
 * Check if the value is a string.
 * @param {unknown} val - The value to be checked.
 * @returns {boolean} - Returns true if the value is a string, otherwise returns false.
 */
export declare const isString: (val: unknown) => boolean;

/**
 * Check if the value is a symbol.
 * @param {unknown} val - The value to be checked.
 * @returns {boolean} - Returns true if the value is a symbol, otherwise returns false.
 */
export declare const isSymbol: (val: unknown) => boolean;

/**
 * Check if the current platform is a Windows operating system.
 *
 * @return true if the platform is Windows, false otherwise
 */
export declare function isWin(): boolean;

/**
 * Check if the user agent indicates that the browser is WeChat.
 *
 * @return true if the user agent indicates that the browser is WeChat, false otherwise
 */
export declare function isWX(): boolean;

export declare const MOBILE_REGEX: RegExp;

export declare const objectToString: () => string;

/**
 * Calculate the percentage of a given value.
 *
 * @param value - the value to calculate the percentage of
 * @param decimal - the number of decimal places to round the percentage to (default is 2)
 * @return the formatted percentage value
 */
export declare function percentage(value: number, decimal?: number): string;

/**
 * Returns a human-readable file size.
 *
 * @param size - The size of the file in bytes
 * @return A formatted string representing the file size
 */
export declare function prettyFileSize(size: number): string;

/**
 * Generate a random string of a specified length.
 *
 * @param len - The length of the random string (default is 32)
 * @return The randomly generated string
 */
export declare function randomString(len?: number): string;

/**
 * Removes the keep alive cache for the given Vue instance.
 *
 * @param vm - The Vue instance to remove the keep alive cache for.
 * @return
 */
export declare function removeKeepAliveCache(vm: any): void;

/**
 * Saves the provided content to a file with the specified file name.
 *
 * @param {any} content - The content to be saved to the file
 * @param {string} fileName - The name of the file to save the content as
 * @return {void}
 */
export declare function saveFile(content: any, fileName: string): void;

/**
 * Scrolls to the given coordinates.
 *
 * @param {object} options - The options object.
 * @param {function} options.getContainer - The function to get the container element.
 * @param {number} options.left - The left coordinate.
 * @param {number} options.top - The top coordinate.
 * @return {void}
 */
declare function scrollTo_2(options: {
    getContainer?: () => HTMLElement;
    left?: number;
    top?: number;
}): void;
export { scrollTo_2 as scrollTo }

/**
 * Sets the document title and triggers a force refresh in WeChat environment.
 *
 * @param {string} title - The new title for the document.
 */
export declare function setDocumentTitle(title: string): void;

/**
 * Randomizes the order of the values of an array, returning a new array.
 * @param arr The array to be shuffled, of type `T[]`.
 * @returns A new array with the same elements as `arr` but in a random order, of type `T[]`.
 */
export declare function shuffle<T>(arr: T[]): T[];

/**
 * Pause execution for a specified number of milliseconds.
 *
 * @param ms - The number of milliseconds to pause execution.
 * @return A promise that resolves after the specified number of milliseconds.
 */
export declare const sleep: (ms: number) => Promise<void>;

export declare const TEL_REGEX: RegExp;

/**
 * Toggles the full screen mode of the document.
 *
 * @return
 */
export declare function toggleFullScreen(): void;

/**
 * Converts a string to kebab-case, with all words separated by hyphens.
 * @param str The input string to be converted, may be any type.
 * @return The resulting kebab-case string. If the input is not a string, the result will be the empty string.
 */
export declare function toKebabCase(str: string): string;

/**
 * @function toTypeString
 * @returns {string}
 */
export declare const toTypeString: (value: unknown) => string;

/**
 * Triggers a window resize event.
 */
export declare function triggerWindowResizeEvent(): void;

/**
 * Generates a new array with unique elements.
 *
 * @param {Array} arr - The input array
 * @return {Array} A new array with unique elements
 */
export declare function uniq<T>(arr: T[]): T[];

export declare const URL_REGEX: RegExp;

/**
 * Generates a random UUID.
 *
 * @param randomLength - The length of the random part of the UUID.
 * @return The generated UUID.
 */
export declare function uuid(randomLength?: number): string;

/**
 * Function to determine the appropriate greeting based on the time of day.
 *
 * @return The appropriate greeting for the time of day.
 */
export declare function welcome(): string;

export declare const WIN_REGEX: RegExp;

export { }
