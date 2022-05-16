function openNav() {
    document.getElementById("mySidenav").style.width = "14.8%";
    
    document.getElementById("Open").style.display ='none' ;
    document.getElementById("Close").style.display = 'block';
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("Open").style.display ='block' ;
    document.getElementById("Close").style.display = 'none';
  }