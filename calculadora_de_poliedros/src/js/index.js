const edgeLengthInput = document.getElementById("edge-length");
const heightInput = document.getElementById("height");
const resultDiv = document.getElementById("result");
const calculateVolume = () => {
  const edgeLength = parseFloat(edgeLengthInput.value);
  const height = parseFloat(heightInput.value);
  const volume = (edgeLength ** 2) * height / 3;
  resultDiv.innerHTML = `O volume do poliedro: ${volume.toFixed(2)}`;
};
edgeLengthInput.addEventListener("input", calculateVolume);
heightInput.addEventListener("input", calculateVolume); 

// const areaBase = 3 * Math.pow(ladoBase, 2) * Math.sqrt(3);
//     const areaSuperficie = areaBase + 3 * ladoBase * altura;
//     const volume = (areaBase * altura) / 3;