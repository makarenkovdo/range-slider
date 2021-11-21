/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://metalamp__task-4/./src/index.scss?");

/***/ }),

/***/ "./src/Slider.ts":
/*!***********************!*\
  !*** ./src/Slider.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _presenter_SliderPresenter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./presenter/SliderPresenter */ \"./src/presenter/SliderPresenter.ts\");\n/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.scss */ \"./src/index.scss\");\n/* harmony import */ var _presenter_presenterModules_checkValues__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./presenter/presenterModules/checkValues */ \"./src/presenter/presenterModules/checkValues.ts\");\n\r\n\r\n\r\nvar Slider = /** @class */ (function () {\r\n    function Slider(id, params) {\r\n        this.checkValues = _presenter_presenterModules_checkValues__WEBPACK_IMPORTED_MODULE_2__[\"default\"];\r\n        this.presenter = new _presenter_SliderPresenter__WEBPACK_IMPORTED_MODULE_0__[\"default\"](this, id, (0,_presenter_presenterModules_checkValues__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(params));\r\n    }\r\n    Slider.prototype.getValues = function () {\r\n        return this.presenter.params;\r\n    };\r\n    return Slider;\r\n}());\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Slider);\r\n\n\n//# sourceURL=webpack://metalamp__task-4/./src/Slider.ts?");

/***/ }),

/***/ "./src/demo/panel/removeListeners.ts":
/*!*******************************************!*\
  !*** ./src/demo/panel/removeListeners.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar removeListeners = function removeDragBeforeRebuild(id) {\r\n    var $slider = $(\"#\" + id);\r\n    $slider.off();\r\n};\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (removeListeners);\r\n\n\n//# sourceURL=webpack://metalamp__task-4/./src/demo/panel/removeListeners.ts?");

/***/ }),

/***/ "./src/model/FieldModel.ts":
/*!*********************************!*\
  !*** ./src/model/FieldModel.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _fieldModules_prepareDataForRunnerUpdating__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fieldModules/prepareDataForRunnerUpdating */ \"./src/model/fieldModules/prepareDataForRunnerUpdating.ts\");\n/* harmony import */ var _fieldModules_setMinMax__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fieldModules/setMinMax */ \"./src/model/fieldModules/setMinMax.ts\");\n/* harmony import */ var _fieldModules_setOrientation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./fieldModules/setOrientation */ \"./src/model/fieldModules/setOrientation.ts\");\n\r\n\r\n\r\nvar FieldModel = /** @class */ (function () {\r\n    function FieldModel(id, subscriber) {\r\n        this.class = $(\"#\" + id).attr('class');\r\n        this.minMax = [0, 100];\r\n        this.isVertical = false;\r\n        this.isRange = false;\r\n        this.subscriber = subscriber;\r\n        this.setIsVertical = _fieldModules_setOrientation__WEBPACK_IMPORTED_MODULE_2__[\"default\"].bind(this);\r\n        this.setMinMax = _fieldModules_setMinMax__WEBPACK_IMPORTED_MODULE_1__[\"default\"].bind(this);\r\n        this.prepareDataForRunnerUpdating = _fieldModules_prepareDataForRunnerUpdating__WEBPACK_IMPORTED_MODULE_0__[\"default\"].bind(this);\r\n    }\r\n    return FieldModel;\r\n}());\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FieldModel);\r\n\n\n//# sourceURL=webpack://metalamp__task-4/./src/model/FieldModel.ts?");

/***/ }),

/***/ "./src/model/RunnerModel.ts":
/*!**********************************!*\
  !*** ./src/model/RunnerModel.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _runnerModules_defineSignAfterComma__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./runnerModules/defineSignAfterComma */ \"./src/model/runnerModules/defineSignAfterComma.ts\");\n/* harmony import */ var _runnerModules_initializeDefaultValues__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./runnerModules/initializeDefaultValues */ \"./src/model/runnerModules/initializeDefaultValues.ts\");\n/* harmony import */ var _runnerModules_setStep__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./runnerModules/setStep */ \"./src/model/runnerModules/setStep.ts\");\n/* harmony import */ var _runnerModules_notifyToUpdate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./runnerModules/notifyToUpdate */ \"./src/model/runnerModules/notifyToUpdate.ts\");\n/* harmony import */ var _runnerModules_notifyToRebuild__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./runnerModules/notifyToRebuild */ \"./src/model/runnerModules/notifyToRebuild.ts\");\n/* harmony import */ var _runnerModules_updateRunnerValues__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./runnerModules/updateRunnerValues */ \"./src/model/runnerModules/updateRunnerValues.ts\");\n/* harmony import */ var _runnerModules_setValuesFromInputs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./runnerModules/setValuesFromInputs */ \"./src/model/runnerModules/setValuesFromInputs.ts\");\n/* eslint-env jquery */\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nvar RunnerModel = /** @class */ (function () {\r\n    function RunnerModel(id, instance, subscriber) {\r\n        this.instance = instance;\r\n        this.positionInPercent = 0;\r\n        this.value = 0;\r\n        this.step = 1;\r\n        this.stepInPercent = 1;\r\n        this.stepSignAfterComma = 0;\r\n        this.stepPosition = 0;\r\n        this.stepValue = 0;\r\n        this.subscriber = subscriber;\r\n        this.defineSignAfterComma = _runnerModules_defineSignAfterComma__WEBPACK_IMPORTED_MODULE_0__[\"default\"].bind(this);\r\n        this.notifyToUpdate = _runnerModules_notifyToUpdate__WEBPACK_IMPORTED_MODULE_3__[\"default\"].bind(this);\r\n        this.notifyToRebuild = _runnerModules_notifyToRebuild__WEBPACK_IMPORTED_MODULE_4__[\"default\"].bind(this);\r\n        this.setStep = _runnerModules_setStep__WEBPACK_IMPORTED_MODULE_2__[\"default\"].bind(this);\r\n        this.updateRunnerValues = _runnerModules_updateRunnerValues__WEBPACK_IMPORTED_MODULE_5__[\"default\"].bind(this);\r\n        this.initializeDefaultValues = _runnerModules_initializeDefaultValues__WEBPACK_IMPORTED_MODULE_1__[\"default\"].bind(this);\r\n        this.setValuesFromInputs = _runnerModules_setValuesFromInputs__WEBPACK_IMPORTED_MODULE_6__[\"default\"].bind(this);\r\n    }\r\n    return RunnerModel;\r\n}());\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RunnerModel);\r\n\n\n//# sourceURL=webpack://metalamp__task-4/./src/model/RunnerModel.ts?");

/***/ }),

/***/ "./src/model/fieldModules/handleClick/defineNearestRunner.ts":
/*!*******************************************************************!*\
  !*** ./src/model/fieldModules/handleClick/defineNearestRunner.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _defineNearest_defineNearestUtility__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./defineNearest/defineNearestUtility */ \"./src/model/fieldModules/handleClick/defineNearest/defineNearestUtility.ts\");\n\r\nvar defineNearestRunner = function (cursorXY, isVertical, fieldSize, runnersPosition) {\r\n    var cursorXYInPercent = (0,_defineNearest_defineNearestUtility__WEBPACK_IMPORTED_MODULE_0__.prepareDataForCompare)(cursorXY, isVertical, fieldSize);\r\n    return (0,_defineNearest_defineNearestUtility__WEBPACK_IMPORTED_MODULE_0__.calculateAndCompareLengths)(cursorXYInPercent, runnersPosition);\r\n};\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (defineNearestRunner);\r\n\n\n//# sourceURL=webpack://metalamp__task-4/./src/model/fieldModules/handleClick/defineNearestRunner.ts?");

/***/ }),

/***/ "./src/model/fieldModules/handleClick/defineNearest/defineNearestUtility.ts":
/*!**********************************************************************************!*\
  !*** ./src/model/fieldModules/handleClick/defineNearest/defineNearestUtility.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"prepareDataForCompare\": () => (/* binding */ prepareDataForCompare),\n/* harmony export */   \"calculateAndCompareLengths\": () => (/* binding */ calculateAndCompareLengths)\n/* harmony export */ });\nvar calculateAndCompareLengths = function (cursorXYInPercent, runnersPosition) {\r\n    var lengthToFirstRunner = Math.abs(cursorXYInPercent - runnersPosition[0]);\r\n    var lengthToSecondRunner = Math.abs(cursorXYInPercent - runnersPosition[1]);\r\n    return lengthToFirstRunner - lengthToSecondRunner < 0 ? 0 : 1;\r\n};\r\nvar prepareDataForCompare = function (cursorXY, isVertical, fieldSize) {\r\n    var xySwitcher = isVertical ? 1 : 0;\r\n    var cursorXYInPercent = Math.abs(100 * xySwitcher - (cursorXY[xySwitcher] / fieldSize[xySwitcher]) * 100);\r\n    return cursorXYInPercent;\r\n};\r\n\r\n\n\n//# sourceURL=webpack://metalamp__task-4/./src/model/fieldModules/handleClick/defineNearest/defineNearestUtility.ts?");

/***/ }),

/***/ "./src/model/fieldModules/prepareDataForRunnerUpdating.ts":
/*!****************************************************************!*\
  !*** ./src/model/fieldModules/prepareDataForRunnerUpdating.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _handleClick_defineNearestRunner__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./handleClick/defineNearestRunner */ \"./src/model/fieldModules/handleClick/defineNearestRunner.ts\");\n\r\nvar prepareDataForRunnerUpdating = function (_a) {\r\n    var runnersPosition = _a.runnersPosition, isVertical = _a.isVertical, minMax = _a.minMax, isRange = _a.isRange, fieldSize = _a.fieldSize, cursorXY = _a.cursorXY, runners = _a.runners;\r\n    var nearest = 0;\r\n    if (isRange) {\r\n        nearest = (0,_handleClick_defineNearestRunner__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(cursorXY, isVertical, fieldSize, runnersPosition);\r\n    }\r\n    var updateRunnerValuesArgs = {\r\n        cursorXY: cursorXY,\r\n        isVertical: isVertical,\r\n        minMax: minMax,\r\n        isRange: isRange,\r\n        fieldSize: fieldSize,\r\n        runners: runners,\r\n        activeRunner: runners[nearest],\r\n    };\r\n    runners[nearest].updateRunnerValues(updateRunnerValuesArgs);\r\n};\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (prepareDataForRunnerUpdating);\r\n\n\n//# sourceURL=webpack://metalamp__task-4/./src/model/fieldModules/prepareDataForRunnerUpdating.ts?");

/***/ }),

/***/ "./src/model/fieldModules/setMinMax.ts":
/*!*********************************************!*\
  !*** ./src/model/fieldModules/setMinMax.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar setMinMax = function setMinimalMaximun(minValue, maxValue) {\r\n    this.minMax = [minValue, maxValue];\r\n};\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (setMinMax);\r\n\n\n//# sourceURL=webpack://metalamp__task-4/./src/model/fieldModules/setMinMax.ts?");

/***/ }),

/***/ "./src/model/fieldModules/setOrientation.ts":
/*!**************************************************!*\
  !*** ./src/model/fieldModules/setOrientation.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar setIsVertical = function setSliderOrientation(orientation) {\r\n    this.isVertical = orientation === 'vertical';\r\n};\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (setIsVertical);\r\n\n\n//# sourceURL=webpack://metalamp__task-4/./src/model/fieldModules/setOrientation.ts?");

/***/ }),

/***/ "./src/model/runnerModules/defineSignAfterComma.ts":
/*!*********************************************************!*\
  !*** ./src/model/runnerModules/defineSignAfterComma.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _setSignAfterComma_setSignAfterCommaUtility__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setSignAfterComma/setSignAfterCommaUtility */ \"./src/model/runnerModules/setSignAfterComma/setSignAfterCommaUtility.ts\");\n\r\n//    for small 'steps' and 'minValue' we need to define sign quantity after comma\r\nvar defineSignAfterComma = function defineSignQuantityAfterComma(minMax) {\r\n    _setSignAfterComma_setSignAfterCommaUtility__WEBPACK_IMPORTED_MODULE_0__.setThisSign.call(this, (0,_setSignAfterComma_setSignAfterCommaUtility__WEBPACK_IMPORTED_MODULE_0__.calcSignAfterComma)(this, minMax));\r\n    return this.stepSignAfterComma;\r\n};\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (defineSignAfterComma);\r\n\n\n//# sourceURL=webpack://metalamp__task-4/./src/model/runnerModules/defineSignAfterComma.ts?");

