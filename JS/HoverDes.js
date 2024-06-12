function createExplanationBox(
  MainId,
  Name,
  triggerContent,
  content,
  ImgURL = undefined
) {
  const newBoxDiv = document.createElement('div');
  newBoxDiv.className = 'Box' + Name;

  const newTrigger = document.createElement('div');
  newTrigger.className = 'trigger' + Name;

  const newTriggerText = document.createElement('div');
  newTriggerText.className = 'Text' + Name;
  newTriggerText.textContent = triggerContent;

  const newHiddenBox = document.createElement('div');
  newHiddenBox.className = 'hiddenBox' + Name;

  const newHiddenFont = document.createElement('div');
  newHiddenFont.className = 'hidden-Font' + Name;
  newHiddenFont.textContent = content;
  newHiddenFont.innerHTML = newHiddenFont.textContent.replace(/\n/g, '<br>');

  newBoxDiv.appendChild(newTrigger);
  newTrigger.appendChild(newHiddenBox);
  newTrigger.appendChild(newTriggerText);

  newHiddenBox.appendChild(newHiddenFont);
  if (ImgURL !== undefined) {
    const newHiddenImage = document.createElement('div');
    newHiddenImage.className = 'hidden-Image' + Name;

    newHiddenImage.style.backgroundImage = `url('${ImgURL}')`;

    newHiddenImage.style.backgroundRepeat = 'no-repeat';
    newHiddenImage.style.backgroundAttachment = 'scroll';

    newHiddenBox.appendChild(newHiddenImage);
  }

  const MainDiv = document.getElementById(MainId);

  MainDiv.appendChild(newBoxDiv);
}

// 모든 trigger 요소를 가져옴
document.addEventListener('DOMContentLoaded', function () {
  // 이곳에 실행하려는 코드를 작성합니다.
  const triggers = document.querySelectorAll('[class*="trigger"]');

  // 각 trigger 요소에 이벤트 리스너 추가
  triggers.forEach((trigger) => {
    trigger.addEventListener('mouseenter', () => {
      const relatedHidden = trigger.querySelectorAll(`[class*="hidden"]`);
      relatedHidden.forEach((hidden) => {
        hidden.style.display = 'inline-block';
      });
    });

    trigger.addEventListener('mouseleave', () => {
      const relatedHidden = trigger.querySelectorAll(`[class*="hidden"]`);
      relatedHidden.forEach((hidden) => {
        hidden.style.display = 'none';
      });
    });
  });
});
