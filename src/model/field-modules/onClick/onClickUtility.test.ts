import { defineNearestSlider } from './onClickUtility';

/*   cursorXY: number[],
  slidersPosition: number[],
  isVertical: boolean,
  fieldSize: string[],
  */
/* note, that vertical cursorY starting in upper part of screen, and
 it is expected contraversary result */
test('return instance number of nearest slider to click-coordinates', () => {
  expect(defineNearestSlider([100, 10], [0, 100], false, ['400px', '20px'])).toBe(0);
  expect(defineNearestSlider([300, 10], [0, 100], false, ['400px', '20px'])).toBe(1);
  expect(defineNearestSlider([30, 0], [0, 100], true, ['40px', '200px'])).toBe(1);
  expect(defineNearestSlider([30, 1], [50, 100], true, ['40px', '200px'])).toBe(1);
  expect(defineNearestSlider([30, 50], [0, 100], true, ['40px', '200px'])).toBe(1);
  expect(defineNearestSlider([30, 110], [0, 100], true, ['40px', '200px'])).toBe(0);
  expect(defineNearestSlider([30, 200], [0, 70], true, ['40px', '200px'])).toBe(0);
});