/***/ }),

/***/ "./src/model/runnerModules/initializeDefaultValues.ts":
/*!************************************************************!*\
  !*** ./src/model/runnerModules/initializeDefaultValues.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar initializeDefaultValues = function initializeDefaultPositionAndValue(minMax, runnersInstantPosition) {\r\n    this.stepInPercent = (this.step / (minMax[1] - minMax[0])) * 100;\r\n    this.setValuesFromInputs.call(this, runnersInstantPosition, minMax);\r\n};\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initializeDefaultValues);\r\n\n\n//# sourceURL=webpack://metalamp__task-4/./src/model/runnerModules/initializeDefaultValues.ts?");

/***/ }),

/***/ "./src/model/runnerModules/notifyToRebuild.ts":
/*!****************************************************!*\
  !*** ./src/model/runnerModules/notifyToRebuild.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar notifyToRebuild = function notifySubscribersToRebuild(rebuildData) {\r\n    this.subscriber.recieveRebuildData(rebuildData);\r\n};\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (notifyToRebuild);\r\n\n\n//# sourceURL=webpack://metalamp__task-4/./src/model/runnerModules/notifyToRebuild.ts?");

/***/ }),

/***/ "./src/model/runnerModules/notifyToUpdate.ts":
/*!***************************************************!*\
  !*** ./src/model/runnerModules/notifyToUpdate.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar notifyToUpdate = function notifySubscribersToUpdate() {\r\n    this.subscriber.recieveModelLogic(this);\r\n};\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (notifyToUpdate);\r\n\n\n//# sourceURL=webpack://metalamp__task-4/./src/model/runnerModules/notifyToUpdate.ts?");

/***/ }),

/***/ "./src/model/runnerModules/setSignAfterComma/setSignAfterCommaUtility.ts":
/*!*******************************************************************************!*\
  !*** ./src/model/runnerModules/setSignAfterComma/setSignAfterCommaUtility.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"calcSignAfterComma\": () => (/* binding */ calcSignAfterComma),\n/* harmony export */   \"setThisSign\": () => (/* binding */ setThisSign)\n/* harmony export */ });\nvar calcSignAfterComma = function (_a, minMax) {\r\n    var step = _a.step;\r\n    var minMaxSignAfterComma = [];\r\n    var separatedStep = step.toString().split('.');\r\n    var separatedMin = minMax[0].toString().split('.');\r\n    var separatedMax = minMax[1].toString().split('.');\r\n    if (separatedStep[1]) {\r\n        minMaxSignAfterComma.push(separatedStep[1].length);\r\n    }\r\n    else\r\n        minMaxSignAfterComma.push(0);\r\n    if (separatedMin[1]) {\r\n        minMaxSignAfterComma.push(separatedMin[1].length);\r\n    }\r\n    else\r\n        minMaxSignAfterComma.push(0);\r\n    if (separatedMax[1]) {\r\n        minMaxSignAfterComma.push(separatedMax[1].length);\r\n    }\r\n    else\r\n        minMaxSignAfterComma.push(0);\r\n    return Math.max(minMaxSignAfterComma[0], minMaxSignAfterComma[1], minMaxSignAfterComma[2]);\r\n};\r\nvar setThisSign = function setThisSignQuantityAfterComma(stepSignAfterComma) {\r\n    this.stepSignAfterComma = stepSignAfterComma;\r\n};\r\n\r\n\n\n//# sourceURL=webpack://metalamp__task-4/./src/model/runnerModules/setSignAfterComma/setSignAfterCommaUtility.ts?");

/***/ }),

/***/ "./src/model/runnerModules/setStep.ts":
/*!********************************************!*\
  !*** ./src/model/runnerModules/setStep.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar setStep = function setRunnerStep(step, minMax) {\r\n    this.step = step;\r\n    this.stepInPercent = 100 / ((minMax[1] - minMax[0]) / step);\r\n};\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (setStep);\r\n\n\n//# sourceURL=webpack://metalamp__task-4/./src/model/runnerModules/setStep.ts?");

/***/ }),

/***/ "./src/model/runnerModules/setValuesFromInputs.ts":
/*!********************************************************!*\
  !*** ./src/model/runnerModules/setValuesFromInputs.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _setValuesFromInputs_setValuesFromInputsUtility__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setValuesFromInputs/setValuesFromInputsUtility */ \"./src/model/runnerModules/setValuesFromInputs/setValuesFromInputsUtility.ts\");\n/* harmony import */ var _updateRunnerValues_updateRunnerValuesUtility__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./updateRunnerValues/updateRunnerValuesUtility */ \"./src/model/runnerModules/updateRunnerValues/updateRunnerValuesUtility.ts\");\n\r\n\r\nvar setValuesFromInputs = function setThisValuesFromPanelInputs(inputRunnerValue, minMax) {\r\n    var positionInPercent = (0,_setValuesFromInputs_setValuesFromInputsUtility__WEBPACK_IMPORTED_MODULE_0__.calculatePositionFromInput)(inputRunnerValue, minMax);\r\n    _setValuesFromInputs_setValuesFromInputsUtility__WEBPACK_IMPORTED_MODULE_0__.setPrepareValues.call(this, positionInPercent, inputRunnerValue);\r\n    var _a = (0,_updateRunnerValues_updateRunnerValuesUtility__WEBPACK_IMPORTED_MODULE_1__.calculateStepValueAndPosition)(this, minMax), stepValue = _a.stepValue, stepPosition = _a.stepPosition;\r\n    _setValuesFromInputs_setValuesFromInputsUtility__WEBPACK_IMPORTED_MODULE_0__.setStepValues.call(this, stepPosition, stepValue);\r\n    return { stepValue: stepValue, stepPosition: stepPosition };\r\n};\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (setValuesFromInputs);\r\n\n\n//# sourceURL=webpack://metalamp__task-4/./src/model/runnerModules/setValuesFromInputs.ts?");

/***/ }),

/***/ "./src/model/runnerModules/setValuesFromInputs/setValuesFromInputsUtility.ts":
/*!***********************************************************************************!*\
  !*** ./src/model/runnerModules/setValuesFromInputs/setValuesFromInputsUtility.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"setPrepareValues\": () => (/* binding */ setPrepareValues),\n/* harmony export */   \"setStepValues\": () => (/* binding */ setStepValues),\n/* harmony export */   \"calculatePositionFromInput\": () => (/* binding */ calculatePositionFromInput)\n/* harmony export */ });\nvar calculatePositionFromInput = function (inputValue, minMax) {\r\n    var positionInPercent = Math.abs((inputValue - minMax[0]) / (minMax[1] - minMax[0])) * 100;\r\n    return positionInPercent;\r\n};\r\nvar setPrepareValues = function setValueAndPositionInPercent(positionInPercent, value) {\r\n    this.positionInPercent = positionInPercent;\r\n    this.value = value;\r\n};\r\nvar setStepValues = function setStepValueAndPosition(stepPosition, stepValue) {\r\n    this.stepPosition = stepPosition;\r\n    this.stepValue = stepValue;\r\n};\r\n\r\n\n\n//# sourceURL=webpack://metalamp__task-4/./src/model/runnerModules/setValuesFromInputs/setValuesFromInputsUtility.ts?");

/***/ }),

/***/ "./src/model/runnerModules/updateRunnerValues.ts":
/*!*******************************************************!*\
  !*** ./src/model/runnerModules/updateRunnerValues.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _updateRunnerValues_updateRunnerValuesUtility__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./updateRunnerValues/updateRunnerValuesUtility */ \"./src/model/runnerModules/updateRunnerValues/updateRunnerValuesUtility.ts\");\n\r\nvar updateRunnerValues = function (_a) {\r\n    var cursorXY = _a.cursorXY, isVertical = _a.isVertical, minMax = _a.minMax, isRange = _a.isRange, fieldSize = _a.fieldSize, runners = _a.runners, activeRunner = _a.activeRunner;\r\n    (0,_updateRunnerValues_updateRunnerValuesUtility__WEBPACK_IMPORTED_MODULE_0__.setPositionInPercent)(activeRunner, (0,_updateRunnerValues_updateRunnerValuesUtility__WEBPACK_IMPORTED_MODULE_0__.calculatePositionInPercent)(isVertical, activeRunner, cursorXY, fieldSize));\r\n    (0,_updateRunnerValues_updateRunnerValuesUtility__WEBPACK_IMPORTED_MODULE_0__.setValue)(activeRunner, (0,_updateRunnerValues_updateRunnerValuesUtility__WEBPACK_IMPORTED_MODULE_0__.calculateValue)(minMax, activeRunner));\r\n    if (isRange) {\r\n        (0,_updateRunnerValues_updateRunnerValuesUtility__WEBPACK_IMPORTED_MODULE_0__.setStepValueAndPosition)(activeRunner, (0,_updateRunnerValues_updateRunnerValuesUtility__WEBPACK_IMPORTED_MODULE_0__.checkCollision)((0,_updateRunnerValues_updateRunnerValuesUtility__WEBPACK_IMPORTED_MODULE_0__.calculateStepValueAndPosition)(activeRunner, minMax), runners, activeRunner, isVertical));\r\n    }\r\n    else {\r\n        (0,_updateRunnerValues_updateRunnerValuesUtility__WEBPACK_IMPORTED_MODULE_0__.setStepValueAndPosition)(activeRunner, (0,_updateRunnerValues_updateRunnerValuesUtility__WEBPACK_IMPORTED_MODULE_0__.calculateStepValueAndPosition)(activeRunner, minMax));\r\n    }\r\n    activeRunner.notifyToUpdate();\r\n};\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (updateRunnerValues);\r\n\n\n//# sourceURL=webpack://metalamp__task-4/./src/model/runnerModules/updateRunnerValues.ts?");

/***/ }),

