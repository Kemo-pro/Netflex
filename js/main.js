const tabItems = document.querySelectorAll('.tab-item');
const tabContentItems = document.querySelectorAll('.tab-content-item');

function removeBorder() {
tabItems.forEach(i => i.classList.remove('tab-border'))
} 

function removeShow() {
tabContentItems.forEach(c => c.classList.remove('show'))
}

// Select tab content
function selectItem(e){
removeShow()
removeBorder()
this.classList.add('tab-border')
const tabContentItem = document.querySelector(`#${this.id}-content`)
tabContentItem.classList.add('show')
}



// Listenter
tabItems.forEach(item => item.addEventListener('click',selectItem))
