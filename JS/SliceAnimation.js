SliceNum = 0;
SelectSlice = [0, 0, 0, 0, 0]; // i 번째 슬라이스가 선택중이 것
SelectSliceMax = [0, 0, 0, 0, 0]; // i 번째 슬라이스의 최대 장수 (일정 수 넘긴후 돌아오기용)
SelectSliceWidths = [0, 0, 0, 0, 0]; // i번째 슬라이스 컨텐츠의 가로 길이 (계산용)

function CreateSliceBox(
  widthLenght,
  heightLenght,
  mainDiv = undefined,
  autoMoveTime = undefined
) {
  if (widthLenght <= 100) return;
  if (heightLenght <= 50) return;
  if (SliceNum >= 5) return;

  let newMainBoxId = 'MainBox_' + SliceNum;

  const newMainDiv = document.createElement('div');
  newMainDiv.id = newMainBoxId;
  newMainDiv.style.width = '' + widthLenght + 'px';
  newMainDiv.style.height = '' + heightLenght + 'px';
  newMainDiv.style.display = 'inline-block';
  newMainDiv.style.position = 'absolute';

  if (mainDiv == undefined) {
    document.body.appendChild(newMainDiv);
  } else {
    mainDiv.appendChild(newMainDiv);
  }

  let SliceBoxId = 'SliceBox_' + SliceNum;
  SelectSliceWidths[SliceNum] = widthLenght - 100;

  const newSliceBox = document.createElement('div');
  newSliceBox.id = SliceBoxId;
  newSliceBox.style.width = '' + (widthLenght - 100) + 'px';
  newSliceBox.style.height = '' + (heightLenght - 50) + 'px';
  newSliceBox.style.display = 'inline-block';
  newSliceBox.style.border = '3px solid black';
  newSliceBox.style.position = 'absolute';
  newSliceBox.style.backgroundColor = 'white';
  newSliceBox.style.transform = 'translate(' + 50 + 'px)';
  newSliceBox.style.overflow = 'auto';
  newSliceBox.style.overflowX = 'hidden';
  newSliceBox.style.overflowY = 'hidden';
  newSliceBox.style.borderRadius = '20px';

  newMainDiv.appendChild(newSliceBox);

  const LeftButton = document.createElement('div');
  LeftButton.id = 'SliceBox_' + SliceNum + '_LeftButton';

  LeftButton.style.display = 'inline-block';
  LeftButton.style.width = '25px';
  LeftButton.style.height = '25px';
  LeftButton.style.position = 'absolute';
  LeftButton.style.transform =
    'translate(10px,' + (heightLenght * 0.5 - 25) + 'px)';

  newMainDiv.appendChild(LeftButton);

  LeftButton.addEventListener('mouseenter', () => {
    LeftButton.style.cursor = 'pointer';
  });

  LeftButton.addEventListener('mouseleave', () => {
    LeftButton.style.cursor = 'default';
  });

  let tempSliceNum = SliceNum;

  LeftButton.addEventListener('click', () => {
    LeftMove(tempSliceNum);
  });

  const RightButton = document.createElement('div');
  RightButton.id = 'SliceBox_' + SliceNum + '_RightButton';
  RightButton.style.display = 'inline-block';
  RightButton.style.width = '25px';
  RightButton.style.height = '25px';
  RightButton.style.position = 'absolute';
  RightButton.style.transform =
    'translate(' +
    (widthLenght - 35) +
    'px, ' +
    (heightLenght * 0.5 - 25) +
    'px)';

  RightButton.addEventListener('mouseenter', () => {
    RightButton.style.cursor = 'pointer';
  });

  RightButton.addEventListener('mouseleave', () => {
    RightButton.style.cursor = 'default';
  });

  RightButton.addEventListener('click', () => {
    RightMove(tempSliceNum);
  });

  newMainDiv.appendChild(RightButton);

  let SliceBoxContent = document.createElement('div');
  SliceBoxContent.id = 'SliceBoxContent_' + SliceNum;
  SliceBoxContent.style.display = 'inline-block';
  SliceBoxContent.style.position = 'absolute';
  SliceBoxContent.style.width = newSliceBox.style.width;
  SliceBoxContent.style.height = newSliceBox.style.height;
  SliceBoxContent.style.backgroundColor = 'white';
  SliceBoxContent.style.transitionDuration = '1s';

  let SelectSliceButton = document.createElement('div');
  SelectSliceButton.id = 'SelectSliceButton_' + SliceNum;
  SelectSliceButton.style.display = 'flex';
  SelectSliceButton.style.justifyContent = 'center';
  SelectSliceButton.style.position = 'absolute';
  SelectSliceButton.style.width = newSliceBox.style.width;
  SelectSliceButton.style.height = '25px';
  SelectSliceButton.style.transform =
    'translate(50px,' + (heightLenght - 35) + 'px)';

  let SelectSliceButton_Contain = document.createElement('div');
  SelectSliceButton_Contain.id = 'SelectSliceButtonContain_' + SliceNum;
  SelectSliceButton_Contain.style.display = 'inline-block';
  SelectSliceButton_Contain.style.height = '25px';
  SelectSliceButton_Contain.style.backgroundColor = 'rgba(0,0,0,0)';
  SelectSliceButton_Contain.style.width = '25px';

  newMainDiv.appendChild(SelectSliceButton);
  SelectSliceButton.appendChild(SelectSliceButton_Contain);
  newSliceBox.appendChild(SliceBoxContent);

  if (autoMoveTime != undefined) {
    const intervalId = setInterval(() => {
      LeftMove(tempSliceNum);
    }, autoMoveTime);
  }

  CreateArrowIcon(RightButton.id, 'ArrowRight');
  CreateArrowIcon(LeftButton.id, 'ArrowLeft', 1);

  SliceNum++;
  return newMainBoxId;
}

