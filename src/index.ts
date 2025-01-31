interface Sperror extends Error {
  name: 'Sperror';
  title: string;
  msg: string;
  statusCode?: number;

  log: () => void;
  throw: () => never;
}

class Sperror extends Error {
  log: () => void = () => {
    console.error(
      `${this.title}: ${this.msg}${
        this.statusCode ? `(${this.statusCode})` : ''
      }`
    );
  };

  throw: () => never = () => {
    throw this;
  };

  constructor(title: string, message: string, statusCode?: number) {
    super(message);
    this.name = 'Sperror';
    this.title = title;
    this.msg = message;
    this.statusCode = statusCode;
  }
}

export default Sperror;
