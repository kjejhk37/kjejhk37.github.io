function CreateMainIntro(
  NameContent = undefined,
  IntroContent = undefined,
  NextMoveButtonContent = undefined
) {
  let MainIntroBox = document.createElement('nav');
  let Intro = document.createElement('div');
  let MainIntroName = document.createElement('div');
  let MainIntroRect = document.createElement('div');
  let IntroDescription = document.createElement('div');
  let NextMoveButton = document.createElement('div');

  MainIntroBox.id = 'MainIntroBox';
  Intro.id = 'Intro';
  MainIntroName.id = 'MainIntroName';
  MainIntroRect.id = 'MainIntroRect';
  IntroDescription.id = 'IntroDescription';
  NextMoveButton.id = 'IntroNextMoveButton';

  if (NameContent != undefined) {
    MainIntroName.textContent = NameContent;
    MainIntroName.innerHTML = MainIntroName.textContent.replace(/\n/g, '<br>');
  }

  if (IntroContent != undefined) {
    IntroDescription.textContent = IntroContent;
    IntroDescription.innerHTML = IntroDescription.textContent.replace(
      /\n/g,
      '<br>'
    );
  }

  if (NextMoveButtonContent != undefined) {
    NextMoveButton.textContent = NextMoveButtonContent;
    NextMoveButton.innerHTML = NextMoveButton.textContent.replace(
      /\n/g,
      '<br>'
    );
  }

  NextMoveButton.addEventListener('mouseenter', function () {
    NextMoveButton.style.cursor = 'pointer';
  });
  NextMoveButton.addEventListener('mouseleave', function () {
    NextMoveButton.style.cursor = 'default';
  });

  Intro.appendChild(MainIntroName);
  Intro.appendChild(MainIntroRect);
  Intro.appendChild(IntroDescription);
  Intro.appendChild(NextMoveButton);

  MainIntroBox.appendChild(Intro);

  document.body.appendChild(MainIntroBox);
}
