function makeFriendsList(friends) {

  let elem = document.createElement('ul');
  
  for (let item of friends) {
  
    elem.innerHTML += ('<li>' +item.firstName + ' ' + item.lastName + '</li>');  
  
  }
  
  elem.innerHTML += '</ul>';
  return elem;
  
}