/***/ "./src/model/runnerModules/updateRunnerValues/updateRunnerValuesUtility.ts":
/*!*********************************************************************************!*\
  !*** ./src/model/runnerModules/updateRunnerValues/updateRunnerValuesUtility.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"checkCollision\": () => (/* binding */ checkCollision),\n/* harmony export */   \"calculatePositionInPercent\": () => (/* binding */ calculatePositionInPercent),\n/* harmony export */   \"calculateValue\": () => (/* binding */ calculateValue),\n/* harmony export */   \"calculateStepValueAndPosition\": () => (/* binding */ calculateStepValueAndPosition),\n/* harmony export */   \"setPositionInPercent\": () => (/* binding */ setPositionInPercent),\n/* harmony export */   \"setValue\": () => (/* binding */ setValue),\n/* harmony export */   \"setStepValueAndPosition\": () => (/* binding */ setStepValueAndPosition)\n/* harmony export */ });\n//  implementation of airbnb rule #7.12\r\nvar assignIfHasOwn = function (obj, key, value) {\r\n    var newObj = obj;\r\n    if (Object.prototype.hasOwnProperty.call(obj, key)) {\r\n        newObj[key] = value;\r\n    }\r\n};\r\nvar calculatePositionInPercent = function (isVertical, thisRunner, cursorXY, fieldSize) {\r\n    var cursorX = cursorXY[0], cursorY = cursorXY[1];\r\n    var positionInPercent = 0;\r\n    if (isVertical) {\r\n        if (cursorY < 0) {\r\n            cursorY = 0;\r\n        }\r\n        positionInPercent = ((fieldSize[1] - cursorY) * 100) / (fieldSize[1]);\r\n    }\r\n    else {\r\n        if (cursorX < 0) {\r\n            cursorX = 0;\r\n        }\r\n        positionInPercent = ((cursorX) * 100) / (fieldSize[0]);\r\n    }\r\n    return positionInPercent;\r\n};\r\nvar checkCollision = function (_a, runner, thisRunner, isVertical) {\r\n    var stepPosition = _a.stepPosition, stepValue = _a.stepValue;\r\n    var isCollisionZero = function () { return (!isVertical && thisRunner.instance === 0\r\n        && stepPosition - runner[1].stepPosition >= 0)\r\n        || (isVertical && thisRunner.instance === 0\r\n            && runner[1].stepPosition - stepPosition <= 0); };\r\n    var isCollisionOne = function () { return ((!isVertical && thisRunner.instance === 1\r\n        && stepPosition - runner[0].stepPosition <= 0)\r\n        || (isVertical && thisRunner.instance === 1\r\n            && runner[0].stepPosition - stepPosition >= 0)); };\r\n    if (isCollisionZero()) {\r\n        var a = { stepPosition: runner[1].stepPosition, stepValue: runner[1].stepValue };\r\n        return a;\r\n    }\r\n    if (isCollisionOne()) {\r\n        var a = { stepPosition: runner[0].stepPosition, stepValue: runner[0].stepValue };\r\n        return a;\r\n    }\r\n    return { stepPosition: stepPosition, stepValue: stepValue };\r\n};\r\nvar setStepValueAndPosition = function (thisRunner, _a) {\r\n    var stepPosition = _a.stepPosition, stepValue = _a.stepValue;\r\n    assignIfHasOwn(thisRunner, 'stepPosition', stepPosition);\r\n    assignIfHasOwn(thisRunner, 'stepValue', stepValue);\r\n};\r\nvar calculateValue = function (minMax, thisRunner) {\r\n    var fieldLength = minMax[1] - minMax[0];\r\n    return thisRunner.positionInPercent * (fieldLength / 100) + +minMax[0];\r\n};\r\nvar calculateStepValueAndPosition = function (_a, minMax) {\r\n    var positionInPercent = _a.positionInPercent, step = _a.step, stepInPercent = _a.stepInPercent, value = _a.value, stepSignAfterComma = _a.stepSignAfterComma;\r\n    var divisionQuantity = 0;\r\n    function checkOnException() {\r\n        return Math.floor((minMax[1] - minMax[0]) / step) * step === (minMax[1] - minMax[0]);\r\n    }\r\n    if (checkOnException())\r\n        divisionQuantity = (minMax[1] - minMax[0]) / step;\r\n    else\r\n        divisionQuantity = Math.floor((minMax[1] - minMax[0]) / step) + 1;\r\n    var divisionSizeInPercent = 100 / divisionQuantity;\r\n    var stepPosition = Number((Math.round(positionInPercent / stepInPercent) * (stepInPercent))\r\n        .toFixed(stepSignAfterComma));\r\n    var stepValueMultiplier = Math.floor(stepPosition / divisionSizeInPercent);\r\n    var stepValue = Number((minMax[0] + step * stepValueMultiplier).toFixed(stepSignAfterComma));\r\n    var isItLast = function () { return value === minMax[1] || stepValueMultiplier === divisionQuantity; };\r\n    if (!checkOnException() && isItLast()) {\r\n        stepPosition = 100;\r\n        // eslint-disable-next-line prefer-destructuring\r\n        stepValue = minMax[1];\r\n    }\r\n    return { stepPosition: stepPosition, stepValue: stepValue };\r\n};\r\nvar setPositionInPercent = function (thisRunner, newPositionInPercent) {\r\n    assignIfHasOwn(thisRunner, 'positionInPercent', newPositionInPercent);\r\n};\r\nvar setValue = function (thisRunner, value) {\r\n    assignIfHasOwn(thisRunner, 'value', value);\r\n};\r\n\r\n\n\n//# sourceURL=webpack://metalamp__task-4/./src/model/runnerModules/updateRunnerValues/updateRunnerValuesUtility.ts?");

/***/ }),

/***/ "./src/presenter/SliderPresenter.ts":
/*!******************************************!*\
  !*** ./src/presenter/SliderPresenter.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _model_FieldModel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../model/FieldModel */ \"./src/model/FieldModel.ts\");\n/* harmony import */ var _model_RunnerModel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../model/RunnerModel */ \"./src/model/RunnerModel.ts\");\n/* harmony import */ var _view_SliderView__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../view/SliderView */ \"./src/view/SliderView.ts\");\n\r\n\r\n\r\nvar SliderPresenter = /** @class */ (function () {\r\n    function SliderPresenter(slider, id, params) {\r\n        this.parent = slider;\r\n        this.id = id;\r\n        this.runnerCounter = 0;\r\n        this.runners = [];\r\n        this.field = new _model_FieldModel__WEBPACK_IMPORTED_MODULE_0__[\"default\"](id, this);\r\n        this.view = new _view_SliderView__WEBPACK_IMPORTED_MODULE_2__[\"default\"](id, this);\r\n        this.params = params;\r\n        this.build(params);\r\n        this.addListeners(params, 'build');\r\n    }\r\n    SliderPresenter.prototype.rebuild = function (params) {\r\n        this.params = params;\r\n        this.field.isRange = false;\r\n        this.view.isRange = false;\r\n        this.removeListeners(params);\r\n        this.runners = [];\r\n        this.view.clearHTMLElement(this.view.id, params.orientation);\r\n        this.runnerCounter = 0;\r\n        this.build(params);\r\n        this.addListeners(params, 'rebuild');\r\n    };\r\n    SliderPresenter.prototype.build = function (params) {\r\n        if (!params.isTestMode) {\r\n            this.setMinMax(params)\r\n                .initLayers(params)\r\n                .createRangeSlider(params)\r\n                .setStep(params)\r\n                .createBar(params)\r\n                .createScale(params);\r\n        }\r\n    };\r\n    SliderPresenter.prototype.addListeners = function (_a, actionType) {\r\n        var isRange = _a.isRange;\r\n        switch (actionType) {\r\n            case 'build': {\r\n                this.onClick().onDrag(0).onDrop();\r\n                if (isRange) {\r\n                    this.onDrag(1);\r\n                }\r\n                break;\r\n            }\r\n            case 'rebuild': {\r\n                this.onDrag(0);\r\n                if (isRange) {\r\n                    this.onDrag(1);\r\n                }\r\n                break;\r\n            }\r\n            default: break;\r\n        }\r\n        return this;\r\n    };\r\n    SliderPresenter.prototype.createRangeSlider = function (_a) {\r\n        var _b;\r\n        var isRange = _a.isRange, shouldAddTip = _a.shouldAddTip, runnerSize = _a.runnerSize, minValue = _a.minValue, maxValue = _a.maxValue, runnersInstantPosition = _a.runnersInstantPosition, step = _a.step;\r\n        this.createRunner(runnerSize, minValue, maxValue, runnersInstantPosition[this.runnerCounter], step);\r\n        var _c = this.runners[this.runnerCounter], stepPosition = _c.stepPosition, stepValue = _c.stepValue;\r\n        var stepSignAfterComma = this.runners[0].defineSignAfterComma([minValue, maxValue]);\r\n        this.createRunnerView(this.runnerCounter, stepPosition, stepSignAfterComma);\r\n        this.createTipNumber(shouldAddTip, stepPosition, stepValue);\r\n        if (isRange) {\r\n            this.runnerCounter += 1;\r\n            this.view.isRange = true;\r\n            this.field.isRange = true;\r\n            this.createRunner(runnerSize, minValue, maxValue, runnersInstantPosition[this.runnerCounter], step);\r\n            (_b = this.runners[this.runnerCounter], stepPosition = _b.stepPosition, stepValue = _b.stepValue);\r\n            this.runners[this.runnerCounter].stepSignAfterComma = stepSignAfterComma;\r\n            this.createRunnerView(this.runnerCounter, stepPosition, stepSignAfterComma);\r\n            this.createTipNumber(shouldAddTip, stepPosition, stepValue);\r\n        }\r\n        else\r\n            this.view.isRange = false;\r\n        return this;\r\n    };\r\n    SliderPresenter.prototype.createRunner = function (runnerSize, minValue, maxValue, runnersInstantPosition, step) {\r\n        this.runners.push(new _model_RunnerModel__WEBPACK_IMPORTED_MODULE_1__[\"default\"](this.id, this.runnerCounter, this));\r\n        this.runners[this.runnerCounter].setStep(step, [minValue, maxValue]);\r\n        this.runners[this.runnerCounter].initializeDefaultValues([minValue, maxValue], runnersInstantPosition);\r\n        return this;\r\n    };\r\n    SliderPresenter.prototype.createRunnerView = function (i, stepPosition, stepSignAfterComma) {\r\n        this.view.runner.createRunner(i, stepPosition, stepSignAfterComma);\r\n        return this;\r\n    };\r\n    SliderPresenter.prototype.createTipNumber = function (isOn, stepPosition, stepValue) {\r\n        if (isOn) {\r\n            this.view.tip.create(this.runnerCounter, this.field.isVertical, stepPosition, stepValue);\r\n        }\r\n        return this;\r\n    };\r\n    SliderPresenter.prototype.createBar = function (_a) {\r\n        var shouldAddBar = _a.shouldAddBar, fieldThickness = _a.fieldThickness;\r\n        if (shouldAddBar) {\r\n            this.view.hasBar = true;\r\n            this.view.bar.createBar(fieldThickness);\r\n            this.view.bar.updateBarPosition();\r\n        }\r\n        return this;\r\n    };\r\n    SliderPresenter.prototype.createScale = function (_a) {\r\n        var shouldAddScale = _a.shouldAddScale;\r\n        if (shouldAddScale) {\r\n            this.view.hasScale = true;\r\n            this.view.scale.create();\r\n        }\r\n        return this;\r\n    };\r\n    SliderPresenter.prototype.onDrag = function (runnerCounter) {\r\n        var _this = this;\r\n        $(document).ready(function () {\r\n            _this.view.runner.handleDrag(runnerCounter);\r\n        });\r\n        return this;\r\n    };\r\n    SliderPresenter.prototype.onDrop = function () {\r\n        this.view.runner.handleDrop();\r\n        return this;\r\n    };\r\n    SliderPresenter.prototype.removeListeners = function (_a) {\r\n        var isRange = _a.isRange;\r\n        this.view.runner.removeDrag(0);\r\n        if (isRange)\r\n            this.view.runner.removeDrag(1);\r\n        return this;\r\n    };\r\n    SliderPresenter.prototype.recieveModelLogic = function (activeRunner) {\r\n        if (activeRunner) {\r\n            this.updateRunnerPosition(activeRunner);\r\n            if (this.view.hasTip)\r\n                this.updateTipNumber(activeRunner.stepValue, activeRunner.instance);\r\n            if (this.view.hasBar)\r\n                this.updateBarPosition();\r\n            // if (this.view.hasInput) {\r\n            //   this.view.input[activeRunner.instance].updateRunnerInput(\r\n            //     activeRunner.stepValue,\r\n            //     activeRunner.instance,\r\n            //   );\r\n            // }\r\n            if (this.params.onChange) {\r\n                this.params.runnersInstantPosition[activeRunner.instance] = activeRunner.stepValue;\r\n                this.params.onChange(this.params);\r\n            }\r\n        }\r\n    };\r\n    SliderPresenter.prototype.recieveRebuildData = function (params) {\r\n        this.rebuild(params);\r\n    };\r\n    SliderPresenter.prototype.recieveDragData = function (_a, cursorXY, i) {\r\n        var fieldSize = _a.fieldSize;\r\n        var dataForRunnerUpdatingArgs = {\r\n            cursorXY: cursorXY,\r\n            isVertical: this.field.isVertical,\r\n            minMax: this.field.minMax,\r\n            isRange: this.field.isRange,\r\n            fieldSize: fieldSize,\r\n            runners: this.runners,\r\n            activeRunner: this.runners[i],\r\n        };\r\n        this.runners[i].updateRunnerValues(dataForRunnerUpdatingArgs);\r\n    };\r\n    // public recieveInputsData(\r\n    //   panelInputsData: BuildParams,\r\n    // ): void {\r\n    //   this.rebuild(panelInputsData);\r\n    // }\r\n    SliderPresenter.prototype.recieveClickData = function (view, cursorXY) {\r\n        var runnersPosition = view.runner.positions;\r\n        var fieldSize = view.fieldSize;\r\n        var dataForRunnerUpdatingArgs = {\r\n            runnersPosition: runnersPosition,\r\n            isVertical: this.field.isVertical,\r\n            minMax: this.field.minMax,\r\n            isRange: this.field.isRange,\r\n            fieldSize: fieldSize,\r\n            cursorXY: cursorXY,\r\n            runners: this.runners,\r\n        };\r\n        this.field.prepareDataForRunnerUpdating(dataForRunnerUpdatingArgs);\r\n    };\r\n    SliderPresenter.prototype.setMinMax = function (_a) {\r\n        var minValue = _a.minValue, maxValue = _a.maxValue;\r\n        this.field.setMinMax(minValue, maxValue);\r\n        this.view.initStartEnd(minValue, maxValue);\r\n        return this;\r\n    };\r\n    SliderPresenter.prototype.setStep = function (_a) {\r\n        var _this = this;\r\n        var step = _a.step;\r\n        this.runners.forEach(function (v) { return v.setStep(step, _this.field.minMax); });\r\n        this.view.setStep(step, this.runners[0].stepSignAfterComma);\r\n        return this;\r\n    };\r\n    SliderPresenter.prototype.updateRunnerPosition = function (_a) {\r\n        var stepPosition = _a.stepPosition, instance = _a.instance;\r\n        this.view.runner.updatePosition(stepPosition, instance);\r\n    };\r\n    SliderPresenter.prototype.updateTipNumber = function (stepValue, instance) {\r\n        this.view.tip.update({ stepValue: stepValue, instance: instance });\r\n        return this;\r\n    };\r\n    SliderPresenter.prototype.updateBarPosition = function () {\r\n        this.view.bar.updateBarPosition();\r\n        return this;\r\n    };\r\n    SliderPresenter.prototype.initLayers = function (_a) {\r\n        var runnerSize = _a.runnerSize, fieldThickness = _a.fieldThickness, orientation = _a.orientation;\r\n        this.field.setIsVertical(orientation);\r\n        this.view.initializeValues(runnerSize, fieldThickness, orientation);\r\n        return this;\r\n    };\r\n    SliderPresenter.prototype.onClick = function () {\r\n        this.view.handleClick(this.runners, this.field);\r\n        return this;\r\n    };\r\n    return SliderPresenter;\r\n}());\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SliderPresenter);\r\n\n\n//# sourceURL=webpack://metalamp__task-4/./src/presenter/SliderPresenter.ts?");

