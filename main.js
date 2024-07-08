/* 1.1 Inserta dinamicamente en un html un div vacio con javascript.

1.2 Inserta dinamicamente en un html un div que contenga una p con javascript.

1.3 Inserta dinamicamente en un html un div que contenga 6 p utilizando un 
	loop con javascript.

1.4 Inserta dinamicamente con javascript en un html una p con el 
	texto 'Soy dinámico!'.

1.5 Inserta en el h2 con la clase .fn-insert-here el texto 'Wubba Lubba dub dub'.

1.6 Basandote en el siguiente array crea una lista ul > li con 
los textos del array.
const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];

1.7 Elimina todos los nodos que tengan la clase .fn-remove-me

1.8 Inserta una p con el texto 'Voy en medio!' entre los dos div. 
	Recuerda que no solo puedes insertar elementos con .appendChild.

1.9 Inserta p con el texto 'Voy dentro!', dentro de todos los div con la clase 
	.fn-insert-here
 */

const nuevoDiv = document.createElement('div')

const nuevoParrafo = document.createElement('p')
newParagraph.textContent = 'Creando un nuevo párrafo dentro de un div con js'

newDiv.appendChild(nuevoParrafo)

const insertHere = document.querySelector('.fn-insert-here')
insertHere.parentNode.insertBefore(nuevoDiv, insertHere)