// BoxidNum에 슬라이스를 추가할 예정
function AddSlice(BoxidNum) {
  if (BoxidNum >= 5) return;
  if (35 * (SelectSliceMax[BoxidNum] + 1) > SelectSliceWidths[BoxidNum]) return;
  let SliceBoxContent = document.getElementById('SliceBoxContent_' + BoxidNum);

  let widthLenght = SelectSliceWidths[BoxidNum];

  let newSlice = document.createElement('div');

  newSlice.id = 'SliceBoxContent_' + BoxidNum + '_' + SelectSliceMax[BoxidNum];
  newSlice.style.display = 'inline-block';
  newSlice.style.position = 'absolute';
  newSlice.style.width = '' + widthLenght + 'px';
  newSlice.style.height = SliceBoxContent.style.height;
  newSlice.style.backgroundColor = 'White';
  newSlice.style.border = '1px solid black';
  newSlice.style.transform =
    'translate(' + widthLenght * SelectSliceMax[BoxidNum] + 'px)';

  SliceBoxContent.appendChild(newSlice);
  SelectSliceMax[BoxidNum]++;
  SliceBoxContent.width = '' + widthLenght * SelectSliceMax[BoxidNum] + 'px';

  /* 선택형 아이콘 만들기 */
  let SelectSliceButtonContain = document.getElementById(
    'SelectSliceButtonContain_' + BoxidNum
  );

  let newIcon = document.createElement('div');
  newIcon.id = 'SliceIcon_' + BoxidNum + '_' + (SelectSliceMax[BoxidNum] - 1);
  newIcon.style.marginRight = '5px';
  newIcon.style.marginLeft = '5px';
  newIcon.style.display = 'inline-block';
  newIcon.style.borderRadius = '50%';
  newIcon.style.width = '25px';
  newIcon.style.height = '25px';
  newIcon.style.backgroundColor = 'rgb(177, 177, 177)';
  SelectSliceButtonContain.appendChild(newIcon);

  newIcon.addEventListener('mouseenter', () => {
    newIcon.style.cursor = 'pointer';
  });

  newIcon.addEventListener('mouseleave', () => {
    newIcon.style.cursor = 'default';
  });

  let tempSliceNum = SelectSliceMax[BoxidNum] - 1;
  newIcon.addEventListener('click', () => {
    SelectSliceMove(BoxidNum, tempSliceNum);
  });

  SelectSliceButtonContain.style.width =
    '' + 35 * SelectSliceMax[BoxidNum] + 'px';

  UpdateSelectSliceIconColor(BoxidNum);

  return newSlice.id;
}

