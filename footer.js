// Criar o elemento <link>
const link = document.createElement("link");

// Definir atributos do link
link.rel = "stylesheet";
link.href = "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css";
link.integrity = "sha384-TX8RTxylbFz3WAGtnkAj9AY+JtAbd5SiC6+M1dB2Zl1c6z/6sFVn5zHcKsP7rV2K";
link.crossOrigin = "anonymous";

// Adicionar ao <head> do documento
document.head.appendChild(link);
