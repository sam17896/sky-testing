import {Dimensions, Platform} from 'react-native';
const {width, height} = Dimensions.get('window');

//Guideline sizes are based on standard ~5" screen mobile device
const guidelineBaseWidth = 350;
const guidelineBaseHeight = 680;

const scale = (size: number) => (width / guidelineBaseWidth) * size;
const scaleVertical = (size: number) => (height / guidelineBaseHeight) * size;
const scaleModerate = (size: number, factor = 0.5) =>
  size + (scale(size) - size) * factor;
const windowWidth = width;
const windowHeight = height;

const roundTwoDecimals = (value: number) => Math.round(value * 100) / 100;

const moderateScale = (size: number, factor = 0.75) =>
  roundTwoDecimals(size + (scale(size) - size) * factor);

// calculates the desired width/heigth while respecting the original
// aspect ratio.
const getAspectRatioSize = (
  [originalWidth, originalHeight]: number[],
  [targetWidth = 0, targetHeight = 0],
) => {
  // if the request is for targetHeight
  if (targetWidth && !targetHeight) {
    return [targetWidth, originalHeight * (targetWidth / originalWidth)];
  }

  // if the request is for targetWidth
  if (!targetWidth && targetHeight) {
    return [originalWidth * (targetHeight / originalHeight), targetHeight];
  }

  // if both targetWidth and targetHeight is provided
  // then we do nothing
  if (targetWidth && targetHeight) {
    return [targetWidth, targetHeight];
  }

  // if none of them is provided then we return zero
  return [0, 0];
};

// circle css values
// given the size number returns perfect circle css values for given platform
const circle = (size: number) => ({
  width: size,
  height: size,
  borderRadius: Platform.OS === 'ios' ? size / 2 : size,
});

const shadowStyle = {
  elevation: 5,
  shadowRadius: 2,
  shadowOpacity: 0.6,
  shadowColor: '#707070',
  shadowOffset: {width: 0, height: 1},
};

const objectComparision = (x: any, y: any) => {
  const result = [];
  const image = x?.image;
  delete x?.image;
  for (const [key, value] of Object.entries(x)) {
    if (value !== y[key]) {
      result.push(true);
    } else {
      result.push(false);
    }
  }

  const index = result.indexOf(true);
  if (index !== -1) {
    x.image = image;
    return true;
  } else {
    x.image = image;
    return false;
  }
};

const camelCase = (str: string) => {
  return str
    .replace(/\s(.)/g, a => {
      return a.toUpperCase();
    })
    .replace(/\s/g, '')
    .replace(/^(.)/, b => {
      return b.toLowerCase();
    });
};

const isJson = (str: string) => {
  try {
    JSON.parse(str);
  } catch (e) {
    return false;
  }
  return true;
};

export {
  scale,
  scaleVertical,
  scaleModerate,
  windowWidth,
  isJson,
  windowHeight,
  shadowStyle,
  circle,
  camelCase,
  moderateScale,
  objectComparision,
  getAspectRatioSize,
};
