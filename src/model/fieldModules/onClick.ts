import RunnerModel from '../RunnerModel';
import { activateOnClickListener } from './onClick/onClickUtility';

const onClick = function updateRunnerOnFieldClick(runners: RunnerModel[], isRange: boolean): void {
  activateOnClickListener(this, runners, isRange);
};

export default onClick;
