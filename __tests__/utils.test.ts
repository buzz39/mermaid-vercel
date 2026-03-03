import { describe, expect, test } from 'vitest'
import { parseSvgDimensions } from '../app/lib/utils'

describe('parseSvgDimensions', () => {
  test('extracts width and height from SVG attributes', () => {
    const svg = '<svg width="500" height="300"></svg>';
    expect(parseSvgDimensions(svg)).toEqual({ width: 500, height: 300 });
  });

  test('extracts dimensions from viewBox when no width/height', () => {
    const svg = '<svg viewBox="0 0 800 400"></svg>';
    expect(parseSvgDimensions(svg)).toEqual({ width: 800, height: 400 });
  });

  test('prefers explicit width/height over viewBox', () => {
    const svg = '<svg width="200" height="100" viewBox="0 0 800 400"></svg>';
    expect(parseSvgDimensions(svg)).toEqual({ width: 200, height: 100 });
  });

  test('handles viewBox with comma separators', () => {
    const svg = '<svg viewBox="0,0,600,300"></svg>';
    expect(parseSvgDimensions(svg)).toEqual({ width: 600, height: 300 });
  });

  test('returns null for SVG without dimensions', () => {
    const svg = '<svg></svg>';
    expect(parseSvgDimensions(svg)).toBeNull();
  });

  test('returns null for non-SVG string', () => {
    const svg = '<div>not svg</div>';
    expect(parseSvgDimensions(svg)).toBeNull();
  });

  test('handles float dimensions', () => {
    const svg = '<svg width="123.45" height="67.89"></svg>';
    expect(parseSvgDimensions(svg)).toEqual({ width: 123.45, height: 67.89 });
  });

  test('handles viewBox with non-zero origin', () => {
    const svg = '<svg viewBox="10 20 400 200"></svg>';
    expect(parseSvgDimensions(svg)).toEqual({ width: 400, height: 200 });
  });
});
