import { BackendSperror, FrontendSperror } from '../src/extend';

describe('BackendSperror', () => {
  it('creates a BackendSperror with a statusCode', () => {
    const backendSperror = new BackendSperror('Title', 'Message', 500);
    expect(backendSperror.statusCode).toBe(500);
    expect(backendSperror.name).toBe('BackendSperror');
  });
});

describe('FrontendSperror', () => {
  it('creates a FrontendSperror without statusCode', () => {
    const frontendSperror = new FrontendSperror('Title', 'Message');
    expect(frontendSperror.statusCode).toBeUndefined();
    expect(frontendSperror.name).toBe('FrontendSperror');
  });
});
