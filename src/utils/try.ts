import Sperror from '../sperror';
import { isSperror } from './type-predicates';

type TryWithSperror<Type> = TryWithSperrorSuccess<Type> | TryWithSperrorError;

interface TryWithSperrorSuccess<Type> {
  result: Type;
  error: null;
}

interface TryWithSperrorError {
  result: Sperror;
  error: true;
}

function tryWithSperror<Type>(cb: () => Type): TryWithSperror<Type> {
  try {
    return { result: cb(), error: null };
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
