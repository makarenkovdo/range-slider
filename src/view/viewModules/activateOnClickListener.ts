import RunnerModel from '../../model/RunnerModel';
import { activateOnClickListener } from '../../model/fieldModules/onClick/onClickUtility';

const onClick = function updateRunnerOnFieldClick(runners: RunnerModel[], isRange: boolean): void {
  activateOnClickListener(this, runners, isRange);
};

export default onClick;
