document.body.style.background = 'url(./image/you-dont-know-js.jpg) center no-repeat';


let adv = document.querySelector('.adv'),
		books = document.querySelector('.books'),
		book = document.getElementsByClassName('book'),
		changeName = document.getElementsByTagName("h2")[4];
		ulSecond = document.getElementsByTagName("ul")[0];
		liSecond = document.getElementsByTagName("ul")[0].getElementsByTagName("li");
		ulFifth = document.getElementsByTagName("ul")[5];
		liFifth = document.getElementsByTagName("ul")[5].getElementsByTagName("li");
		ulSixth = document.getElementsByTagName("ul")[2];
		liSixth = document.getElementsByTagName("ul")[2].getElementsByTagName("li");
		newLi = document.createElement("li");


adv.remove();
books.insertBefore(book[0], book[2]);
books.insertBefore(book[4], book[2]);
books.insertBefore(book[3], book[6]);
changeName.innerHTML = "Книга 3. this и Прототипы Объектов";
ulSecond.insertBefore(liSecond[6], liSecond[4]);
ulSecond.insertBefore(liSecond[8], liSecond[5]);
ulFifth.insertBefore(liFifth[9], liFifth[2]);
ulFifth.insertBefore(liFifth[5], liFifth[3]);
ulFifth.insertBefore(liFifth[5], liFifth[3]);
ulFifth.insertBefore(liFifth[6], liFifth[9]);
newLi.textContent = "Глава 8: За пределами ES6";
ulSixth.appendChild(newLi);
ulSixth.insertBefore(liSixth[10], liSixth[9]);

//console.log(liSixth);

