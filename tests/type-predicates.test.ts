import {
  isSperror,
  isBackendSperror,
  isFrontendSperror,
} from '../src/utils/type-predicates';
import Sperror from '../src/sperror';
import { BackendSperror, FrontendSperror } from '../src/extend';

const sperror = new Sperror('Title', 'Message');
const backendSperror = new BackendSperror('Title', 'Message', 500);
const frontendSperror = new FrontendSperror('Title', 'Message');

describe('isSperror', () => {
  it('returns true for Sperror and its descendants', () => {
    expect(isSperror(sperror)).toBeTruthy();
    expect(isSperror(backendSperror)).toBeTruthy();
    expect(isSperror(frontendSperror)).toBeTruthy();
  });
});

describe('isBackendSperror', () => {
  it('returns false for Sperror', () => {
    expect(isBackendSperror(sperror)).toBeFalsy();
  });

  it('returns true for BackendSperror', () => {
    expect(isBackendSperror(backendSperror)).toBeTruthy();
  });

  it('returns false for FrontendSperror', () => {
    expect(isBackendSperror(frontendSperror)).toBeFalsy();
  });
});

describe('isFrontendSperror', () => {
  it('returns false for Sperror', () => {
    expect(isFrontendSperror(sperror)).toBeFalsy();
  });

  it('returns false for BackendSperror', () => {
    expect(isFrontendSperror(backendSperror)).toBeFalsy();
  });

  it('returns true for FrontendSperror', () => {
    expect(isFrontendSperror(frontendSperror)).toBeTruthy();
  });
});
