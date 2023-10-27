// Create an index.html and dompractice.js. Connect the js file.
// Inside the body of your element write the code below to create a bunch of divs using Emmett shortcut.
// For example, div#frenchfry
// There should be a parent div which 6 children and each children has 3 children :)
// The names of the divs should contain the following class names.
// parent > child > grandchild

// ===== JavaScript =====
// Change the title of your webpage to 'DOM Practice' using textContent and without assigning an id or a class name
document.querySelector('title').textContent = 'DOM Practice';

// Access the parent and apply the following properties to the parent.
// width 500px
// height of 450 px
// background color of red
document.querySelector('.parent').style.width = '500px';
document.querySelector('.parent').style.height = '450px';
document.querySelector('.parent').style.backgroundColor = 'red';


// Access the children of parent and apply the following properties to them
// Width 100%
// Height 50px
// Background color of blue
// Margins 30 px at top and bottom and 0 on left and right
// Text align of center
// Font color of #E0D635
document.querySelectorAll('.child').forEach((child) => {
    child.style.width = '100%';
});
document.querySelectorAll('.child').forEach((child) => {
    child.style.height = '50px';
});
document.querySelectorAll('.child').forEach((child) => {
    child.style.backgroundColor = 'blue';
});
document.querySelectorAll('.child').forEach((child) => {
    child.style.margin = '30px 0';
});
document.querySelectorAll('.child').forEach((child) => {
    child.style.textAlign = 'center';
});
document.querySelectorAll('.child').forEach((child) => {
    child.style.color = '#E0D635';
});

// Access the grandchildren give them the following properties
// width 100%
// height of 7px
// text that indicates index starting at 1
// margin top of 10px
document.querySelectorAll('.grandchild').forEach((grandchild) => {
    grandchild.style.width = '100%';
});
document.querySelectorAll('.grandchild').forEach((grandchild) => {
    grandchild.style.height = '7px';
});
document.querySelectorAll('.grandchild').forEach((grandchild, index) => {
    grandchild.textContent = `${index + 1}`
});
document.querySelectorAll('.grandchild').forEach((grandchild) => {
    grandchild.style.marginTop = '10px';
});

// Grandma's favorite
// Access the 14th grandchild and give them a font color of pink and italicize
// use array index to access the child and use 'children' to access the grandchild.
// Look at MDN DOM children property
// Assign a text color purple to the 14th grandchild
document.querySelectorAll('.grandchild')[13].style.color = 'pink';
document.querySelectorAll('.grandchild')[13].style.fontStyle = 'italic';
document.querySelectorAll('.grandchild')[13].style.color = 'purple';

// The JavaScript of Grandchildren
// Access the parent with the child named 9 and give the parent a position of relative
// Access the 9th child and assign it to a variable named blackSheep. Use the same method from above to access the child (children property)
// Give the following properties to blackSheep
// text color black
// font size 9rem
// text align right
// transform scale(-1, 1)
// position absolute
// top 30px
// left 500px
document.querySelectorAll('.grandchild')[8].parentElement.style.position = 'relative';
const blackSheep = document.querySelectorAll('.grandchild')[8];
blackSheep.style.color = 'black';
blackSheep.style.fontSize = '9rem';
blackSheep.style.textAlign = 'right';
blackSheep.style.transform = 'scale(-1, 1)';
blackSheep.style.position = 'absolute';
blackSheep.style.top = '30px';
blackSheep.style.left = '500px';