const container = document.getElementById('container');
const btn = document.getElementById('btn');

createGrid(16); // Default grid size

btn.addEventListener("click", () => {
  let num = parseInt(prompt("Enter the number of squares per side (e.g., 16):"));
  if (!isNaN(num) && num > 0) {
    createGrid(num);
  } else {
    alert("Please enter a valid positive number.");
  }
});

function createGrid(num) {
  container.innerHTML = ""; // Clear previous grid

  for (let i = 0; i < num; i++) {
    const row = document.createElement('div');
    row.className = 'row';

    for (let j = 0; j < num; j++) {
      const square = document.createElement('div');
      square.className = 'square';
      row.appendChild(square);
    }

    container.appendChild(row);
  }
}
