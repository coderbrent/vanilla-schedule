export const formatChecker = (fieldType, input) => {
  const reEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const rePhone = /^(?:(?:\+?1\s*(?:[.-]\s*)?)?(?:\(\s*([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9])\s*\)|([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9]))\s*(?:[.-]\s*)?)?([2-9]1[02-9]|[2-9][02-9]1|[2-9][02-9]{2})\s*(?:[.-]\s*)?([0-9]{4})(?:\s*(?:#|x\.?|ext\.?|extension)\s*(\d+))?$/;
  const reName = /^[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{1,}$/;

  switch(fieldType) {
    case 'name': {
    const checkedName = {}
      checkedName.isEmpty = input === '' ? true : false;
      checkedName.isValid = reName.test(input);
      checkedName.canSubmit = !checkedName.isEmpty && checkedName.isValid;
      return checkedName;
    }
    case 'email': {
    const checkedEmail = {}
      checkedEmail.isEmpty = input === '' ? true : false;
      checkedEmail.isValid = reEmail.test(String(input).toLowerCase());
      checkedEmail.canSubmit = !checkedEmail.isEmpty && checkedEmail.isValid;
      return checkedEmail;
    }
    case 'tel': { 
    const checkedPhone = {}
      checkedPhone.isEmpty = input === '' ? true : false;
      checkedPhone.isValid = rePhone.test(String(input));
      checkedPhone.canSubmit = !checkedPhone.isEmpty && checkedPhone.isValid;
      return checkedPhone;
    }
    default: return input;
  }
}