const FILE_TYPES = ['gif', 'jpg', 'jpeg', 'png'];
const DEFAULT_AVATAR = 'img/muffin-grey.svg';

const filesTypeValidateHandler = (item, container) => {
  const fileName = item.name.toLowerCase();

  const matches = FILE_TYPES.some((it) => fileName.endsWith(it));

  if (matches) {
    container.querySelector('img').src = URL.createObjectURL(item);
  }};

const avatarChooser = document.querySelector('.ad-form__field input[type=file]');
const avatarPreview = document.querySelector('.ad-form-header__preview');


avatarChooser.addEventListener('change', () => {
  const file = avatarChooser.files[0];
  filesTypeValidateHandler(file, avatarPreview);
});

const photoChooser = document.querySelector('.ad-form__upload input[type=file]');
const photoPreview = document.querySelector('.ad-form__photo');

photoChooser.addEventListener('change', () => {
  const file = photoChooser.files[0];
  const imageFragment = document.createDocumentFragment();
  const image = document.createElement('img');
  image.width = '70';
  image.height = '70';
  photoPreview.append(image);
  photoPreview.append(imageFragment);

  filesTypeValidateHandler(file, photoPreview);
});

const resetPreview = () => {
  photoPreview.innerHTML = '';
  avatarPreview.querySelector('img').src = DEFAULT_AVATAR;
};
photoPreview.innerHTML = '';

export { resetPreview };
