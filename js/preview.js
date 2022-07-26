const FILE_TYPES = ['gif', 'jpg', 'jpeg', 'png'];

const filesTypeValidateHandler = (item, container) => {
  const fileName = item.name.toLowerCase();

  const matches = FILE_TYPES.some((it) => fileName.endsWith(it));

  if (matches) {
    container.src = URL.createObjectURL(item);
  }};

const avatarChooser = document.querySelector('.ad-form__field input[type=file]');
const avatarPreview = document.querySelector('.ad-form-header__preview img');

avatarChooser.addEventListener('change', () => {
  const file = avatarChooser.files[0];
  filesTypeValidateHandler(file, avatarPreview);
});

// const photoChooser = document.querySelector('.ad-form__upload input[type=file]');
// const photoPreview = document.querySelector('.ad-form__photo img');

// photoChooser.addEventListener('change', () => {
//   const file = photoChooser.files[0];
//   filesTypeValidateHandler(file, photoPreview);
//   avatarPreview.remove();
// });


