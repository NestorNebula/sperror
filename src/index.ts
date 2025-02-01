import Sperror from './sperror';
import { BackendSperror, FrontendSperror } from './extend';
import {
  isSperror,
  isBackendSperror,
  isFrontendSperror,
} from './utils/type-predicates';
import tryWithSperror from './utils/try';

export default Sperror;
export {
  BackendSperror,
  FrontendSperror,
  isSperror,
  isBackendSperror,
  isFrontendSperror,
  tryWithSperror,
};
