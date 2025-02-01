import tryWithSperror from '../src/utils/try';
import Sperror from '../src/sperror';

describe('tryWithSperor', () => {
  const max = 10;
  const getData = () => Math.round(Math.random() * max);

  it('returns data on success', () => {
    const data = getData();
    const { result, error } = tryWithSperror(() => data);
    expect(result).toBe(data);
    expect(error).toBeNull();
  });

  it('returns sperror on error', () => {
    const data = getData();
    const { result, error } = tryWithSperror(() => {
      if (data < max + 1) {
        throw null;
      }
      return data;
    });
    expect(error).toBeTruthy();
    expect(result).toBeInstanceOf(Sperror);
  });
});
