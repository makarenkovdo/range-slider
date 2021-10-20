/* eslint-env jquery */
import '../index.scss';

export default class SliderView {
  constructor(id) {
    this.$id = $(`#${id}`);
    this.$element = '';
    this.$parent = '';
    this.isVertical = false;
    this.stepSignAfterComma = 0;
    // this.corrector = 0;
  }

  initValues(controller) {
    this.$element = controller.slider[0].$element;
    this.$parent = controller.field.$element;
    this.isVertical = controller.field.isVertical;
    $(document).ready(() => {
      if (this.isVertical) {
        const elementHeight = parseInt(this.$element.css('height'), 10);
        const parentHeight = parseInt(this.$parent.css('height'), 10);
        this.corrector = (elementHeight / parentHeight) * 50;
      } else {
        const elementWidth = parseInt(this.$element.css('width'), 10);
        const parentWidth = parseInt(this.$parent.css('width'), 10);
        this.corrector = (elementWidth / parentWidth) * 50;
      }
    });
  }

  addSlider(id, i, isVert, minMax) {
    let positioning = 'left';
    let index = i;
    if (this.isVertical) {
      positioning = 'top';
      if (index === 0) index = 1;
      else index = 0;
    }
    this.$id.append(
      `<span class="slider instance-${i}" style="${positioning}:${minMax[index]}%"></span>`,
    );
  }

  addTipNumber(id, i, isVert, minMax) {
    let positioning = 'left';
    let index = i;
    if (this.isVertical) {
      positioning = 'top';
      if (index === 0) index = 1;
      else index = 0;
    }
    this.$id.append(
      `<span class='tip-number instance-${i}' style="${positioning}:${minMax[index]}%"><span>0</span></span>`,
    );
    this.updateTextNumber(minMax[index], index); // todo update with REAL minmax
  }

  addBar() {
    this.$id.append("<div class='slider-bar'></div>");
  }

  updateBar(slider) {
    if (this.isVertical) {
      this.$id
        .children('.slider-bar')
        .css('height', `${slider.stepPosition}%`)
        .css('top', `${100 - slider.stepPosition}%`);
    } else {
      this.$id.children('.slider-bar').css('width', `${slider.stepPosition}%`);
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
    const barPosesArray = positionSwitcher.map((v1, i1, arr) => (arr.map((v2, i2) => parseInt(this.$id.children(`.instance-${i2}`).css(`${v1[0]}`), 10))));

    //  barSize = [horizontalSliderWidth,verticalSliderHeight]
    const barSize = barPosesArray.map((v) => Math.abs(v[1] - v[0]));

    //  helpVariable for rotation left/top value
    const helpVariable = [barPosesArray[index][index], barSize[index]];

    positionSwitcher[index].forEach(
      (v, i) => {
        this.$id.children('.slider-bar').css(
          `${v}`,
          helpVariable[i] + (this.$element.width() / 2) * !i,
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
    const preperatoryPosition = (parseInt(this.$id.children('.slider').css(positioning[1]), 10)
      / parseInt(this.$id.css(positioning[1]), 10)) * 50;
    const getVerticalPosition = () => `${100 - updatingSlider.stepPosition - preperatoryPosition}%`;
    const getHorizontalPosition = () => `${updatingSlider.stepPosition - preperatoryPosition - preperatoryPosition * updatingSlider.instance}%`;
    const position = this.isVertical
      ? getVerticalPosition()
      : getHorizontalPosition();
    this.$parent.find(`.instance-${updatingSlider.instance}`).css(positioning[0], position);
  }

  // updateTipPosition(direction) {
  //     this.$parent.find('.tip-number .instance-1').css(
  //         direction,
  //         this.$element.css(direction)
  //         // parseInt(this.$element.css('width')) / 2
  //     )
  // }
  updateTextNumber(stepValue, instance) {
    this.$parent.find(`.instance-${instance} span`).text(`${stepValue}`);
  }
}