/***/ }),

/***/ "./src/presenter/presenterModules/checkValues.ts":
/*!*******************************************************!*\
  !*** ./src/presenter/presenterModules/checkValues.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar checkValues = function checkInitialValues(params) {\r\n    var _a;\r\n    var _b = params.minValue, minValue = _b === void 0 ? 0 : _b, _c = params.maxValue, maxValue = _c === void 0 ? 100 : _c, _d = params.step, step = _d === void 0 ? 1 : _d, _e = params.fieldThickness, fieldThickness = _e === void 0 ? 6 : _e;\r\n    var _f = params.runnerSize, runnerSize = _f === void 0 ? [40, 40] : _f, _g = params.shouldAddTip, shouldAddTip = _g === void 0 ? false : _g, _h = params.shouldAddBar, shouldAddBar = _h === void 0 ? false : _h, _j = params.shouldAddScale, shouldAddScale = _j === void 0 ? false : _j, _k = params.isRange, isRange = _k === void 0 ? false : _k, _l = params.isTestMode, isTestMode = _l === void 0 ? false : _l, _m = params.orientation, orientation = _m === void 0 ? 'horizontal' : _m, _o = params.hasInputPanel, hasInputPanel = _o === void 0 ? false : _o, _p = params.runnersInstantPosition, runnersInstantPosition = _p === void 0 ? [0, 100] : _p;\r\n    if (minValue > maxValue) {\r\n        _a = [maxValue, minValue], minValue = _a[0], maxValue = _a[1];\r\n    }\r\n    else if (minValue === maxValue) {\r\n        minValue = 0;\r\n        maxValue = 100;\r\n    }\r\n    if (step <= 0) {\r\n        step = 1;\r\n    }\r\n    if (step > maxValue - minValue) {\r\n        step = maxValue - minValue;\r\n    }\r\n    if (runnerSize[0] <= 6 || runnerSize[1] <= 6) {\r\n        runnerSize[0] = 6;\r\n        runnerSize[1] = 6;\r\n    }\r\n    if (runnerSize[0] > 50 || runnerSize[1] > 50) {\r\n        runnerSize[0] = 50;\r\n        runnerSize[1] = 50;\r\n    }\r\n    if (fieldThickness <= 0) {\r\n        fieldThickness = 1;\r\n    }\r\n    if (fieldThickness >= 20) {\r\n        fieldThickness = 20;\r\n    }\r\n    // eslint-disable-next-line arrow-body-style\r\n    var ifPosition0Incorrect = function () {\r\n        return runnersInstantPosition[0] < minValue\r\n            || runnersInstantPosition[0] > runnersInstantPosition[1]\r\n            || runnersInstantPosition[0] > maxValue;\r\n    };\r\n    // eslint-disable-next-line arrow-body-style\r\n    var ifPosition1Incorrect = function () {\r\n        return runnersInstantPosition[1] > maxValue || runnersInstantPosition[1] < minValue;\r\n    };\r\n    if (ifPosition0Incorrect()) {\r\n        runnersInstantPosition[0] = minValue;\r\n    }\r\n    if (ifPosition1Incorrect()) {\r\n        runnersInstantPosition[1] = maxValue;\r\n    }\r\n    var checkedParams = {\r\n        minValue: minValue,\r\n        maxValue: maxValue,\r\n        step: step,\r\n        runnerSize: runnerSize,\r\n        fieldThickness: fieldThickness,\r\n        runnersInstantPosition: runnersInstantPosition,\r\n        shouldAddTip: shouldAddTip,\r\n        shouldAddBar: shouldAddBar,\r\n        shouldAddScale: shouldAddScale,\r\n        isRange: isRange,\r\n        isTestMode: isTestMode,\r\n        orientation: orientation,\r\n        hasInputPanel: hasInputPanel,\r\n    };\r\n    return checkedParams;\r\n};\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (checkValues);\r\n\n\n//# sourceURL=webpack://metalamp__task-4/./src/presenter/presenterModules/checkValues.ts?");

/***/ }),

/***/ "./src/view/SliderView.ts":
/*!********************************!*\
  !*** ./src/view/SliderView.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _field_initializeValues__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./field/initializeValues */ \"./src/view/field/initializeValues.ts\");\n/* harmony import */ var _field_initStartEnd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./field/initStartEnd */ \"./src/view/field/initStartEnd.ts\");\n/* harmony import */ var _field_handleClick__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./field/handleClick */ \"./src/view/field/handleClick.ts\");\n/* harmony import */ var _field_notifyFieldClick__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./field/notifyFieldClick */ \"./src/view/field/notifyFieldClick.ts\");\n/* harmony import */ var _field_setStep__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./field/setStep */ \"./src/view/field/setStep.ts\");\n/* harmony import */ var _bar_Bar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./bar/Bar */ \"./src/view/bar/Bar.ts\");\n/* harmony import */ var _runner_Runner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./runner/Runner */ \"./src/view/runner/Runner.ts\");\n/* harmony import */ var _scale_Scale__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./scale/Scale */ \"./src/view/scale/Scale.ts\");\n/* harmony import */ var _tip_Tip__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./tip/Tip */ \"./src/view/tip/Tip.ts\");\n/* harmony import */ var _clearHTMLElement__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./clearHTMLElement */ \"./src/view/clearHTMLElement.ts\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nvar SliderView = /** @class */ (function () {\r\n    function SliderView(id, subscriber) {\r\n        this.id = id;\r\n        this.$body = $('body');\r\n        this.$field = $(\"#\" + id);\r\n        this.class = $(\"#\" + id).attr('class');\r\n        this.isVertical = false;\r\n        this.isRange = false;\r\n        this.hasBar = false;\r\n        this.hasScale = false;\r\n        this.hasTip = false;\r\n        this.orientation = 'horizontal';\r\n        this.fieldSize = [];\r\n        this.fieldThickness = 6;\r\n        this.borderWidth = 1;\r\n        this.minMax = [];\r\n        this.lengthInStep = 1;\r\n        this.corrector = 0;\r\n        this.subscriber = subscriber;\r\n        this.bar = new _bar_Bar__WEBPACK_IMPORTED_MODULE_5__[\"default\"](this);\r\n        this.runner = new _runner_Runner__WEBPACK_IMPORTED_MODULE_6__[\"default\"](this);\r\n        this.scale = new _scale_Scale__WEBPACK_IMPORTED_MODULE_7__[\"default\"](this);\r\n        this.tip = new _tip_Tip__WEBPACK_IMPORTED_MODULE_8__[\"default\"](this);\r\n        this.clearHTMLElement = _clearHTMLElement__WEBPACK_IMPORTED_MODULE_9__[\"default\"];\r\n        this.initializeValues = _field_initializeValues__WEBPACK_IMPORTED_MODULE_0__[\"default\"].bind(this);\r\n        this.handleClick = _field_handleClick__WEBPACK_IMPORTED_MODULE_2__[\"default\"].bind(this);\r\n        this.notifyFieldClick = _field_notifyFieldClick__WEBPACK_IMPORTED_MODULE_3__[\"default\"].bind(this);\r\n        this.initStartEnd = _field_initStartEnd__WEBPACK_IMPORTED_MODULE_1__[\"default\"];\r\n        this.setStep = _field_setStep__WEBPACK_IMPORTED_MODULE_4__[\"default\"];\r\n    }\r\n    return SliderView;\r\n}());\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SliderView);\r\n\n\n//# sourceURL=webpack://metalamp__task-4/./src/view/SliderView.ts?");

/***/ }),

/***/ "./src/view/bar/Bar.ts":
/*!*****************************!*\
  !*** ./src/view/bar/Bar.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _createBar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createBar */ \"./src/view/bar/createBar.ts\");\n/* harmony import */ var _updateBarPosition__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./updateBarPosition */ \"./src/view/bar/updateBarPosition.ts\");\n\r\n\r\nvar Bar = /** @class */ (function () {\r\n    function Bar(view) {\r\n        this.parent = view;\r\n        this.fieldThickness = 6;\r\n        this.createBar = _createBar__WEBPACK_IMPORTED_MODULE_0__[\"default\"].bind(this);\r\n        this.updateBarPosition = _updateBarPosition__WEBPACK_IMPORTED_MODULE_1__[\"default\"].bind(this);\r\n    }\r\n    return Bar;\r\n}());\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Bar);\r\n\n\n//# sourceURL=webpack://metalamp__task-4/./src/view/bar/Bar.ts?");

/***/ }),

/***/ "./src/view/bar/createBar.ts":
/*!***********************************!*\
  !*** ./src/view/bar/createBar.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar createBar = function addBarToDomAndSetThisBar(fieldThickness) {\r\n    var _this = this;\r\n    var parent = this.parent;\r\n    var addBarToDom = function () {\r\n        var widthOrHeight = parent.isVertical ? 'width' : 'height';\r\n        $(document).ready(function () {\r\n            parent.$field.append(\"<div data-testid='test-slider-bar' class='slider__bar slider__bar_\" + parent.orientation + \" js-slider__bar' style='\" + widthOrHeight + \": \" + fieldThickness + \"'></div>\");\r\n        });\r\n    };\r\n    var setThis$bar = function () {\r\n        $(document).ready(function () {\r\n            _this.$bar = parent.$field.children('.js-slider__bar');\r\n        });\r\n        _this.fieldThickness = fieldThickness;\r\n    };\r\n    addBarToDom();\r\n    setThis$bar();\r\n};\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createBar);\r\n\n\n//# sourceURL=webpack://metalamp__task-4/./src/view/bar/createBar.ts?");

/***/ }),

/***/ "./src/view/bar/updateBarPosition.ts":
/*!*******************************************!*\
  !*** ./src/view/bar/updateBarPosition.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _updateBarPosition_updateBarPositionUtility__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./updateBarPosition/updateBarPositionUtility */ \"./src/view/bar/updateBarPosition/updateBarPositionUtility.ts\");\n\r\nvar updateBarPosition = function updateBarPositionToDOM() {\r\n    var _this = this;\r\n    var _a = this.parent, isRange = _a.isRange, isVertical = _a.isVertical, runner = _a.runner;\r\n    $(document).ready(function () {\r\n        var _a = _this, $bar = _a.$bar, fieldThickness = _a.fieldThickness;\r\n        (0,_updateBarPosition_updateBarPositionUtility__WEBPACK_IMPORTED_MODULE_0__.defineBarKind)({\r\n            isRange: isRange,\r\n            isVertical: isVertical,\r\n            $bar: $bar,\r\n            runnersPosition: runner.positions,\r\n            fieldThickness: fieldThickness,\r\n            calcLengthOfRangeBar: _updateBarPosition_updateBarPositionUtility__WEBPACK_IMPORTED_MODULE_0__.calcLengthOfRangeBar,\r\n            updateSingleVerticalBarPosition: _updateBarPosition_updateBarPositionUtility__WEBPACK_IMPORTED_MODULE_0__.updateSingleVerticalBarPosition,\r\n            updateSingleHorizontalBarPosition: _updateBarPosition_updateBarPositionUtility__WEBPACK_IMPORTED_MODULE_0__.updateSingleHorizontalBarPosition,\r\n            updateRangeBarPosition: _updateBarPosition_updateBarPositionUtility__WEBPACK_IMPORTED_MODULE_0__.updateRangeBarPosition,\r\n        });\r\n    });\r\n};\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (updateBarPosition);\r\n\n\n//# sourceURL=webpack://metalamp__task-4/./src/view/bar/updateBarPosition.ts?");

