const cups = document.querySelectorAll('.cup-small');
const percentage = document.getElementById('percentage');
const liters = document.getElementById('liters');
const waterLeft = document.getElementById('water-left');

cups.forEach((cup, index) => {
  cup.addEventListener('click', () => selectCups(index))
});

const selectCups = (index) => {
  if(cups[index].classList.contains('full') && !cups[index].nextElementSibling.classList.contains('full')) {
    index--
  }

  cups.forEach((cup, index2) => {
    if(index2 <= index) {
      cup.classList.add('full')
    } else {
      cup.classList.remove('full')
    };
  });
};
