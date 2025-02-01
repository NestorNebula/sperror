/**
 * An extended Error
 * ```js
 * const sperror = new Sperror('Title', 'Message');
 * ```
 */
interface Sperror extends Error {
  /**
   * The name of the Sperror class
   * @default "Sperror"
   */
  name: string;

  /**
   * The title of the Sperror
   */
  title: string;

  /**
   * The message of the Sperror. Same as message property
   */
  msg: string;

  /**
   * An HTTP response status code
   */
  statusCode?: number;

  /**
   * Logs Sperror in the console
   * ```js
   * const sperror = new Sperror('Demo Error', 'I am an extended Error!')
   * // Logs: Demo Error: I am an extended Error!
   * ```
   * @returns
   */
  log: () => void;

  /**
   * Throws the Sperror
   * @returns
   */
  throw: () => never;
}

class Sperror extends Error {
  name = 'Sperror';

  log: () => void = () => {
    console.error(
      `${this.title}: ${this.msg}${
        this.statusCode ? ` (${this.statusCode})` : ''
      }`
    );
  };

  throw: () => never = () => {
    throw this;
  };

  /**
   * Creates a new Sperror
   * @param title The title of the Sperror
   * @param message The message of the Sperror
   * @param statusCode An HTTP response status code
   */
  constructor(title: string, message: string, statusCode?: number) {
    super(message);
    this.title = title;
    this.msg = message;
    this.statusCode = statusCode;
  }
}

export default Sperror;
