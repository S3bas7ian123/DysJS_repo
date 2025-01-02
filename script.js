// Head: (function declaration)
function headComponents() {
    const head = document.querySelector('header');
    const fTitle = document.createElement('h1');

    fTitle.innerHTML = "DysJS";
    fTitle.classList.add('h1');
    head.append(fTitle);    
    head.classList.add('header');
};

// Section: (function expression)
const sectComp = () => {
    const sect = document.querySelector('section');
    const contDivSect = document.createElement('div');

    contDivSect.innerHTML = `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>`
    sect.append(contDivSect);
    sect.classList.add('section');

    console.log(sect, contDivSect);   
};

headComponents();
sectComp();



