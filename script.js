//your JS code here. If required.
//your JS code here. If required.
// Get the container element
const container = document.querySelector('.container');

// Generate 800 boxes with the class square and data-color attribute set to white
for (let i = 0; i < 800; i++) {
  const square = document.createElement('div');
  square.classList.add('square');
  square.dataset.color = 'white';
  container.appendChild(square);

  // Add event listeners for hover
  square.addEventListener('mouseover', () => {
    square.style.backgroundColor = 'blue';
  });

  square.addEventListener('mouseleave', () => {
    setTimeout(() => {
      square.style.backgroundColor = square.dataset.color;
    }, 1000);
  });
}
