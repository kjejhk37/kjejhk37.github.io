function CreateProjectBox() {
  let ProjectBox = document.createElement('nav');
  ProjectBox.id = 'ProjectBox';

  document.body.appendChild(ProjectBox);

  let ProjectsTitle = document.createElement('div');
  ProjectsTitle.id = 'ProjectsTitle';
  ProjectsTitle.textContent = 'Projects';

  let ProjectsTitleUnderline = document.createElement('div');
  ProjectsTitleUnderline.id = 'ProjectsTitleUnderline';

  let ProjectsTitleClipImg = document.createElement('div');
  ProjectsTitleClipImg.id = 'ProjectsTitleClipImg';

  ProjectBox.appendChild(ProjectsTitle);
  ProjectBox.appendChild(ProjectsTitleUnderline);
  ProjectBox.appendChild(ProjectsTitleClipImg);

  let ProjectContentBox = document.createElement('div');
  ProjectContentBox.id = 'ProjectContentBox';

  ProjectBox.appendChild(ProjectContentBox);

  SetEffectHover(ProjectsTitleClipImg.id);
}

let ProjectNum = 0;

function AddProjectContent(MainId, ImgURL, MoveURL = undefined) {
  let MainDiv = document.getElementById(MainId);
  if (!MainId) return;

  let ImgDiv = document.createElement('div');
  ImgDiv.id = 'ProjectImgDiv_' + ProjectNum;
  let Img = document.createElement('div');
  Img.id = 'ProjectImgFile_' + ProjectNum;
  if (ImgURL != undefined) {
    Img.style.backgroundImage = `url('${ImgURL}')`;
  }
  if (MoveURL != undefined) {
    Img.addEventListener('mouseenter', () => {
      Img.style.cursor = 'pointer';
    });

    Img.addEventListener('mouseleave', () => {
      Img.style.cursor = 'default';
    });

    Img.addEventListener('click', () => {
      window.location.href = MoveURL;
    });
  }

  ImgDiv.appendChild(Img);

  let MainTextBox = document.createElement('div');
  MainTextBox.id = 'ProjectMainTextBox_' + ProjectNum;

  let SubTextBox = document.createElement('div');
  SubTextBox.id = 'ProjectSubTextBox_' + ProjectNum;

  MainDiv.appendChild(ImgDiv);
  MainDiv.appendChild(MainTextBox);
  MainDiv.appendChild(SubTextBox);

  ProjectNum++;
}