/***/ }),

/***/ "./src/view/bar/updateBarPosition/updateBarPositionUtility.ts":
/*!********************************************************************!*\
  !*** ./src/view/bar/updateBarPosition/updateBarPositionUtility.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"defineBarKind\": () => (/* binding */ defineBarKind),\n/* harmony export */   \"calcLengthOfRangeBar\": () => (/* binding */ calcLengthOfRangeBar),\n/* harmony export */   \"updateSingleVerticalBarPosition\": () => (/* binding */ updateSingleVerticalBarPosition),\n/* harmony export */   \"updateSingleHorizontalBarPosition\": () => (/* binding */ updateSingleHorizontalBarPosition),\n/* harmony export */   \"updateRangeBarPosition\": () => (/* binding */ updateRangeBarPosition)\n/* harmony export */ });\nvar _this = undefined;\r\nvar NumbersEnum;\r\n(function (NumbersEnum) {\r\n    NumbersEnum[NumbersEnum[\"zero\"] = 0] = \"zero\";\r\n    NumbersEnum[NumbersEnum[\"one\"] = 1] = \"one\";\r\n})(NumbersEnum || (NumbersEnum = {}));\r\n/* eslint-env jquery */\r\nvar defineBarKind = function (_a) {\r\n    var isRange = _a.isRange, isVertical = _a.isVertical, $bar = _a.$bar, runnersPosition = _a.runnersPosition, fieldThickness = _a.fieldThickness, calcLengthOfRangeBar = _a.calcLengthOfRangeBar, updateSingleVerticalBarPosition = _a.updateSingleVerticalBarPosition, updateSingleHorizontalBarPosition = _a.updateSingleHorizontalBarPosition, updateRangeBarPosition = _a.updateRangeBarPosition;\r\n    if (isRange && isVertical) {\r\n        updateRangeBarPosition(NumbersEnum.one, $bar, runnersPosition, fieldThickness, calcLengthOfRangeBar(runnersPosition));\r\n    }\r\n    if (isRange && !isVertical) {\r\n        updateRangeBarPosition(NumbersEnum.zero, $bar, runnersPosition, fieldThickness, calcLengthOfRangeBar(runnersPosition));\r\n    }\r\n    if (!isRange && isVertical) {\r\n        updateSingleVerticalBarPosition(runnersPosition, fieldThickness, $bar);\r\n    }\r\n    if (!isRange && !isVertical) {\r\n        updateSingleHorizontalBarPosition(runnersPosition, fieldThickness, $bar);\r\n    }\r\n    return _this;\r\n};\r\nvar calcLengthOfRangeBar = function (runnersPosition) { return Math.abs(runnersPosition[1]\r\n    - runnersPosition[0]); };\r\nvar updateSingleVerticalBarPosition = function (runnersPosition, fieldThickness, $bar) {\r\n    if ($bar) {\r\n        $(document).ready(function () {\r\n            $bar.css('height', runnersPosition[0] + \"%\").css('top', 100 - runnersPosition[0] + \"%\");\r\n            $bar.css('width', fieldThickness + \"px\");\r\n        });\r\n    }\r\n};\r\nvar updateSingleHorizontalBarPosition = function (runnersPosition, fieldThickness, $bar) {\r\n    if ($bar) {\r\n        $(document).ready(function () {\r\n            $bar.css('width', runnersPosition[0] + \"%\");\r\n            $bar.css('height', fieldThickness + \"px\");\r\n        });\r\n    }\r\n};\r\nvar updateRangeBarPosition = function (index, $bar, runnersPosition, fieldThickness, barLength) {\r\n    if ($bar) {\r\n        $(document).ready(function () {\r\n            var positioningSwitcher = [\r\n                ['left', 'width'],\r\n                ['top', 'height'],\r\n            ];\r\n            var barBeginningPosition = Math.abs(100 * index - runnersPosition[index]);\r\n            $bar.css(\"\" + positioningSwitcher[index][0], barBeginningPosition + \"%\");\r\n            $bar.css(\"\" + positioningSwitcher[index][1], barLength + \"%\");\r\n            var thicknessPositioningIndex = 1 - index;\r\n            $bar.css(\"\" + positioningSwitcher[thicknessPositioningIndex][1], fieldThickness + \"px\");\r\n        });\r\n    }\r\n};\r\n\r\n\n\n//# sourceURL=webpack://metalamp__task-4/./src/view/bar/updateBarPosition/updateBarPositionUtility.ts?");

/***/ }),

/***/ "./src/view/clearHTMLElement.ts":
/*!**************************************!*\
  !*** ./src/view/clearHTMLElement.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar clearHTMLElement = function clearHTMLElementForRebuild(id, orientation) {\r\n    var $slider = document.querySelector(\"#\" + id);\r\n    $(document).ready(function () {\r\n        if ($slider) {\r\n            $slider.innerHTML = '';\r\n            var prevOrientation = orientation === 'vertical' ? 'horizontal' : 'vertical';\r\n            $slider.classList.remove(\"slider_\" + prevOrientation);\r\n            $slider.classList.remove(\"js_slider_\" + prevOrientation);\r\n        }\r\n    });\r\n};\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (clearHTMLElement);\r\n\n\n//# sourceURL=webpack://metalamp__task-4/./src/view/clearHTMLElement.ts?");

/***/ }),

/***/ "./src/view/field/handleClick.ts":
/*!***************************************!*\
  !*** ./src/view/field/handleClick.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _handleClick_handleClickUtility__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./handleClick/handleClickUtility */ \"./src/view/field/handleClick/handleClickUtility.ts\");\n\r\nvar handleClick = function activateOnClickListenerAndNotify() {\r\n    this.$field.on('click', this, _handleClick_handleClickUtility__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\r\n    $('.js-scale-line').on('click', this, _handleClick_handleClickUtility__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\r\n    $('.js-scale-numbers').on('click', this, _handleClick_handleClickUtility__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\r\n};\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handleClick);\r\n\n\n//# sourceURL=webpack://metalamp__task-4/./src/view/field/handleClick.ts?");

/***/ }),

/***/ "./src/view/field/handleClick/handleClickUtility.ts":
/*!**********************************************************!*\
  !*** ./src/view/field/handleClick/handleClickUtility.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar prepareMovingCoordinates = function (event, thisView) {\r\n    var cursorXY = [\r\n        event.pageX - thisView.$field.position().left - 5,\r\n        event.pageY - thisView.$field.position().top - 5,\r\n    ];\r\n    if (cursorXY[0] < 0) {\r\n        cursorXY[0] = 0;\r\n    }\r\n    if (cursorXY[0] > thisView.fieldSize[0]) {\r\n        // eslint-disable-next-line prefer-destructuring\r\n        cursorXY[0] = thisView.fieldSize[0];\r\n    }\r\n    return cursorXY;\r\n};\r\nvar handleClickUtility = function (event) {\r\n    event.preventDefault();\r\n    event.stopPropagation();\r\n    var thisView = event.data;\r\n    var cursorXY = prepareMovingCoordinates(event, thisView);\r\n    thisView.notifyFieldClick(cursorXY);\r\n};\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handleClickUtility);\r\n\n\n//# sourceURL=webpack://metalamp__task-4/./src/view/field/handleClick/handleClickUtility.ts?");

/***/ }),

/***/ "./src/view/field/initStartEnd.ts":
/*!****************************************!*\
  !*** ./src/view/field/initStartEnd.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar initStartEnd = function createFieldStartEndAndInitMinMax(minValue, maxValue) {\r\n    this.minMax = [minValue, maxValue];\r\n};\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initStartEnd);\r\n\n\n//# sourceURL=webpack://metalamp__task-4/./src/view/field/initStartEnd.ts?");

/***/ }),

/***/ "./src/view/field/initializeValues.ts":
/*!********************************************!*\
  !*** ./src/view/field/initializeValues.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar initializeValues = function initializeDefaultViewValues(runnerSize, fieldThickness, orientation) {\r\n    var _this = this;\r\n    this.runner.size = runnerSize;\r\n    this.orientation = orientation;\r\n    this.isVertical = orientation === 'vertical';\r\n    $(document).ready(function () {\r\n        var $field = _this.$field;\r\n        var borderWidth = parseInt($field.css('border-width'), 10);\r\n        var fieldWidth = parseInt($field.parent().css('width'), 10);\r\n        var fieldHeight = parseInt($field.parent().css('height'), 10);\r\n        if (_this.isVertical) {\r\n            _this.fieldSize = [fieldThickness, fieldHeight - borderWidth - 11];\r\n            $field.css('width', fieldThickness);\r\n            $field.css('height', '100%');\r\n        }\r\n        else {\r\n            _this.fieldSize = [fieldWidth - borderWidth - 11, fieldThickness];\r\n            $field.css('height', fieldThickness);\r\n            $field.css('width', '100%');\r\n        }\r\n    });\r\n    this.$field.addClass(\"slider_\" + this.orientation + \" js-slider_\" + this.orientation);\r\n};\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initializeValues);\r\n\n\n//# sourceURL=webpack://metalamp__task-4/./src/view/field/initializeValues.ts?");

/***/ }),

/***/ "./src/view/field/notifyFieldClick.ts":
/*!********************************************!*\
  !*** ./src/view/field/notifyFieldClick.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar notifyFieldClick = function notifySubscriberAboutClick(cursorXY) {\r\n    this.subscriber.recieveClickData(this, cursorXY);\r\n};\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (notifyFieldClick);\r\n\n\n//# sourceURL=webpack://metalamp__task-4/./src/view/field/notifyFieldClick.ts?");

/***/ }),

/***/ "./src/view/field/setStep.ts":
/*!***********************************!*\
  !*** ./src/view/field/setStep.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar setStep = function setRunnerStepInView(step, stepSignAfterComma) {\r\n    this.runner.step = step;\r\n    this.runner.stepSignAfterComma = stepSignAfterComma;\r\n    this.lengthInStep = (this.minMax[1] - this.minMax[0]) / step;\r\n};\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (setStep);\r\n\n\n//# sourceURL=webpack://metalamp__task-4/./src/view/field/setStep.ts?");

/***/ }),

/***/ "./src/view/runner/Runner.ts":
/*!***********************************!*\
  !*** ./src/view/runner/Runner.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _create__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create */ \"./src/view/runner/create.ts\");\n/* harmony import */ var _handleDrag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./handleDrag */ \"./src/view/runner/handleDrag.ts\");\n/* harmony import */ var _handleDrop__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./handleDrop */ \"./src/view/runner/handleDrop.ts\");\n/* harmony import */ var _notifySliderMoving__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./notifySliderMoving */ \"./src/view/runner/notifySliderMoving.ts\");\n/* harmony import */ var _demo_panel_removeListeners__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../demo/panel/removeListeners */ \"./src/demo/panel/removeListeners.ts\");\n/* harmony import */ var _updatePosition__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./updatePosition */ \"./src/view/runner/updatePosition.ts\");\n/* harmony import */ var _updateZIndex__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./updateZIndex */ \"./src/view/runner/updateZIndex.ts\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nvar Runner = /** @class */ (function () {\r\n    function Runner(view) {\r\n        this.parent = view;\r\n        this.$elements = [];\r\n        this.activeInstance = 0;\r\n        this.positions = [0, 100];\r\n        this.isZIndexUpdated = false;\r\n        this.size = [];\r\n        this.step = 1;\r\n        this.stepSignAfterComma = 0;\r\n        this.cursorXY = [0, 0];\r\n        this.createRunner = _create__WEBPACK_IMPORTED_MODULE_0__[\"default\"].bind(this);\r\n        this.handleDrag = _handleDrag__WEBPACK_IMPORTED_MODULE_1__[\"default\"].bind(this);\r\n        this.handleDrop = _handleDrop__WEBPACK_IMPORTED_MODULE_2__[\"default\"].bind(this);\r\n        this.notifySliderMoving = _notifySliderMoving__WEBPACK_IMPORTED_MODULE_3__[\"default\"].bind(this);\r\n        this.removeDrag = _demo_panel_removeListeners__WEBPACK_IMPORTED_MODULE_4__[\"default\"].bind(this);\r\n        this.updatePosition = _updatePosition__WEBPACK_IMPORTED_MODULE_5__[\"default\"].bind(this);\r\n        this.updateZIndex = _updateZIndex__WEBPACK_IMPORTED_MODULE_6__[\"default\"].bind(this);\r\n    }\r\n    return Runner;\r\n}());\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Runner);\r\n\n\n//# sourceURL=webpack://metalamp__task-4/./src/view/runner/Runner.ts?");

