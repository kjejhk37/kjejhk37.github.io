function CreateMainMenu(LogoText = undefined) {
  let MainMenu = document.createElement('nav');
  let MainMenuLogo = document.createElement('div');
  let MainMenuContainer = document.createElement('div');

  document.body.appendChild(MainMenu);
  MainMenu.appendChild(MainMenuLogo);
  MainMenu.appendChild(MainMenuContainer);

  MainMenu.id = 'MainMenu';
  MainMenuLogo.id = 'MainMenuLogo';
  MainMenuContainer.id = 'MainMenuContainer';

  if (LogoText) {
    MainMenuLogo.textContent = LogoText;
  }

  MainMenuLogo.addEventListener('mouseenter', function () {
    MainMenuLogo.style.cursor = 'pointer';
  });
  MainMenuLogo.addEventListener('mouseleave', function () {
    MainMenuLogo.style.cursor = 'default';
  });
}

MainMenuItemNum = 0;

function AddMainMenuItem(content = undefined) {
  let MainMenuContainer = document.getElementById('MainMenuContainer');
  if (!MainMenuContainer) return;

  let newItem = document.createElement('div');
  MainMenuContainer.appendChild(newItem);
  newItem.id = 'MainMenuItem_' + MainMenuItemNum;
  MainMenuItemNum++;

  newItem.addEventListener('mouseenter', function () {
    newItem.style.cursor = 'pointer';
    newItem.style.outline = '2px solid white';
  });
  newItem.addEventListener('mouseleave', function () {
    newItem.style.cursor = 'default';
    newItem.style.outline = '';
  });

  if (content != undefined) {
    newItem.textContent = content;
  }
}
