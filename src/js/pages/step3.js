function step3() {
  rootElement.innerHTML = templates['step3']();

  let curStep = 3;
  pagination(curStep);

  let checkFb = rootElement.querySelector('input[name="check_fb"]');
  let checkVk = rootElement.querySelector('input[name="check_vk"]');
  let checkTw = rootElement.querySelector('input[name="check_tw"]');
  let checkOk = rootElement.querySelector('input[name="check_ok"]');

  let inputFb = rootElement.querySelector('input[name="input_fb"]');
  let inputVk = rootElement.querySelector('input[name="input_vk"]');
  let inputTw = rootElement.querySelector('input[name="input_tw"]');
  let inputOk = rootElement.querySelector('input[name="input_ok"]');

  let urlError = rootElement.querySelector('#url-error');

  checkFb.addEventListener('click', showInput);
  checkVk.addEventListener('click', showInput);
  checkTw.addEventListener('click', showInput);
  checkOk.addEventListener('click', showInput);

  inputFb.addEventListener('focusout', validateUrl);
  inputVk.addEventListener('focusout', validateUrl);
  inputTw.addEventListener('focusout', validateUrl);
  inputOk.addEventListener('focusout', validateUrl);

  inputFb.addEventListener('focusin', resetState);
  inputVk.addEventListener('focusin', resetState);
  inputTw.addEventListener('focusin', resetState);
  inputOk.addEventListener('focusin', resetState);

  function showInput(el) {
    if (el.target.checked) {
      switch (el.target.name) {
        case 'check_fb':
          inputFb.classList.remove('display-none');
          break;
        case 'check_vk':
          inputVk.classList.remove('display-none');
          break;
        case 'check_tw':
          inputTw.classList.remove('display-none');
          break;
        case 'check_ok':
          inputOk.classList.remove('display-none');
          break;
        default:
          console.log('errror in switch');
          break;
      }
    } else {
      switch (el.target.name) {
        case 'check_fb':
          inputFb.classList.add('display-none');
          break;
        case 'check_vk':
          inputVk.classList.add('display-none');
          break;
        case 'check_tw':
          inputTw.classList.add('display-none');
          break;
        case 'check_ok':
          inputOk.classList.add('display-none');
          break;
        default:
          console.log('errror in switch');
          break;
      }
    }


  }

  function validateUrl(el) {
    let URL_RE = /^[a-z]+[.]+[a-z]+[/]+[a-z0-9-_]+/i;
    let inputValue = el.target.value;

    if (inputValue.length >=6 && URL_RE.test(inputValue)) {
      resetState(el);
      switch (el.target.name) {
        case 'input_fb':
          questionnaire.setInformation('fb', inputValue);
          break;
        case 'input_vk':
          questionnaire.setInformation('vk', inputValue);
          break;
        case 'input_tw':
          questionnaire.setInformation('tw', inputValue);
          break;
        case 'input_ok':
          questionnaire.setInformation('ok', inputValue);
          break;
        default:
          console.log('errror in switch');
          break;
      }
    } else if (!el.target.parentNode.classList.contains('display-none')) {
      el.target.parentNode.classList.add('not-valid-input');
      urlError.classList.remove('display-none');
    }
  }

  function resetState(el) {
    if (el.target.parentNode.classList.contains('not-valid-input')) {
      urlError.classList.add('display-none');
      el.target.parentNode.classList.remove('not-valid-input');
    }
  }
}