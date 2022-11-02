let inputTextArea = document.querySelector("#txtarea");
let charsCount = document.getElementById("chars");
let wordsCount = document.getElementById("words");

inputTextArea.addEventListener("input", ()=>{
    charsCount.innerHTML = inputTextArea.value.length;
    wordsCount.innerHTML = inputTextArea.value.trim().split(" ").length;
});