function CreateSkillBox() {
  let SkillsBox = document.createElement('nav');
  SkillsBox.id = 'SkillsBox';

  document.body.appendChild(SkillsBox);

  let SkillContentsBox = document.createElement('div');
  SkillContentsBox.id = 'SkillContentsBox';

  SkillsBox.appendChild(SkillContentsBox);

  let SkillTitle = document.createElement('div');
  SkillTitle.id = 'SkillTitle';
  SkillTitle.textContent = 'Skills';

  SkillsBox.appendChild(SkillTitle);

  let SkillTitleUnderline = document.createElement('div');
  SkillTitleUnderline.id = 'SkillTitleUnderline';
  SkillsBox.appendChild(SkillTitleUnderline);

  let SkillsTitleClipImg = document.createElement('div');
  SkillsTitleClipImg.id = 'SkillsTitleClipImg';
  SkillsBox.appendChild(SkillsTitleClipImg);

  SetEffectHover(SkillsTitleClipImg.id);
}

SkillBoxNum = 0;

function AddSkillBox(title) {
  let SkillContentsBox = document.getElementById('SkillContentsBox');
  if (!SkillContentsBox) return;
  let newSkillBox = document.createElement('div');
  newSkillBox.id = 'SkillBox_' + SkillBoxNum;

  newSkillBox.style.transitionDuration = '0.5s';

  newSkillBox.addEventListener('mouseenter', () => {
    newSkillBox.style.scale = '1.05';
  });

  newSkillBox.addEventListener('mouseleave', () => {
    newSkillBox.style.scale = '';
  });

  SkillContentsBox.appendChild(newSkillBox);

  let SkillText = document.createElement('div');
  SkillText.id = 'SkillEachText_' + SkillBoxNum;
  SkillText.textContent = title;

  newSkillBox.appendChild(SkillText);

  let SkillTextUnderLine = document.createElement('div');
  SkillTextUnderLine.id = 'SkillTextUnderLine_' + SkillBoxNum;

  newSkillBox.appendChild(SkillTextUnderLine);

  let SkillIconContainer = document.createElement('div');
  SkillIconContainer.id = 'SkillIconContainer_' + SkillBoxNum;

  newSkillBox.appendChild(SkillIconContainer);

  SkillBoxNum++;
}

SkillIconsNums = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

function AddSkillIcon(BoxNum, ImgURL = undefined, Text = undefined) {
  if (BoxNum >= 15) return;
  let SkillIconContainer = document.getElementById(
    'SkillIconContainer_' + BoxNum
  );
  let SkillBox = document.getElementById('SkillBox_' + BoxNum);

  if (!SkillIconContainer || !SkillBox) return;

  let SkillIcon = document.createElement('div');
  SkillIcon.id = 'SkillIcon_' + BoxNum + '_' + SkillIconsNums[BoxNum];

  SkillIconContainer.appendChild(SkillIcon);

  let BoxheightSize = 230 + SkillIconsNums[BoxNum] * 110;
  let ContainerHeightSize = 120 + SkillIconsNums[BoxNum] * 110;

  SkillIconContainer.style.height = '' + ContainerHeightSize + 'px';
  SkillBox.style.height = '' + BoxheightSize + 'px';

  let SkillIconImg = document.createElement('div');
  SkillIconImg.id = 'SkillIconImg_' + BoxNum + '_' + SkillIconsNums[BoxNum];

  if (ImgURL != undefined) {
    SkillIconImg.style.backgroundImage = `url('${ImgURL}')`;
  }
  if (Text != undefined) {
    SkillIconImg.textContent = Text;
  }

  SkillIcon.appendChild(SkillIconImg);
  SkillIconsNums[BoxNum]++;
}
