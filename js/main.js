document.addEventListener('DOMContentLoaded', () => {
    var btnDropdownHeader = document.querySelector('.dropdown-header');
    var btnDropdownHeaderhidden = document.querySelector('.dropdown-header-hidden');
 
    document.addEventListener('click', (event) => {
         // Kiểm tra nếu phần tử được click là dropdown-header hoặc là phần tử con của dropdown-header
         if(event.target.closest('.dropdown-header')) {
             btnDropdownHeaderhidden.classList.add('show');
         } else if(!event.target.closest('.dropdown-header') && !event.target.closest('.dropdown-header-hidden')) {
             btnDropdownHeaderhidden.classList.remove('show');
         }
    });
 });