import Sperror from '../src/sperror';

describe('Sperror', () => {
  const sperror = new Sperror('Title', 'Message', 400);

  it('creates Sperror', () => {
    expect(sperror.name).toBe('Sperror');
    expect(sperror.title).toBe('Title');
    expect(sperror.msg).toBe('Message');
    expect(sperror.message).toBe(sperror.msg);
    expect(sperror.statusCode).toBe(400);
  });

  it('logs Sperror on log call', () => {
    const mockConsoleError = jest.fn();
    console.error = mockConsoleError;
    sperror.log();
    expect(mockConsoleError).toHaveBeenCalled();
    expect(mockConsoleError.mock.calls[0][0]).toBe(
      `${sperror.title}: ${sperror.message} (${sperror.statusCode})`
    );
  });

  it('throws sperror on throw call', () => {
    try {
      sperror.throw();
    } catch (e) {
      expect(e).toBeInstanceOf(Sperror);
    }
  });
});
