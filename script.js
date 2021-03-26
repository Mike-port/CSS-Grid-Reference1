const select = document.querySelector('select');
const para = document.querySelector('p');

select.addEventListener('change', setFavoriteFood);

function setFavoriteFood() {
  const choice = select.value;

  switch (choice) {
    case 'pickles':
      para.textContent = 'Pickles are made from drowned cucumbers. You monster.';
      break;
    case 'natto':
      para.textContent = 'Natto is one of the 7 healthy sins.';
      break;
    case 'cheese':
      para.textContent = 'Cheese is stinky like Britfeet';
      break;
    case 'chocolate':
      para.textContent = 'With coffee, yum.';   
      break;
      default:
        para.textContent = ''; 
  }
}