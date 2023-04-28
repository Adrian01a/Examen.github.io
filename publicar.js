
		function publicarComentario() {
			// Obtener los valores de los campos de texto
			var nombre = document.getElementById("nombre").value;
			var comentario = document.getElementById("comentario").value;
			
			// Crear un nuevo elemento de comentario
			var commentElement = document.createElement("div");
			commentElement.classList.add("comment");
			
			var authorElement = document.createElement("span");
			authorElement.classList.add("author");
			authorElement.textContent = nombre + ": ";
			commentElement.appendChild(authorElement);
			
			var contentElement = document.createElement("p");
			contentElement.textContent = comentario;
			commentElement.appendChild(contentElement);
			
			var timestampElement = document.createElement("span");
			timestampElement.classList.add("timestamp");
			timestampElement.textContent = (new Date()).toLocaleString();