
// var h1El = document.getElementById('hello')

// console.log(h1El);
// console.log(h1El.id);
// console.log(h1El.title);
// console.log(h1El.style);
// console.log(h1El.innerHTML);




// var wholeDocument = document.childNodes;
// console.log(wholeDocument);
// var firstChildDom = wholeDocument[1]
// console.log(firstChildDom);
// var htmlChilds = firstChildDom.childNodes
// console.log(htmlChilds);
// var bodyChildDom = htmlChilds[2];
// console.log(bodyChildDom);
// var bodyChildNode =bodyChildDom.childNodes;
// console.log(bodyChildNode);
// var h1Dom = bodyChildNode[1];
// console.log(h1Dom);
// h1Dom.innerHTML = 'Hello JavaScript';































// runs after a specific time 
// keep on running after specific time

// var num = 10;
// var divEl = document.childNodes[1].childNodes[2].childNodes[3];
// function printNumber() {
//     if (num > 0) {
//         num = num - 1;
//         divEl.innerHTML = num;
//     }
//     else {
//         clearInterval(updateDOMInterval);
//     }
//     console.log('hello');
// }
// // setTimeout(printNumber, 5000);
// var updateDOMInterval = setInterval(printNumber, 500);






// Chapter 61 Code

/*
Summary
-------
Junc Arti.
No Line Break
Minify
.nodeType
*/


// var allDocumentChild = document.childNodes[1].childNodes[1];
// console.log(allDocumentChild);













// var targettedNode = document.childNodes[1].childNodes[2];
// console.log(targettedNode);
// console.log(targettedNode.nodeType);









// var d = document.getElementById("humpty");
// console.log(d.childNodes);
// var pCounter = 0;
// for (var i = 0; i < d.childNodes.length; i++) {
//     if (d.childNodes[i].nodeType === 1) {
//         pCounter++;
//     }
//     if (pCounter === 2) {
//         d.childNodes[i].innerHTML = "All his men.";
//         break;
//     }
// }















// Chapter 62 Code
/*
Summary
-------
.parentNode
.firstChild
.lastChild
.nextSibling
.previousSibling
*/



// var humtyEl = document.getElementById('humpty');
// console.log(humtyEl.childNodes)
// var humtyFirstChildEl = humtyEl.firstChild;
// var humtyLastChild = humtyEl.lastChild;

// humtyFirstChildEl.style.color = 'red';
// humtyLastChild.style.color = 'green';











// var humtyEl = document.getElementById('humpty');
// console.log(humtyEl.childNodes)
// var humtyFirstChildEl = humtyEl.firstChild.nextSibling;
// var humtyLastChild = humtyEl.lastChild.previousSibling;

// humtyFirstChildEl.style.color = 'red';
// humtyLastChild.style.color = 'green';

// console.log(humtyFirstChildEl)

// var humtyThirdLastChild = humtyEl.lastChild.previousSibling.previousSibling.previousSibling.previousSibling.previousSibling;
// humtyThirdLastChild.style.color = 'blue';

// console.log(humtyEl.parentNode)
// var parentEl = humtyEl.parentNode;
// parentEl.innerHTML = '<em>Data Loss</em>'










// Chapter 63 and 64 Code
/*
Summary
-------
.nodeType
.nodeName
.nodeValue
*/


// var humtyEl = document.getElementById('humpty');
// console.log(humtyEl.childNodes);
// console.log(humtyEl.childNodes[3]);
// console.log(humtyEl.nodeName);
// var nodeNameHumtyEl = humtyEl.nodeName;
// var nodeNameHumtyElValue = humtyEl.childNodes[0].nodeValue;
// console.log(nodeNameHumtyElValue,'*');
// if (nodeNameHumtyEl.toLowerCase() === 'div') {
//     console.log('Div Found');
// }

// var liElements = document.getElementsByTagName("li");
// var howManyLi = liElements.length;

// for (var i = 0; i < howManyLi; i++) {
//     if (liElements[i].innerHTML === "") {
//         liElements[i].innerHTML = "coming soon";
//     }
// }







// var ulEl = document.getElementById("list-container");
// var nodeList = ulEl.childNodes;
// var howManyKids = nodeList.length;

// for (var i = 0; i < howManyKids; i++) {
//     if (nodeList[i].nodeName.toLowerCase() === "li"
//         && nodeList[i].innerHTML === '') {
//         nodeList[i].innerHTML = "coming soon";
//     }
// }



// Chapter 65 Code
/*
Summary
-------
To check if an attribute exist or not.
.hasAttribute('class')
returns boolean;


To check the value of attribute.
.getAttribute('class')
returns Value of Attribute;


To assign an attribute with value.
.setAttribute('title','world')
returns undefined
*/


// var h1El = document.getElementById('hello');
// console.log(h1El.hasAttribute('id'));
// console.log(h1El.hasAttribute('class'));
// console.log(h1El.hasAttribute('href'));
// console.log(h1El.hasAttribute('src'));
// console.log(h1El.hasAttribute('title'));


// var h1El = document.getElementById('hello');
// console.log(h1El.getAttribute('title'));
// console.log(h1El.getAttribute('id'));
// console.log(h1El.getAttribute('class'));


// var h1El = document.getElementById('hello');
// h1El.setAttribute('id','world')
// console.log(h1El.getAttribute('id'))





// var nodeToAdd = document.createElement("p");
// console.log(nodeToAdd)
// var newTxt = document.createTextNode("Hello!");
// nodeToAdd.appendChild(newTxt);



var parentDiv = document.getElementById("div1");
var newParagraph = document.createElement("p");
var t = document.createTextNode("Hello world!");
 newParagraph.appendChild(t);
 parentDiv.appendChild(newParagraph);

