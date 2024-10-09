const menuIcon = document.getElementById("menuIcon");
const listContainer = document.getElementById("listContainer");

menuIcon.addEventListener('click', () => {
    if (listContainer.style.display === 'none'){
        listContainer.style.display = 'flex';
    } else {
        listContainer.style.display = 'none'
    }
    
})