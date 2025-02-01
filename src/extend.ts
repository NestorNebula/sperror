import Sperror from './sperror';

/**
 * Extended Sperror for backend errors
 * ```js
 * const backendSperror = new BackendSperror('Title', 'Message', 500);
 * ```
 */
interface BackendSperror extends Sperror {
  /**
   * The name of the BackendSperror class
   * @default "BackendSperror"
   */
  name: 'BackendSperror';

  /**
   * An HTTP response status code
   */
  statusCode: number;
}

class BackendSperror extends Sperror {
  name: 'BackendSperror' = 'BackendSperror';

  /**
   * Creates a new BackendSperror
   * @param title The title of the BackendSperror
   * @param message The message of the BackendSperror
   * @param statusCode An HTTP response status code
   */
  constructor(title: string, message: string, statusCode: number) {
    super(title, message, statusCode);
  }
}

/**
 * Extended Sperror for frontend errors
 * ```js
 * const frontendError = new FrontendError('Title', 'Message');
 * ```
 */
interface FrontendSperror extends Sperror {
  /**
   * The name of the FrontendSperror class
   * @default "FrontendSperror"
   */
  name: 'FrontendSperror';
  statusCode: undefined;
}

class FrontendSperror extends Sperror {
  name: 'FrontendSperror' = 'FrontendSperror';

  /**
   * Creates a new FrontendSperror
   * @param title The title of the FrontendSperror
   * @param message The message of the FrontendSperror
   */
  constructor(title: string, message: string) {
    super(title, message);
  }
}

export { BackendSperror, FrontendSperror };
