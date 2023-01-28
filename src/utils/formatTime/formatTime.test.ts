import { formatTime } from './formatTime';

describe('testing function formatTime(), right values', () => {
  it('should return date in new format', () => {
    const result = formatTime('2022-12-11T19:48:16.956Z');
    expect(result).toBe('11.12.2022 19:48:16');
  });

  it('should return stub message', () => {
    const result = formatTime('');
    expect(result).toBe('');
  });

  it('should return day with zero: 2022-12-05T19:48:16.956Z', () => {
    const result = formatTime('2022-12-05T19:48:16.956Z');
    expect(result).toBe('05.12.2022 19:48:16');
  });

  it('should return month with zero: 05.07.2022 19:48:16', () => {
    const result = formatTime('2022-07-05T19:48:16.956Z');
    expect(result).toBe('05.07.2022 19:48:16');
  });

  it('should return hour with zero: 15.07.2022 09:48:16', () => {
    const result = formatTime('2022-07-15T09:48:16.956Z');
    expect(result).toBe('15.07.2022 09:48:16');
  });

  it('should return minute with zero: 15.07.2022 19:03:16', () => {
    const result = formatTime('2022-07-15T19:03:16.956Z');
    expect(result).toBe('15.07.2022 19:03:16');
  });

  it('should return second with zero: 15.07.2022 19:33:04', () => {
    const result = formatTime('2022-07-15T19:33:04.956Z');
    expect(result).toBe('15.07.2022 19:33:04');
  });
});
