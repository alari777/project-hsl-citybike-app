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

describe('testing function formatTime(), wrong values', () => {
  it('wrong data', () => {
    const result = formatTime('wrong data');
    expect(result).toBe('');
  });

  it('should return empty, wrong day: AA.07.2022 19:33:04', () => {
    const result = formatTime('2022-07-AAT19:33:04.956Z');
    expect(result).toBe('');
  });

  it('should return empty, wrong month', () => {
    const result = formatTime('2022-AA-15T19:33:04.956Z');
    expect(result).toBe('');
  });

  it('should return empty, wrong year: 15.07.AAAA 19:33:04', () => {
    const result = formatTime('AAAA-07-15T19:33:04.956Z');
    expect(result).toBe('');
  });

  it('should return empty, wrong hour: 15.07.2022 AA:33:04', () => {
    const result = formatTime('2022-07-15TAA:33:04.956Z');
    expect(result).toBe('');
  });

  it('should return empty, wrong minute: 15.07.2022 19:AA:04', () => {
    const result = formatTime('2022-07-15T19:AA:04.956Z');
    expect(result).toBe('');
  });

  it('should return empty, wrong second: 15.07.2022 19:33:AA', () => {
    const result = formatTime('2022-07-15T19:33:AA.956Z');
    expect(result).toBe('');
  });
});
