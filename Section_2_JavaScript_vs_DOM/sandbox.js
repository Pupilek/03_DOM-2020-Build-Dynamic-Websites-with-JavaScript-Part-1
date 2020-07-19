
function newWindow(){
  let url = 'https://dictionary.com/browse/shivoo?s=t'
  let newWindow = window.open(url,"", "width = 500, height = 800");
  //close this new window after 5 seconds
  setTimeout(() =>{
    newWindow.close();
  }, 5000);
}