/***/ }),

/***/ "./src/view/runner/create.ts":
/*!***********************************!*\
  !*** ./src/view/runner/create.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _create_createUtility__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create/createUtility */ \"./src/view/runner/create/createUtility.ts\");\n\r\nvar create = function addRunnerToDOMAndSetThis$runner(i, stepPosition, stepSignAfterComma) {\r\n    var _this = this;\r\n    this.stepSignAfterComma = stepSignAfterComma;\r\n    $().ready(function () {\r\n        (0,_create_createUtility__WEBPACK_IMPORTED_MODULE_0__.addRunnerToDOM)((0,_create_createUtility__WEBPACK_IMPORTED_MODULE_0__.prepareRunnerArgs)(i, _this.parent.isVertical, _this.size, _this.parent.fieldSize, stepPosition), _this.parent.$field, _this.size, _this.parent.orientation);\r\n        _create_createUtility__WEBPACK_IMPORTED_MODULE_0__.setThis.call(_this, i, stepPosition);\r\n    });\r\n};\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (create);\r\n\n\n//# sourceURL=webpack://metalamp__task-4/./src/view/runner/create.ts?");

/***/ }),

/***/ "./src/view/runner/create/createUtility.ts":
/*!*************************************************!*\
  !*** ./src/view/runner/create/createUtility.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"setThis\": () => (/* binding */ setThis),\n/* harmony export */   \"addRunnerToDOM\": () => (/* binding */ addRunnerToDOM),\n/* harmony export */   \"prepareRunnerArgs\": () => (/* binding */ prepareRunnerArgs)\n/* harmony export */ });\nvar prepareRunnerArgs = function (i, isVertical, runnerSize, fieldSize, stepPosition) {\r\n    var positioning = ['left', 'top'];\r\n    var switcher = [0, 1];\r\n    var instance = i;\r\n    var mainPositionCorrector = 5 - runnerSize[0] / 2;\r\n    if (isVertical) {\r\n        positioning = ['top', 'left'];\r\n        switcher = [1, 0];\r\n    }\r\n    var thicknessCorrector = runnerSize[switcher[1]] / 2 + 1;\r\n    var positionInPx = Math.abs(fieldSize[switcher[0]] * switcher[0] - stepPosition * (fieldSize[switcher[0]] / 100));\r\n    var position = [\r\n        positionInPx + mainPositionCorrector,\r\n        -thicknessCorrector + fieldSize[switcher[1]] * 0.5\r\n    ];\r\n    return {\r\n        instance: instance,\r\n        positioning: positioning,\r\n        position: position,\r\n    };\r\n};\r\nvar addRunnerToDOM = function (preparedData, $field, runnerSize, orientation) {\r\n    var instance = preparedData.instance, positioning = preparedData.positioning, position = preparedData.position;\r\n    $field.append(\"<span data-testid=\\\"test-runner-\" + instance + \"\\\" class=\\\"slider__runner slider__runner_\" + orientation + \" js-slider__runner_instance-\" + instance + \"\\\" style=\\\"\" + positioning[0] + \":\" + position[0] + \"px; \" + positioning[1] + \":\" + position[1] + \"px; width:\" + runnerSize[0] + \"px; height:\" + runnerSize[1] + \"px\\\"></span>\");\r\n};\r\nvar setThis = function setThis$runner(i, stepPosition) {\r\n    this.$elements[i] = this.parent.$field.children(\".js-slider__runner_instance-\" + i);\r\n    this.positions[i] = stepPosition;\r\n};\r\n\r\n\n\n//# sourceURL=webpack://metalamp__task-4/./src/view/runner/create/createUtility.ts?");

/***/ }),

/***/ "./src/view/runner/handleDrag.ts":
/*!***************************************!*\
  !*** ./src/view/runner/handleDrag.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _handleDrag_handleDragUtility__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./handleDrag/handleDragUtility */ \"./src/view/runner/handleDrag/handleDragUtility.ts\");\n\r\nvar handleDrag = function activateOnDragListenerAndNotify(instance) {\r\n    var _this = this;\r\n    var _a = this.parent, $field = _a.$field, $body = _a.$body;\r\n    $field.on('mousedown', \".js-slider__runner_instance-\" + instance, function (event) {\r\n        event.preventDefault();\r\n        event.stopPropagation();\r\n        $field.addClass('tap');\r\n        $body.on('mousemove', { thisRunner: _this, instance: instance }, _handleDrag_handleDragUtility__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\r\n    });\r\n    $field.on('touchstart', \".js-slider__runner_instance-\" + instance, function (event) {\r\n        event.preventDefault();\r\n        event.stopPropagation();\r\n        $field.addClass('tap');\r\n        $body.on('touchmove', { thisRunner: _this, instance: instance }, _handleDrag_handleDragUtility__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\r\n    });\r\n};\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handleDrag);\r\n\n\n//# sourceURL=webpack://metalamp__task-4/./src/view/runner/handleDrag.ts?");

/***/ }),

/***/ "./src/view/runner/handleDrag/handleDragUtility.ts":
/*!*********************************************************!*\
  !*** ./src/view/runner/handleDrag/handleDragUtility.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar prepareMovingCoordinates = function (event, eventData) {\r\n    var _a = eventData.thisRunner.parent, $field = _a.$field, fieldSize = _a.fieldSize, isVertical = _a.isVertical;\r\n    var cursorXY = [0, 0];\r\n    if (event.pageX && event.pageY) {\r\n        cursorXY = [\r\n            event.pageX - $field.position().left - 5,\r\n            event.pageY - $field.position().top - 5,\r\n        ];\r\n    }\r\n    var switcher = 0;\r\n    if (isVertical)\r\n        switcher = 1;\r\n    if (cursorXY[switcher] < 0) {\r\n        cursorXY[switcher] = 0;\r\n    }\r\n    if (cursorXY[switcher] > fieldSize[switcher]) {\r\n        cursorXY[switcher] = fieldSize[switcher];\r\n    }\r\n    return cursorXY;\r\n};\r\nvar notifySubscriber = function (event) {\r\n    event.preventDefault();\r\n    event.stopPropagation();\r\n    var eventData = event.data;\r\n    var cursorXY = prepareMovingCoordinates(event, eventData);\r\n    eventData.thisRunner.notifySliderMoving(cursorXY, eventData.instance);\r\n};\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (notifySubscriber);\r\n\n\n//# sourceURL=webpack://metalamp__task-4/./src/view/runner/handleDrag/handleDragUtility.ts?");

/***/ }),

/***/ "./src/view/runner/handleDrop.ts":
/*!***************************************!*\
  !*** ./src/view/runner/handleDrop.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _handleDrop_handleDropUtility__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./handleDrop/handleDropUtility */ \"./src/view/runner/handleDrop/handleDropUtility.ts\");\n\r\nvar handleDrop = function onDropListenerAndHandler() {\r\n    var _a = this.parent, $field = _a.$field, $body = _a.$body;\r\n    $field.on('mouseup', { thisView: this.parent }, _handleDrop_handleDropUtility__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\r\n    $body.on('mouseup', { thisView: this.parent }, _handleDrop_handleDropUtility__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\r\n    $field.on('touchend', { thisView: this.parent }, _handleDrop_handleDropUtility__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\r\n    $body.on('touchend', { thisView: this.parent }, _handleDrop_handleDropUtility__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\r\n};\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handleDrop);\r\n\n\n//# sourceURL=webpack://metalamp__task-4/./src/view/runner/handleDrop.ts?");

/***/ }),

/***/ "./src/view/runner/handleDrop/handleDropUtility.ts":
/*!*********************************************************!*\
  !*** ./src/view/runner/handleDrop/handleDropUtility.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* eslint-env jquery */\r\nfunction cancelDragging(event) {\r\n    if (event.target.tagName !== 'INPUT') {\r\n        event.preventDefault();\r\n        event.stopPropagation();\r\n        var eventData = event.data;\r\n        var _a = eventData.thisView, $field = _a.$field, isRange = _a.isRange, $body = _a.$body;\r\n        var runner = eventData.thisView.runner;\r\n        $field.removeClass('tap');\r\n        runner.$elements[0].removeClass('slider__runner_current');\r\n        if (isRange) {\r\n            eventData.thisView.runner.$elements[1].removeClass('slider__runner_current');\r\n        }\r\n        $body.off('mousemove touchmove');\r\n        eventData.thisView.runner.updateZIndex(runner.activeInstance);\r\n    }\r\n}\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (cancelDragging);\r\n\n\n//# sourceURL=webpack://metalamp__task-4/./src/view/runner/handleDrop/handleDropUtility.ts?");

/***/ }),

/***/ "./src/view/runner/notifySliderMoving.ts":
/*!***********************************************!*\
  !*** ./src/view/runner/notifySliderMoving.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar notifySliderMoving = function notifySubscribersAboutDrag(cursorXY, instance) {\r\n    this.parent.subscriber.recieveDragData(this.parent, cursorXY, instance);\r\n};\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (notifySliderMoving);\r\n\n\n//# sourceURL=webpack://metalamp__task-4/./src/view/runner/notifySliderMoving.ts?");

/***/ }),

/***/ "./src/view/runner/updatePosition.ts":
/*!*******************************************!*\
  !*** ./src/view/runner/updatePosition.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _updatePosition_updatePositionUtility__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./updatePosition/updatePositionUtility */ \"./src/view/runner/updatePosition/updatePositionUtility.ts\");\n\r\nvar updatePosition = function updatePositionToThisAndDOM(stepPosition, instance) {\r\n    _updatePosition_updatePositionUtility__WEBPACK_IMPORTED_MODULE_0__.setThisRunnerPosition.call(this, stepPosition, instance);\r\n    _updatePosition_updatePositionUtility__WEBPACK_IMPORTED_MODULE_0__.updatePositionToDOM.call(this, (0,_updatePosition_updatePositionUtility__WEBPACK_IMPORTED_MODULE_0__.defineRunnerType)(this.parent.isVertical, stepPosition, instance));\r\n};\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (updatePosition);\r\n\n\n//# sourceURL=webpack://metalamp__task-4/./src/view/runner/updatePosition.ts?");

/***/ }),

/***/ "./src/view/runner/updatePosition/updatePositionUtility.ts":
/*!*****************************************************************!*\
  !*** ./src/view/runner/updatePosition/updatePositionUtility.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"setThisRunnerPosition\": () => (/* binding */ setThisRunnerPosition),\n/* harmony export */   \"defineRunnerType\": () => (/* binding */ defineRunnerType),\n/* harmony export */   \"updatePositionToDOM\": () => (/* binding */ updatePositionToDOM)\n/* harmony export */ });\nvar defineRunnerType = function (isVertical, stepPosition, instance) {\r\n    var positioning = [\r\n        ['left', 'width'],\r\n        ['top', 'height'],\r\n    ];\r\n    var datasForUpdating = { stepPosition: stepPosition, instance: instance, positioning: positioning[0] };\r\n    // eslint-disable-next-line prefer-destructuring\r\n    if (isVertical)\r\n        datasForUpdating.positioning = positioning[1];\r\n    return datasForUpdating;\r\n};\r\nvar setThisRunnerPosition = function setThisRunnerPositionToThis(stepPosition, instance) {\r\n    this.positions[instance] = stepPosition;\r\n    this.activeInstance = instance;\r\n};\r\nvar updatePositionToDOM = function updateRunnerPositionToDom(_a) {\r\n    var stepPosition = _a.stepPosition, instance = _a.instance, positioning = _a.positioning;\r\n    var _b = this.parent, isVertical = _b.isVertical, fieldSize = _b.fieldSize;\r\n    var _c = this, size = _c.size, $elements = _c.$elements;\r\n    var switcher = isVertical ? 1 : 0;\r\n    var viewPositionInPx = (stepPosition * (fieldSize[switcher] / 100));\r\n    var getVerticalPosition = function () { return fieldSize[1] - viewPositionInPx + 5 - size[0] / 2 + \"px\"; };\r\n    var getHorizontalPosition = function () { return viewPositionInPx + 5 - size[0] / 2 + \"px\"; };\r\n    var position = isVertical\r\n        ? getVerticalPosition()\r\n        : getHorizontalPosition();\r\n    $elements[instance].css(positioning[0], position);\r\n};\r\n\r\n\n\n//# sourceURL=webpack://metalamp__task-4/./src/view/runner/updatePosition/updatePositionUtility.ts?");

