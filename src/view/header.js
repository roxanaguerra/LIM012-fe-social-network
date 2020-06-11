export default () => {
  const header = `
<!-- Top Navigation Menu -->
    <a href="#home" class="active"><h1>DL</h1></a>
    <div id="nav-links">
    <a href="#/home">Home</a>
    <a href="#/profile">Profile</a>
    <a href="#/">Log out</a>
    </div>
    <a href="javascript:void(0);" class="icon" id="navbar-mobile">
        <img class="menu-bars" src="assets/nav-menu.png" alt="">
    </a>
`;

  const divHeader = document.createElement('div');
  divHeader.className('topnav');
  divHeader.innerHTML = header;
  //   const divHeader = document.querySelector('#top-nav');
  //   divHeader.innerHTML = header;
  const navbMobile = divHeader.querySelector('#navbar-mobile');
  navbMobile.addEventListener('click', () => {
    const navLinks = divHeader.querySelector('#nav-links');
    if (navLinks.style.display === 'block') {
      navLinks.style.display = 'none';
    } else {
      navLinks.style.display = 'block';
    }
  });
  return divHeader;
};
