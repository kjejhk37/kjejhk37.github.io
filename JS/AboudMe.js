function CreateAboutMe() {
  let AboutMeBox = document.createElement('nav');
  let AboutMeContentBox = document.createElement('div');

  document.body.appendChild(AboutMeBox);
  AboutMeBox.appendChild(AboutMeContentBox);

  AboutMeBox.id = 'AboutMeBox';
  AboutMeContentBox.id = 'AboutMeCententBox';

  let AboutMeTitle = document.createElement('div');
  AboutMeTitle.id = 'AboutMeTitle';
  AboutMeTitle.textContent = 'About Me';
  AboutMeBox.appendChild(AboutMeTitle);

  let AboutMeTitleUnderline = document.createElement('div');
  AboutMeTitleUnderline.id = 'AboutMeTitleUnderline';
  AboutMeBox.appendChild(AboutMeTitleUnderline);

  let AboutMeTitleClipImg = document.createElement('div');
  AboutMeTitleClipImg.id = 'AboutMeTitleClipImg';
  AboutMeBox.appendChild(AboutMeTitleClipImg);

  SetEffectHover(AboutMeTitleClipImg.id);
}

InformationAboutMeNum = 0;

function AddInformationByAboutMe(
  DataMain = undefined,
  DataDes = undefined,
  ImgURL = undefined
) {
  let AboutMeContentBox = document.getElementById('AboutMeCententBox');

  let InformationBox = document.createElement('div');
  InformationBox.id = 'InformationBox_' + InformationAboutMeNum;

  let InformationImage = document.createElement('div');
  InformationImage.id = 'InformationImage_' + InformationAboutMeNum;
  if (ImgURL != undefined) {
    InformationImage.style.backgroundImage = `url('${ImgURL}')`;
  }

  let InforamtionMainData = document.createElement('div');
  InforamtionMainData.id = 'InforamtionMainData_' + InformationAboutMeNum;
  if (DataMain != undefined) {
    InforamtionMainData.textContent = DataMain;
    InforamtionMainData.innerHTML = InforamtionMainData.textContent.replace(
      /\n/g,
      '<br>'
    );
  }

  let InformationDesData = document.createElement('div');
  InformationDesData.id = 'InformationDesData_' + InformationAboutMeNum;
  if (DataDes != undefined) {
    InformationDesData.textContent = DataDes;
    InformationDesData.innerHTML = InformationDesData.textContent.replace(
      /\n/g,
      '<br>'
    );
  }

  AboutMeContentBox.appendChild(InformationBox);

  InformationBox.appendChild(InformationImage);
  InformationBox.appendChild(InforamtionMainData);
  InformationBox.appendChild(InformationDesData);

  InformationAboutMeNum++;
}
