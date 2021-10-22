/* eslint-env jquery */
import '../index.scss';
import { addSliderToDom, prepareSliderArgs } from './view-modules/createSliderView';
import { prepareTipNumberArgs, addTipNumberToDom } from './view-modules/createTipNumber';

export default class SliderView {
  constructor(id) {
    this.$field = $(`#${id}`);
    this.$slider = '';
    this.$bar = '';
    this.sliderSize = [];
    this.isVertical = false;
    this.stepSignAfterComma = 0;
    // this.createSliderViewModules = { addSliderToDom, prepareSliderArgs };
    // this.corrector = 0;
  }

  initializeValues(sliderSize, fieldSize, isVertical) {
    this.sliderSize = sliderSize;
    this.fieldSize = fieldSize;
    this.isVertical = isVertical;
    if (this.isVertical) {
      this.corrector = (sliderSize[1] / fieldSize[1]) * 50;
    } else {
      this.corrector = (sliderSize[0] / fieldSize[0]) * 50;
    }
  }

  initializeDomElements($slider) {
    this.$slider = $slider;
  }

  createSliderView(i, isVertical, $slider) {
    addSliderToDom(prepareSliderArgs(i, isVertical), this.$field, this.sliderSize);
    // this.updateAfterCreateSliderView($slider);
  }

  updateAfterCreateSliderView() {
    this.$slider = $slider;
  }

  createTipNumber(i, isVertical) {
    this.updateTextNumber(addTipNumberToDom(prepareTipNumberArgs(i, isVertical), this.$field));
  }

  addBar() {
    this.$field.append("<div class='slider-bar'></div>");
    this.$bar = this.$field.children('.slider-bar');
  }

  updateBar(slider) {
    if (this.isVertical) {
      this.$field
        .children('.slider-bar')
        .css('height', `${slider.stepPosition}%`)
        .css('top', `${100 - slider.stepPosition}%`);
    } else {
      this.$field.children('.slider-bar').css('width', `${slider.stepPosition}%`);
    }
  }

  updateRangeBar() {
    $(document).ready(() => {
      if (this.isVertical) this.updateRangeBarHelper(1);
      else this.updateRangeBarHelper(0);
    });
  }

  updateRangeBarHelper(index) {
    const positionSwitcher = [
      ['left', 'width'],
      ['top', 'height'],
    ];

    /*  barPosesArray = [[instance0-left,instance1-left],[instance0-top,instance1-top]]
        for horizontal and vertical sliders accordingly */
    // prettier-ignore
    const barPosesArray = positionSwitcher.map((v1, i1, arr) => (arr.map((v2, i2) => parseInt(this.$field.children(`.instance-${i2}`).css(`${v1[0]}`), 10))));

    //  barSize = [horizontalSliderWidth,verticalSliderHeight]
    const barSize = barPosesArray.map((v) => Math.abs(v[1] - v[0]));

    //  helpVariable for rotation left/top value
    const helpVariable = [barPosesArray[index][index], barSize[index]];

    positionSwitcher[index].forEach(
      (v, i) => {
        this.$field.children('.slider-bar').css(
          `${v}`,
          helpVariable[i] + (this.$slider.width() / 2) * !i,
          //    shift on half a width WHEN it's a LEFT(TOP) position of instance-0
        );
      },

      //    left&width OR top&height depending on index
    );
  }

  updatePosition(updatingSlider) {
    //  HERE THE PROBLEM WITH NO-RANGE SLIDER(ONE INSTANCE)
    const positioning = [
      ['left', 'width'],
      ['top', 'height'],
    ];
    if (this.isVertical) this.updatePositionHelper(updatingSlider, positioning[1]);
    else this.updatePositionHelper(updatingSlider, positioning[0]);
  }

  // prettier-ignore
  updatePositionHelper(updatingSlider, positioning) {
    const preperatoryPosition = (parseInt(this.$field.children('.slider').css(positioning[1]), 10)
      / parseInt(this.$field.css(positioning[1]), 10)) * 50;
    const getVerticalPosition = () => `${100 - updatingSlider.stepPosition - preperatoryPosition}%`;
    const getHorizontalPosition = () => `${updatingSlider.stepPosition - preperatoryPosition - preperatoryPosition * updatingSlider.instance}%`;
    const position = this.isVertical
      ? getVerticalPosition()
      : getHorizontalPosition();
    this.$field.find(`.instance-${updatingSlider.instance}`).css(positioning[0], position);
  }

  // updateTipPosition(direction) {
  //     this.$field.find('.tip-number .instance-1').css(
  //         direction,
  //         this.$slider.css(direction)
  //         // parseInt(this.$slider.css('width')) / 2
  //     )
  // }
  updateTextNumber(stepValue, instance) {
    this.$field.find(`.instance-${instance} span`).text(`${stepValue}`);
  }

  updateThisConstructor(obj) {
    const { $field = this.id, $slider } = obj;
    this.$field = $field;
    this.$slider = $slider;
    this.$field = $(`#${id}`);
    this.$slider = '';
    this.$field = '';
    this.$bar = '';
    this.sliderSize = [];
    this.isVertical = false;
    this.stepSignAfterComma = 0;
  }
}
