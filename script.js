const cups = document.querySelectorAll('.cup-small');
const percentage = document.getElementById('percentage');
const liters = document.getElementById('liters');
const waterLeft = document.getElementById('water-left');

updateBigCup();

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

  updateBigCup();
};

function updateBigCup() {
  const fullCups = document.querySelectorAll('.cup-small.full').length;

  const totalCups = cups.length;
  
  if(fullCups === 0) {
    percentage.style.visibility = 'hidden';
    percentage.style.height = 0;
  } else {
    percentage.style.visibility = 'visible';
    percentage.style.height = `${fullCups / totalCups * 330}px`;
    percentage.innerText = `${fullCups / totalCups * 100}%`
  }

  if(fullCups === totalCups){
    waterLeft.style.visibility = 'hidden';
    waterLeft.style.height = 0;
  } else {
    waterLeft.style.visibility = 'visible';
    liters.innerText = `${2 - (250 * fullCups / 1000)}L`
  }
}
