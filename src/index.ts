interface Sperror extends Error {
  title: string;
  msg?: string;
  statusCode: number;
}

class Sperror extends Error {
  constructor(title: string, message?: string, statusCode = 500) {
    super(message || title);
    this.title = title;
    this.msg = message;
    this.statusCode = statusCode;
  }
}

export default Sperror;
