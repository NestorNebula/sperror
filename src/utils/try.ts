import Sperror from '../sperror';
import { isSperror } from './type-predicates';

/**
 * The value returned by tryWithSperror
 */
type TryWithSperror<Type> = TryWithSperrorSuccess<Type> | TryWithSperrorError;

/**
 * The value returned by tryWithSperror after success callback call
 */
interface TryWithSperrorSuccess<Type> {
  /**
   * The result returned by the callback function
   */
  result: Type;

  /**
   * A boolean value depending on the success of the callback call. Always false on call success
   * @default true
   */
  error: false;
}

/**
 * The value returned by tryWithSperror after an error occured during the callback call
 */
interface TryWithSperrorError {
  /**
   * An instance of Sperror describing the error that occured during the callback call
   */
  result: Sperror;

  /**
   * A boolean value depending on the success of the callback call. Always true on call error
   */
  error: true;
}

/**
 * Returns the result of the callback function or an instance of Sperror if the callback throwed something
 * ```js
 * let { result, error } = tryWithSperror(() => 10);
 * result === 10 // True
 * !error // True
 *
 * let { result, error } = tryWithSperror(() => {
 *  throw 10;
 * });
 * result instanceof Sperror // True
 * error // True
 * ```
 * @param cb A callback function
 * @returns
 */
function tryWithSperror<Type>(cb: () => Type): TryWithSperror<Type> {
  try {
    return { result: cb(), error: false };
  } catch (e) {
    if (e instanceof Error) {
      if (isSperror(e)) {
        return { result: e, error: true };
      }
      return { result: new Sperror(e.name, e.message), error: true };
    }
    return {
      result: new Sperror(
        'Unexpected Error',
        'The callback throwed something unexpected.'
      ),
      error: true,
    };
  }
}

export default tryWithSperror;
