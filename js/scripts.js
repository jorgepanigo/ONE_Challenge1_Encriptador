const textoOriginal = document.querySelector(".txt_original");
const textoDeSalida = document.querySelector(".txt_procesado");
const sinInfo = document.querySelector(".sin_info");
const conInfo = document.querySelector(".con_info");
const llaves = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];

function btn_encriptar(){
     textoDeSalida.value = encriptar(textoOriginal.value.toLowerCase());
}

function btn_desencriptar(){
    
     textoDeSalida.value = desencriptar(textoOriginal.value.toLowerCase());
}

function btn_copiar(){

     textoDeSalida.select();
     navigator.clipboard.writeText(textoDeSalida.value);

}
     
     

function encriptar(entrada){
     for (let i = 0; i < llaves.length; i++) {
        if (entrada.includes(llaves[i][0])){
             entrada = entrada.replaceAll(llaves[i][0],llaves[i][1]);
        }   
     }
     mostrarInfo();
      return entrada;
}
    
     



function desencriptar(entrada){
     
     for (let i = 0; i < llaves.length; i++) {
          if (entrada.includes(llaves[i][1])){
               entrada = entrada.replaceAll(llaves[i][1],llaves[i][0]);
          }   
       } 
     mostrarInfo();
     return entrada;
     
}

function mostrarInfo(){
     sinInfo.classList.add("hidden");
     conInfo.classList.remove("hidden");
}