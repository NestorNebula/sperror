import Sperror from '../sperror';
import { BackendSperror, FrontendSperror } from '../extend';

/**
 *
 * @param error
 * @returns {boolean} True if error is Sperror, otherwise false
 */
function isSperror(error: any): error is Sperror {
  return error instanceof Sperror;
}

/**
 *
 * @param error
 * @returns {boolean} True if error is BackendSperror, otherwise false
 */
function isBackendSperror(error: any): error is BackendSperror {
  return error instanceof BackendSperror;
}

/**
 *
 * @param error
 * @returns {boolean} True if error is FrontendSperror, otherwise false
 */
function isFrontendSperror(error: any): error is FrontendSperror {
  return error instanceof FrontendSperror;
}

export { isSperror, isBackendSperror, isFrontendSperror };
