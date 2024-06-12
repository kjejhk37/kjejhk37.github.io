function CreateArciving() {
  let ArchivingBox = document.createElement('nav');
  ArchivingBox.id = 'ArchivingBox';
  document.body.appendChild(ArchivingBox);

  let ArcivingTitle = document.createElement('div');
  ArcivingTitle.id = 'ArcivingTitle';
  ArcivingTitle.textContent = 'Archiving';

  ArchivingBox.appendChild(ArcivingTitle);

  let ArcivingTitleUnderline = document.createElement('div');
  ArcivingTitleUnderline.id = 'ArcivingTitleUnderline';
  ArchivingBox.appendChild(ArcivingTitleUnderline);

  let ArchivingTitleClipImg = document.createElement('div');
  ArchivingTitleClipImg.id = 'ArchivingTitleClipImg';
  ArchivingBox.appendChild(ArchivingTitleClipImg);

  SetEffectHover(ArchivingTitleClipImg.id);
}

ArchivingPageNum = 0;

function AddArchivingData(
  mainId = undefined,
  MainContent = undefined,
  SubContent = undefined,
  hrefLink = undefined
) {
  if (mainId == undefined) return;
  let MainDiv = document.getElementById(mainId);
  if (!MainDiv) return;

  let ImgDiv = document.createElement('div');
  ImgDiv.id = 'ArchvingImg_' + ArchivingPageNum;

  let hrefLinkDiv = document.createElement('div');
  hrefLinkDiv.id = 'hrefLinkDiv_' + ArchivingPageNum;

  hrefLinkDiv.addEventListener('mouseenter', () => {
    hrefLinkDiv.style.cursor = 'pointer';
  });

  hrefLinkDiv.addEventListener('mouseleave', () => {
    hrefLinkDiv.style.cursor = 'default';
  });

  if (hrefLink != undefined) {
    hrefLinkDiv.addEventListener('click', () => {
      window.location.href = hrefLink;
    });
  }

  let MainDescriteDiv = document.createElement('div');
  MainDescriteDiv.id = 'MainDescriteDiv_' + ArchivingPageNum;

  if (MainContent != undefined) {
    MainDescriteDiv.textContent = MainContent;
    MainDescriteDiv.innerHTML = MainDescriteDiv.textContent.replace(
      /\n/g,
      '<br>'
    );
  }

  let SubDescriteDiv = document.createElement('div');
  SubDescriteDiv.id = 'SubDescriteDiv_' + ArchivingPageNum;

  if (SubContent != undefined) {
    SubDescriteDiv.textContent = SubContent;
    SubDescriteDiv.innerHTML = SubDescriteDiv.textContent.replace(
      /\n/g,
      '<br>'
    );
  }

  MainDiv.appendChild(ImgDiv);
  MainDiv.appendChild(MainDescriteDiv);
  MainDiv.appendChild(SubDescriteDiv);
  MainDiv.appendChild(hrefLinkDiv);

  ArchivingPageNum++;
}
