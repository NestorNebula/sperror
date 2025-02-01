import Sperror from '../sperror';
import { BackendSperror, FrontendSperror } from '../extend';

function isSperror(error: any): error is Sperror {
  return error instanceof Sperror;
}

function isBackendSperror(error: any): error is BackendSperror {
  return error instanceof BackendSperror;
}

function isFrontendSperror(error: any): error is FrontendSperror {
  return error instanceof FrontendSperror;
}

export { isSperror, isBackendSperror, isFrontendSperror };
