AnimationAlbumNum = 0;
EachAlbumNums = [0, 0, 0, 0, 0, 0, 0];
curSelectAlbum = [0, 0, 0, 0, 0, 0, 0];

function CreateAnimationAlbum(MainId = undefined) {
  if (AnimationAlbumNum >= 7) return;
  let newAnimationAlbumBox = document.createElement('div');
  newAnimationAlbumBox.id = 'AnimationAlbumBox_' + AnimationAlbumNum;

  let MainDiv = undefined;
  if (MainId != undefined) {
    MainDiv = document.getElementById(MainId);
  }

  if (MainDiv) {
    MainDiv.appendChild(newAnimationAlbumBox);
  } else {
    document.body.appendChild(newAnimationAlbumBox);
  }

  AnimationAlbumNum++;
}

function AddAlbum(AlbumNum) {
  if (AlbumNum >= 7) return;
  let MainAlbum = document.getElementById('AnimationAlbumBox_' + AlbumNum);
  if (!MainAlbum) return;
  let newAlbumPage = document.createElement('div');
  newAlbumPage.id = 'AlbumPage_' + AlbumNum + '_' + EachAlbumNums[AlbumNum];

  newAlbumPage.addEventListener('animationend', () => {
    newAlbumPage.style.animation = '';
  });

  MainAlbum.appendChild(newAlbumPage);

  EachAlbumNums[AlbumNum]++;
}

function SelectAlbum(AlbumNum, SelectAlbumNum) {
  if (curSelectAlbum[AlbumNum] == SelectAlbumNum) return;
  curSelectAlbum[AlbumNum] = SelectAlbumNum;
  let selectAlbumId = 'AlbumPage_' + AlbumNum + '_' + SelectAlbumNum;

  let AllAlbums = document.querySelectorAll(
    '[id*="AlbumPage_' + AlbumNum + '"]'
  );

  AllAlbums.forEach((album) => {
    if (album.id == selectAlbumId) {
      album.style.animationName = 'Select';
      album.style.zIndex = '1';
    } else {
      album.style.zIndex = '0';
    }
  });
}

function AddSelectEvent(EventId, AlbumNum, SelectAlbumNum) {
  let eventDiv = document.getElementById(EventId);
  if (!eventDiv) return;

  eventDiv.addEventListener('click', () => {
    SelectAlbum(AlbumNum, SelectAlbumNum);
  });
}
