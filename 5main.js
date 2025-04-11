const showHideBtn = document.querySelector('.show-hide');
const commentWrapper = document.querySelector('.comment-wrapper');

commentWrapper.style.display = 'none';

showHideBtn.addEventListener('click', () => {
const isHidden = commentWrapper.hasAttribute('hidden');
    commentWrapper.toggleAttribute('hidden');
    showHideBtn.textContent = isHidden ? 'Hide comments' : 'Show comments';
    showHideBtn.setAttribute('aria-expanded', isHidden)

  });

// functionality for adding a new comment via the comments form

const form = document.querySelector('.comment-form');
const nameField = document.querySelector('#name');
const commentField = document.querySelector('#comment');
const list = document.querySelector('.comment-container');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const nameValue = nameField.value.trim();
  const commentValue = commentField.value.trim();

  if (!nameValue || !commentValue) {
    alert('Please fill in both name and comment.')
    return;

  }

  const listItem = document.createElement('li');
  const namePara = document.createElement('p');
  const commentPara = document.createElement('p');

  namePara.textContent = nameValue;
  commentPara.textContent = commentValue;

  list.appendChild(listItem);
  listItem.appendChild(namePara);
  listItem.appendChild(commentPara);

  nameField.value = '';
  commentField.value = '';
  nameField.focus();
});