
function calcular() {
  const ladoBase = parseFloat(document.getElementById('base').value);
  const altura = parseFloat(document.getElementById('altura').value);
  

  const apo_tema = (ladoBase / 2) * Math.sqrt(3);
  

  const alturaTriangulo = Math.sqrt(Math.pow(altura, 2) + Math.pow(apo_tema, 2));
  

  const areaTriangulo = (ladoBase * alturaTriangulo) / 2;
  

  const numeroArestasLaterais = 6; 
  const areaLateral = numeroArestasLaterais * areaTriangulo;
  

  const areaBase = (3 * Math.sqrt(3) / 2) * Math.pow(ladoBase, 2);
  

  const areaSuperficie = areaBase + areaLateral;
  const volume = (areaBase * altura) / 3;

  document.getElementById('areaBase').textContent = areaBase.toFixed(2);
  document.getElementById('areaLateral').textContent = areaLateral.toFixed(2);
  document.getElementById('areaSuperficie').textContent = areaSuperficie.toFixed(2);
  document.getElementById('volume').textContent = volume.toFixed(2);
  
}