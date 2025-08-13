// List of bands
const bands = [
  'The Plot in You', 
  'The Devil Wears Prada', 
  'Pierce the Veil', 
  'Norma Jean',
  'The Bled', 
  'Say Anything', 
  'The Midway State', 
  'We Came as Romans',
  'Counterparts', 
  'Oh, Sleeper', 
  'A Skylit Drive', 
  'Anywhere But Here', 
  'An Old Dog'
];

// Function to remove articles for sorting
function stripArticle(name) {
  return name.replace(/^(a |an |the )/i, '').trim();
}

// Sort the bands while ignoring articles
const sortedBands = bands.sort((a, b) => 
  stripArticle(a).localeCompare(stripArticle(b))
);

// Get the unordered list element
const bandList = document.getElementById('band');

// Clear any existing content
bandList.innerHTML = '';

// Add each band to the list
sortedBands.forEach(band => {
  const listItem = document.createElement('li');
  listItem.textContent = band;
  bandList.appendChild(listItem);
});