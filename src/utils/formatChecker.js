/**
 * @desc checks the provided form field for proper formatting based on input type.
 * @param {String} fieldType is the type of field to check formatting for.
 * @param {String} input is the user provided text.
 * @return bool - true if field passes regex test & !empty, otherwise false.
 */

export const formatChecker = (fieldType, input) => {
  const isEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,4}))$/;
  const isPhone = /^(?:(?:\+?1\s*(?:[.-]\s*)?)?(?:\(\s*([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9])\s*\)|([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9]))\s*(?:[.-]\s*)?)?([2-9]1[02-9]|[2-9][02-9]1|[2-9][02-9]{2})\s*(?:[.-]\s*)?([0-9]{4})(?:\s*(?:#|x\.?|ext\.?|extension)\s*(\d+))?$/;
  const isName = /^[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{1,}$/;

  switch(fieldType) {
    case 'name': {
      return input !== '' && isName.test(input) ? true : false;
    }
    case 'email': {
      return input !== '' && isEmail.test(input) ? true : false;
    }
    case 'tel': { 
      return input !== '' && isPhone.test(input) ? true : false;
    }
    default: return input;
  }
}