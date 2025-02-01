import Sperror from './sperror';

interface BackendSperror extends Sperror {
  statusCode: number;
}

class BackendSperror extends Sperror {
  constructor(title: string, message: string, statusCode: number) {
    super(title, message, statusCode);
  }
}

interface FrontendSperror extends Sperror {
  statusCode: undefined;
}

class FrontendSperror extends Sperror {
  constructor(title: string, message: string) {
    super(title, message);
  }
}

export { BackendSperror, FrontendSperror };
