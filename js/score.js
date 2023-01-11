

function getBelowElements(el) {
  const sourceBounding = el.getBoundingClientRect();
  let belowElements = [];

  for (const currentElement of document.documentElement) {
      const targetBounding = currentElement.getBoundingClientRect();

      // Se todas as condições forem falsas, é porque está tendo uma sobreposição
      if (!(sourceBounding.right < targetBounding.left ||
          sourceBounding.left > targetBounding.right ||
          sourceBounding.bottom < targetBounding.top ||
          sourceBounding.top > targetBounding.bottom)) {
          belowElements = [...belowElements, currentElement]; // Adiciona o elemento atual ao array de elementos sobrepostos
      }
  }

  return belowElements; // Retorna o array de elementos sobrepostos
}

console.log(getBelowElements(document.getElementsByClassName("hitbox")[0]));
