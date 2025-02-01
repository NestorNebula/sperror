import Sperror from './sperror';

interface BackendSperror extends Sperror {
  name: 'BackendSperror';
  statusCode: number;
}

class BackendSperror extends Sperror {
  name: 'BackendSperror' = 'BackendSperror';

  constructor(title: string, message: string, statusCode: number) {
    super(title, message, statusCode);
  }
}

interface FrontendSperror extends Sperror {
  name: 'FrontendSperror';
  statusCode: undefined;
}

class FrontendSperror extends Sperror {
  name: 'FrontendSperror' = 'FrontendSperror';

  constructor(title: string, message: string) {
    super(title, message);
  }
}

export { BackendSperror, FrontendSperror };