/***/ }),

/***/ "./src/view/runner/updateZIndex.ts":
/*!*****************************************!*\
  !*** ./src/view/runner/updateZIndex.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar updateZIndex = function updateZIndexOfRunners(instance) {\r\n    var _this = this;\r\n    $(document).ready(function () {\r\n        _this.$elements[instance].addClass('slider__runner_current');\r\n    });\r\n};\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (updateZIndex);\r\n\n\n//# sourceURL=webpack://metalamp__task-4/./src/view/runner/updateZIndex.ts?");

/***/ }),

/***/ "./src/view/scale/Scale.ts":
/*!*********************************!*\
  !*** ./src/view/scale/Scale.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _create__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create */ \"./src/view/scale/create.ts\");\n\r\nvar Scale = /** @class */ (function () {\r\n    function Scale(view) {\r\n        this.parent = view;\r\n        this.create = _create__WEBPACK_IMPORTED_MODULE_0__[\"default\"].bind(this);\r\n    }\r\n    return Scale;\r\n}());\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Scale);\r\n\n\n//# sourceURL=webpack://metalamp__task-4/./src/view/scale/Scale.ts?");

/***/ }),

/***/ "./src/view/scale/create.ts":
/*!**********************************!*\
  !*** ./src/view/scale/create.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _create_createUtility__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create/createUtility */ \"./src/view/scale/create/createUtility.ts\");\n/* harmony import */ var _create_prepareScaleData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./create/prepareScaleData */ \"./src/view/scale/create/prepareScaleData.ts\");\n\r\n\r\nvar create = function createScaleAndAddToDom() {\r\n    var _this = this;\r\n    $(document).ready(function () {\r\n        var _a = _this.parent, isVertical = _a.isVertical, $field = _a.$field, fieldSize = _a.fieldSize, runner = _a.runner, minMax = _a.minMax, orientation = _a.orientation;\r\n        (0,_create_createUtility__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(isVertical, $field, fieldSize, runner.step, runner.stepSignAfterComma, minMax, orientation, (0,_create_prepareScaleData__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(fieldSize, isVertical, minMax, runner.step, runner.stepSignAfterComma));\r\n    });\r\n};\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (create);\r\n\n\n//# sourceURL=webpack://metalamp__task-4/./src/view/scale/create.ts?");

/***/ }),

/***/ "./src/view/scale/create/addScaleToDom/createScaleLines.ts":
/*!*****************************************************************!*\
  !*** ./src/view/scale/create/addScaleToDom/createScaleLines.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar createScaleLines = function (_a) {\r\n    var $scaleLines = _a.$scaleLines, lineQuantity = _a.lineQuantity, orientation = _a.orientation, minMax = _a.minMax, smallLine = _a.smallLine, bigLine = _a.bigLine, step = _a.step, stepMultiplier = _a.stepMultiplier, shouldAddExtraLine = _a.shouldAddExtraLine;\r\n    var positioning = orientation === 'vertical' ? 'top' : 'left';\r\n    var switcher = orientation === 'vertical' ? 1 : 0;\r\n    for (var i = 0; i < 2 * lineQuantity + 1; i += 1) {\r\n        var topOrLeftPosition = Math.abs(100 * switcher - (((step / (minMax[1] - minMax[0])) * stepMultiplier * 100) * (i / 2)));\r\n        if (topOrLeftPosition < 98) {\r\n            if (i % 2 && i !== 2 * Math.floor(lineQuantity) + 1) {\r\n                $scaleLines.append(\"<div \\n              class=\\\"\\n                slider__scale-line\\n                slider__scale-line_\" + orientation + \"\\n                js-slider__scale-line\\n                \\\" \\n              style=\\\"\\n              position: absolute;\\n              \" + smallLine + \";\\n              \" + positioning + \": \" + topOrLeftPosition + \"%;\\\"\\n            >\\n            </div>\");\r\n            }\r\n            else if (!(i % 2)) {\r\n                $scaleLines.append(\"<div\\n              class=\\\"\\n                slider__scale-line\\n                slider__scale-line_\" + orientation + \"\\n                js-slider__scale-line\\n              \\\"\\n              style=\\\"\" + bigLine + \";\\n              position: absolute;\\n              \" + positioning + \": \" + topOrLeftPosition + \"%;\\\"\\n            ></div>\");\r\n            }\r\n        }\r\n    }\r\n    if (shouldAddExtraLine) {\r\n        $scaleLines.append(\"<div\\n            class=\\\"\\n              slider__scale-line\\n              slider__scale-line_\" + orientation + \"\\n              js-slider__scale-line\\n            \\\"\\n            style=\\\"\" + bigLine + \";\\n            position: absolute;\\n            \" + positioning + \": 100%;\\\"\\n          ></div>\");\r\n        $scaleLines.append(\"<div\\n            class=\\\"\\n              slider__scale-line\\n              slider__scale-line_\" + orientation + \"\\n              js-slider__scale-line\\n            \\\"\\n            style=\\\"\" + bigLine + \";\\n            position: absolute;\\n            \" + positioning + \": 0%;\\\"\\n          ></div>\");\r\n    }\r\n};\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createScaleLines);\r\n\n\n//# sourceURL=webpack://metalamp__task-4/./src/view/scale/create/addScaleToDom/createScaleLines.ts?");

/***/ }),

/***/ "./src/view/scale/create/addScaleToDom/createScaleLinesBox.ts":
/*!********************************************************************!*\
  !*** ./src/view/scale/create/addScaleToDom/createScaleLinesBox.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction createScaleLinesBox(_a) {\r\n    var $id = _a.$id, orientation = _a.orientation, fieldSize = _a.fieldSize, top = _a.top, left = _a.left;\r\n    $id.append(\"<div \\n          data-testid=\\\"test-slider__scale-lines\\\"\\n          class=\\\"slider__scale-lines slider__scale-lines_\" + orientation + \"\\n            js-slider__scale-lines\\\"\\n          style=\\\"height:\" + fieldSize[1] + \"px;\\n            width:\" + fieldSize[0] + \"px;\\n            left:\" + left + \"px; top:\" + top + \"px;\\n          \\\"\\n        >\\n        </div>\");\r\n}\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createScaleLinesBox);\r\n\n\n//# sourceURL=webpack://metalamp__task-4/./src/view/scale/create/addScaleToDom/createScaleLinesBox.ts?");

/***/ }),

/***/ "./src/view/scale/create/addScaleToDom/createScaleNumbers.ts":
/*!*******************************************************************!*\
  !*** ./src/view/scale/create/addScaleToDom/createScaleNumbers.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar createScaleNumbers = function (_a) {\r\n    var $scaleNumbers = _a.$scaleNumbers, minMax = _a.minMax, lineQuantity = _a.lineQuantity, stepSignAfterComma = _a.stepSignAfterComma, isVertical = _a.isVertical, stepMultiplier = _a.stepMultiplier, step = _a.step, onePxInPercent = _a.onePxInPercent, orientation = _a.orientation;\r\n    var positioning = orientation === 'vertical' ? 'top' : 'left';\r\n    for (var i = 1; i < lineQuantity + 1; i += 1) {\r\n        var leftOrTopPosition = ((step / (minMax[1] - minMax[0])) * stepMultiplier * 100) * (i);\r\n        var viewNumber = (minMax[0] + i * step * stepMultiplier).toFixed(Math.min(2, stepSignAfterComma));\r\n        var viewNumberAligning = viewNumber.length * 2 * onePxInPercent;\r\n        if ((100 - leftOrTopPosition) / onePxInPercent > 30) {\r\n            if (isVertical) {\r\n                $scaleNumbers.append(\"<div\\n            class=\\\"\\n              slider__scale-number\\n              js-slider__scale-number\\n            \\\"\\n            style=\\\"\\n            left: 5px;\\n            top: \" + (100 - (leftOrTopPosition + 0.5)) + \"%;\\n            position: absolute;\\n  \\n            \\\"\\n\\n          >\" + ((minMax[0] + i * step * stepMultiplier)).toFixed(Math.min(2, stepSignAfterComma)) + \"\\n          </div>\");\r\n            }\r\n            else {\r\n                $scaleNumbers.append(\"<div\\n            class=\\\"\\n              slider__scale-number\\n              js-slider__scale-number\\n            \\\"\\n            style=\\\"\\n            left: \" + (leftOrTopPosition - viewNumberAligning) + \"%;\\n            position: absolute;\\n  \\n            \\\"\\n            \\n          >\" + (minMax[0] + i * step * stepMultiplier).toFixed(Math.min(2, stepSignAfterComma)) + \"\\n          </div>\");\r\n            }\r\n        }\r\n    }\r\n    if (isVertical) {\r\n        $scaleNumbers.append(\"<div\\n          class=\\\"\\n            slider__scale-number\\n            js-slider__scale-number\\n          \\\"\\n          style=\\\"\\n          left: 5px;\\n          \" + positioning + \": 99.5%;\\n          position: absolute;\\n\\n          \\\"\\n          \\n        >\" + (minMax[0]) + \"\\n        </div>\");\r\n        $scaleNumbers.append(\"<div\\n          class=\\\"\\n            slider__scale-number\\n            js-slider__scale-number\\n          \\\"\\n          style=\\\"\\n          left: 5px;\\n          \" + positioning + \": -0.5%;\\n          position: absolute;\\n\\n          \\\"\\n          \\n        >\" + (minMax[1]) + \"\\n        </div>\");\r\n    }\r\n    else {\r\n        $scaleNumbers.append(\"<div\\n          class=\\\"\\n            slider__scale-number\\n            js-slider__scale-number\\n          \\\"\\n          style=\\\"\\n          \" + positioning + \": 100%;\\n          position: absolute;\\n\\n          \\\"\\n          \\n        >\" + (minMax[1]) + \"\\n        </div>\");\r\n        $scaleNumbers.append(\"<div\\n          class=\\\"\\n            slider__scale-number\\n            js-slider__scale-number\\n          \\\"\\n          style=\\\"\\n          \" + positioning + \": 0%;\\n          position: absolute;\\n\\n          \\\"\\n          \\n        >\" + (minMax[0]) + \"\\n        </div>\");\r\n    }\r\n};\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createScaleNumbers);\r\n\n\n//# sourceURL=webpack://metalamp__task-4/./src/view/scale/create/addScaleToDom/createScaleNumbers.ts?");

/***/ }),

/***/ "./src/view/scale/create/addScaleToDom/createScaleNumbersBox.ts":
/*!**********************************************************************!*\
  !*** ./src/view/scale/create/addScaleToDom/createScaleNumbersBox.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction createScaleNumbersBox(_a) {\r\n    var $id = _a.$id, top = _a.top, left = _a.left, fieldSize = _a.fieldSize;\r\n    $id.append(\"<div \\n          data-testid=\\\"test-slider__scale-numbers\\\"\\n          class=\\\"slider__scale-lines slider__scale-numbers\\n            js-slider__scale-numbers\\\"\\n          style=\\\"height:\" + fieldSize[1] + \"px;\\n            width:\" + fieldSize[0] + \"px;\\n            top:\" + top + \"px;\\n            left:\" + left + \"px;\\n          \\\"\\n        >\\n        </div>\");\r\n}\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createScaleNumbersBox);\r\n\n\n//# sourceURL=webpack://metalamp__task-4/./src/view/scale/create/addScaleToDom/createScaleNumbersBox.ts?");

/***/ }),

