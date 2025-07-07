  let sidebar=document.querySelector('.sidebar');
  function showsidebar(){
    sidebar.classList.toggle('active');
  }
  function hidesidebar(){
    sidebar.classList.remove('active');
    sidebar.classList.add('hide');
  }