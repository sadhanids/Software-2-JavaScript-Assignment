const targetElement = document.getElementById('target');

if (targetElement) {
  targetElement.innerHTML = `<li>First item</li> <li>Second item</li> <li>Third item</li>`
  targetElement.classList.add('my-list');
}