/***/ "./src/view/scale/create/createUtility.ts":
/*!************************************************!*\
  !*** ./src/view/scale/create/createUtility.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _addScaleToDom_createScaleLines__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addScaleToDom/createScaleLines */ \"./src/view/scale/create/addScaleToDom/createScaleLines.ts\");\n/* harmony import */ var _addScaleToDom_createScaleLinesBox__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./addScaleToDom/createScaleLinesBox */ \"./src/view/scale/create/addScaleToDom/createScaleLinesBox.ts\");\n/* harmony import */ var _addScaleToDom_createScaleNumbers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./addScaleToDom/createScaleNumbers */ \"./src/view/scale/create/addScaleToDom/createScaleNumbers.ts\");\n/* harmony import */ var _addScaleToDom_createScaleNumbersBox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./addScaleToDom/createScaleNumbersBox */ \"./src/view/scale/create/addScaleToDom/createScaleNumbersBox.ts\");\n\r\n\r\n\r\n\r\nvar addScaleToDom = function (isVertical, $id, fieldSize, step, stepSignAfterComma, minMax, orientation, _a) {\r\n    var lineQuantity = _a.lineQuantity, segmentInPercent = _a.segmentInPercent, stepMultiplier = _a.stepMultiplier, scaleSignAfterComma = _a.scaleSignAfterComma, shouldAddExtraLine = _a.shouldAddExtraLine, onePxInPercent = _a.onePxInPercent;\r\n    var createScaleLinesBoxArgs = {\r\n        $id: $id,\r\n        orientation: orientation,\r\n        fieldSize: fieldSize,\r\n        lineQuantity: lineQuantity,\r\n        top: 5,\r\n        left: fieldSize[0] + 2,\r\n        columnOrRow: 'row',\r\n    };\r\n    var createScaleNumbersBoxArgs = {\r\n        $id: $id,\r\n        lineQuantity: lineQuantity,\r\n        width: fieldSize[0],\r\n        height: fieldSize[1] + fieldSize[1] / (lineQuantity - 1),\r\n        top: 0,\r\n        left: fieldSize[0] + 20,\r\n        columnOrRow: 'row',\r\n        fieldSize: fieldSize,\r\n    };\r\n    var createScaleLinesArgs = {\r\n        $scaleLines: $id.find('.js-slider__scale-lines'),\r\n        lineQuantity: lineQuantity,\r\n        segmentInPercent: segmentInPercent,\r\n        orientation: orientation,\r\n        minMax: minMax,\r\n        smallLine: 'width: 5px',\r\n        bigLine: 'width: 10px',\r\n        step: step,\r\n        stepMultiplier: stepMultiplier,\r\n        shouldAddExtraLine: shouldAddExtraLine,\r\n    };\r\n    var createScaleNumbersArgs = {\r\n        $scaleNumbers: $id.find('.js-slider__scale-numbers'),\r\n        switcher: 1,\r\n        lastOrFirstIterration: 0,\r\n        minMax: minMax,\r\n        segmentInPercent: segmentInPercent,\r\n        lineQuantity: lineQuantity,\r\n        stepSignAfterComma: stepSignAfterComma,\r\n        isVertical: isVertical,\r\n        stepMultiplier: stepMultiplier,\r\n        step: step,\r\n        scaleSignAfterComma: scaleSignAfterComma,\r\n        shouldAddExtraLine: shouldAddExtraLine,\r\n        onePxInPercent: onePxInPercent,\r\n        orientation: orientation,\r\n    };\r\n    if (isVertical) {\r\n        (0,_addScaleToDom_createScaleLinesBox__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(createScaleLinesBoxArgs);\r\n        (0,_addScaleToDom_createScaleNumbersBox__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(createScaleNumbersBoxArgs);\r\n        createScaleNumbersArgs.$scaleNumbers = $id.find('.js-slider__scale-numbers');\r\n        createScaleLinesArgs.$scaleLines = $id.find('.js-slider__scale-lines');\r\n        (0,_addScaleToDom_createScaleNumbers__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(createScaleNumbersArgs);\r\n        (0,_addScaleToDom_createScaleLines__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(createScaleLinesArgs);\r\n    }\r\n    else {\r\n        createScaleLinesBoxArgs.top = fieldSize[1] + 2;\r\n        createScaleLinesBoxArgs.left = 4;\r\n        createScaleLinesBoxArgs.columnOrRow = 'columns';\r\n        (0,_addScaleToDom_createScaleLinesBox__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(createScaleLinesBoxArgs);\r\n        createScaleNumbersBoxArgs.width = fieldSize[0] + fieldSize[0] / (lineQuantity - 1);\r\n        // eslint-disable-next-line prefer-destructuring\r\n        createScaleNumbersBoxArgs.height = fieldSize[1];\r\n        createScaleNumbersBoxArgs.top = fieldSize[1] + 20;\r\n        createScaleNumbersBoxArgs.left = 0;\r\n        createScaleNumbersBoxArgs.columnOrRow = 'columns';\r\n        (0,_addScaleToDom_createScaleNumbersBox__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(createScaleNumbersBoxArgs);\r\n        createScaleNumbersArgs.$scaleNumbers = $id.find('.js-slider__scale-numbers');\r\n        createScaleNumbersArgs.switcher = 0;\r\n        createScaleNumbersArgs.lastOrFirstIterration = lineQuantity - 1;\r\n        (0,_addScaleToDom_createScaleNumbers__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(createScaleNumbersArgs);\r\n        createScaleLinesArgs.$scaleLines = $id.find('.js-slider__scale-lines');\r\n        createScaleLinesArgs.smallLine = 'height: 5px';\r\n        createScaleLinesArgs.bigLine = 'height: 10px';\r\n        (0,_addScaleToDom_createScaleLines__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(createScaleLinesArgs);\r\n    }\r\n};\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addScaleToDom);\r\n\n\n//# sourceURL=webpack://metalamp__task-4/./src/view/scale/create/createUtility.ts?");

/***/ }),

/***/ "./src/view/scale/create/prepareScaleData.ts":
/*!***************************************************!*\
  !*** ./src/view/scale/create/prepareScaleData.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar prepareScaleData = function (fieldSize, isVertical, minMax, step, stepSignAfterComma) {\r\n    var i = 0;\r\n    if (isVertical) {\r\n        i += 1;\r\n    }\r\n    var onePxInPercent = 100 / fieldSize[i];\r\n    var scaleSignAfterComma = stepSignAfterComma;\r\n    var shouldAddExtraLine = false;\r\n    var stepLimitsWithoutTrunc = (minMax[1] - minMax[0]) / step;\r\n    var stepLimits = Math.floor(stepLimitsWithoutTrunc);\r\n    var pixelLimits = Math.floor(fieldSize[i] / 40);\r\n    for (var index = 0; stepLimits > pixelLimits; index += 1) {\r\n        stepLimits /= 2;\r\n    }\r\n    var lineQuantity = Math.floor(stepLimits);\r\n    var segmentInPercent = Number(((minMax[1] - minMax[0]) / (lineQuantity)).toFixed(3));\r\n    var stepMultiplier = Math.floor(segmentInPercent / step);\r\n    if (step * (lineQuantity - 1) * stepMultiplier !== minMax[1] - minMax[0]) {\r\n        scaleSignAfterComma += 1;\r\n        shouldAddExtraLine = true;\r\n        var scaleStepBetweenTwoLastLines = fieldSize[i]\r\n            - (((step * stepMultiplier * (lineQuantity - 1))\r\n                / (minMax[1] - minMax[0])) * fieldSize[i]);\r\n        if (scaleStepBetweenTwoLastLines < 50)\r\n            lineQuantity -= 1;\r\n    }\r\n    if (minMax[0] > 0) {\r\n        segmentInPercent = Number(((minMax[1] - minMax[0]) / (lineQuantity - 1)).toFixed(3));\r\n    }\r\n    return {\r\n        lineQuantity: lineQuantity,\r\n        segmentInPercent: segmentInPercent,\r\n        stepMultiplier: stepMultiplier,\r\n        scaleSignAfterComma: scaleSignAfterComma,\r\n        shouldAddExtraLine: shouldAddExtraLine,\r\n        onePxInPercent: onePxInPercent,\r\n    };\r\n};\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (prepareScaleData);\r\n\n\n//# sourceURL=webpack://metalamp__task-4/./src/view/scale/create/prepareScaleData.ts?");

/***/ }),

/***/ "./src/view/tip/Tip.ts":
/*!*****************************!*\
  !*** ./src/view/tip/Tip.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _create__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create */ \"./src/view/tip/create.ts\");\n/* harmony import */ var _update__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./update */ \"./src/view/tip/update.ts\");\n\r\n\r\nvar Tip = /** @class */ (function () {\r\n    function Tip(view) {\r\n        this.parent = view;\r\n        this.create = _create__WEBPACK_IMPORTED_MODULE_0__[\"default\"].bind(this);\r\n        this.update = _update__WEBPACK_IMPORTED_MODULE_1__[\"default\"].bind(this);\r\n    }\r\n    return Tip;\r\n}());\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Tip);\r\n\n\n//# sourceURL=webpack://metalamp__task-4/./src/view/tip/Tip.ts?");

/***/ }),

/***/ "./src/view/tip/create.ts":
/*!********************************!*\
  !*** ./src/view/tip/create.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _create_createUtility__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create/createUtility */ \"./src/view/tip/create/createUtility.ts\");\n\r\nvar create = function addTipNumberToDOMAndUpdateTextNumber(i, isVertical, stepPosition, stepValue) {\r\n    var _this = this;\r\n    $(document).ready(function () {\r\n        var _a = _this.parent, fieldSize = _a.fieldSize, $field = _a.$field, orientation = _a.orientation, minMax = _a.minMax;\r\n        (0,_create_createUtility__WEBPACK_IMPORTED_MODULE_0__.addTipNumberToDOM)((0,_create_createUtility__WEBPACK_IMPORTED_MODULE_0__.prepareTipNumberArgs)(i, isVertical, fieldSize, stepPosition), $field, orientation, minMax, stepValue);\r\n    });\r\n    this.parent.hasTip = true;\r\n};\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (create);\r\n\n\n//# sourceURL=webpack://metalamp__task-4/./src/view/tip/create.ts?");

/***/ }),

/***/ "./src/view/tip/create/createUtility.ts":
/*!**********************************************!*\
  !*** ./src/view/tip/create/createUtility.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"prepareTipNumberArgs\": () => (/* binding */ prepareTipNumberArgs),\n/* harmony export */   \"addTipNumberToDOM\": () => (/* binding */ addTipNumberToDOM)\n/* harmony export */ });\nvar prepareTipNumberArgs = function (i, isVertical, fieldSize, stepPosition) {\r\n    var positioning = ['left'];\r\n    var instance = i;\r\n    if (isVertical) {\r\n        instance = i;\r\n        positioning = ['top'];\r\n    }\r\n    var position = isVertical\r\n        ? [fieldSize[1] - (stepPosition * (fieldSize[1] / 100)) - 10]\r\n        : [((stepPosition * (fieldSize[0] / 100)) - 20)];\r\n    return { instance: instance, positioning: positioning, position: position };\r\n};\r\nvar addTipNumberToDOM = function (preparedData, $id, orientation, minMax, stepValue) {\r\n    var instance = preparedData.instance, positioning = preparedData.positioning, position = preparedData.position;\r\n    $id.append(\"<span data-testid=\\\"test-tip-number-\" + instance + \"\\\" class='slider__tip slider__tip_\" + orientation + \" js-slider__tip_instance-\" + instance + \"' style=\\\"\" + positioning[0] + \":\" + position[0] + \"px\\\"><span>0</span></span>\");\r\n    $id.find(\".js-slider__tip_instance-\" + instance + \" span\").text(\"\" + stepValue);\r\n    return { stepValue: position[0], instance: instance };\r\n};\r\n\r\n\n\n//# sourceURL=webpack://metalamp__task-4/./src/view/tip/create/createUtility.ts?");

/***/ }),

/***/ "./src/view/tip/update.ts":
/*!********************************!*\
  !*** ./src/view/tip/update.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar update = function updateTipNumberAtDOM(_a) {\r\n    var stepValue = _a.stepValue, instance = _a.instance;\r\n    var _b = this.parent, $field = _b.$field, fieldSize = _b.fieldSize, isVertical = _b.isVertical, runner = _b.runner;\r\n    var positioning = isVertical ? 'top' : 'left';\r\n    var viewPosition = isVertical\r\n        ? fieldSize[1] - (runner.positions[instance] * (fieldSize[1] / 100)) - 10\r\n        : ((runner.positions[instance] * (fieldSize[0] / 100)) - 20);\r\n    $field.find(\".js-slider__tip_instance-\" + instance + \" span\").text(\"\" + stepValue);\r\n    $field.find(\".js-slider__tip_instance-\" + instance).css(positioning, viewPosition + \"px\");\r\n};\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (update);\r\n\n\n//# sourceURL=webpack://metalamp__task-4/./src/view/tip/update.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/Slider.ts");
/******/ 	
/******/ })()
;