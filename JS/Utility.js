function ClickFunctionSet(id, MyFunction) {
  let FindDiv = document.getElementById(id);
  if (!FindDiv) return;

  FindDiv.addEventListener('click', () => {
    MyFunction();
  });
}

function scrollToDiv(divId) {
  var element = document.getElementById(divId);
  if (!element) return;
  var elementPosition = element.getBoundingClientRect().top + window.scrollY; // 요소의 현재 화면 상단에서의 위치 계산
  var offset = -100; // 원하는 위치 조정을 위한 오프셋 값

  window.scrollTo({
    top: elementPosition + offset,
    behavior: 'smooth',
  });
}

function SetEffectHover(divId) {
  let FindDiv = document.getElementById(divId);
  if (!FindDiv) return;

  FindDiv.addEventListener('mouseenter', () => {
    FindDiv.style.cursor = 'pointer';
  });

  FindDiv.addEventListener('mouseleave', () => {
    FindDiv.style.cursor = 'default';
  });
}

function InputDivToDiv(MainDivId, InputDivId) {
  let MainDiv = document.getElementById(MainDivId);
  let InputDiv = document.getElementById(InputDivId);

  if (!MainDiv || !InputDiv) return;

  MainDiv.appendChild(InputDiv);
}

function ClickscrollToDiv(clickId, divId) {
  let clickDiv = document.getElementById(clickId);
  if (!clickDiv) return;

  clickDiv.addEventListener('click', () => {
    var element = document.getElementById(divId);
    if (!element) return;
    var elementPosition = element.getBoundingClientRect().top + window.scrollY; // 요소의 현재 화면 상단에서의 위치 계산
    var offset = -100; // 원하는 위치 조정을 위한 오프셋 값

    window.scrollTo({
      top: elementPosition + offset,
      behavior: 'smooth',
    });
  });
}