function RightMove(BoxidNum) {
  let SliceBoxContent = document.getElementById('SliceBoxContent_' + BoxidNum);
  if (SelectSlice[BoxidNum] >= SelectSliceMax[BoxidNum] - 1) {
    SelectSlice[BoxidNum] = 0;
  } else {
    SelectSlice[BoxidNum]++;
  }

  let posX = SelectSliceWidths[BoxidNum] * SelectSlice[BoxidNum];
  SliceBoxContent.style.transform = 'translate(' + -posX + 'px)';

  UpdateSelectSliceIconColor(BoxidNum);
}
function LeftMove(BoxidNum) {
  let SliceBoxContent = document.getElementById('SliceBoxContent_' + BoxidNum);
  if (SelectSlice[BoxidNum] <= 0) {
    SelectSlice[BoxidNum] = SelectSliceMax[BoxidNum] - 1;
  } else {
    SelectSlice[BoxidNum]--;
  }

  let posX = SelectSliceWidths[BoxidNum] * SelectSlice[BoxidNum];
  SliceBoxContent.style.transform = 'translate(' + -posX + 'px)';

  UpdateSelectSliceIconColor(BoxidNum);
}

function SelectSliceMove(BoxidNum, SelectNum) {
  let SliceBoxContent = document.getElementById('SliceBoxContent_' + BoxidNum);
  if (SelectNum < 0 || SelectNum >= SelectSliceMax[BoxidNum]) return;
  SelectSlice[BoxidNum] = SelectNum;

  let posX = SelectSliceWidths[BoxidNum] * SelectSlice[BoxidNum];
  SliceBoxContent.style.transform = 'translate(' + -posX + 'px)';

  UpdateSelectSliceIconColor(BoxidNum);
}

function UpdateSelectSliceIconColor(BoxidNum) {
  const Icons = document.querySelectorAll('[id*="SliceIcon_' + BoxidNum + '"]');

  Icons.forEach((Icon) => {
    if (Icon.id == 'SliceIcon_' + BoxidNum + '_' + SelectSlice[BoxidNum]) {
      Icon.style.backgroundColor = 'gray';
    } else {
      Icon.style.backgroundColor = 'rgb(177, 177, 177)';
    }
  });
}

function CreateArrowIcon(MainId = undefined, ArrowId, velocity = 0) {
  const MainDiv = document.getElementById(MainId);
  widthLenght = '100px';
  HeightLenght = '100px';

  if (MainDiv) {
    widthLenght = MainDiv.style.width;
    HeightLenght = MainDiv.style.height;
  }

  let ArrowDiv = document.createElement('div');
  ArrowDiv.id = ArrowId;
  ArrowDiv.style.width = widthLenght;
  ArrowDiv.style.height = HeightLenght;
  ArrowDiv.style.display = 'flex';
  ArrowDiv.style.position = 'absolute';
  ArrowDiv.style.justifyContent = 'center';

  let ArrowUp = document.createElement('div');
  ArrowUp.style.width = '40%';
  ArrowUp.style.height = '50%';
  ArrowUp.style.display = 'inline-block';
  ArrowUp.style.position = 'absolute';
  ArrowUp.style.backgroundColor = 'black';
  if (velocity == 0)
    ArrowUp.style.transform = 'translate(0px, 0px) skew(40deg)';
  else ArrowUp.style.transform = 'translate(0px, 0px) skew(-40deg)';

  let ArrowDown = document.createElement('div');
  ArrowDown.style.width = '40%';
  ArrowDown.style.height = '50%';
  ArrowDown.style.display = 'inline-block';
  ArrowDown.style.position = 'absolute';
  ArrowDown.style.backgroundColor = 'black';
  if (velocity == 0)
    ArrowDown.style.transform = 'translate(0px, 99%) skew(-40deg)';
  else ArrowDown.style.transform = 'translate(0px, 99%) skew(40deg)';

  ArrowDiv.appendChild(ArrowUp);
  ArrowDiv.appendChild(ArrowDown);

  if (!MainDiv) {
    document.body.appendChild(ArrowDiv);
  } else {
    MainDiv.appendChild(ArrowDiv);
  }
}
