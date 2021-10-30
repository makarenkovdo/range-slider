import defineNearestRunner from '../../model/fieldModules/handleClick/defineNearestRunner';

/* cursorXY: number[],
  isVertical: boolean,
  fieldSize: number[],
  runnersPosition: number[],
  */
/* note, that vertical cursorY starting in upper part of screen, and
 it is expected contraversary result */
test('return instance number of nearest runner to click-coordinates', () => {
  expect(defineNearestRunner([100, 10], false, [400, 20], [0, 100])).toBe(0);
  expect(defineNearestRunner([300, 10], false, [400, 20], [0, 100])).toBe(1);
  expect(defineNearestRunner([30, 190], true, [400, 200], [0, 70])).toBe(0);
  expect(defineNearestRunner([30, 50], true, [400, 20], [0, 100])).toBe(1);
});
