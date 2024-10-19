const textInput = document.getElementById('textInput');
const fileInput = document.getElementById('fileInput');
const imageInput = document.getElementById('imageInput');
const speechifyButton = document.getElementById('speechifyButton');

const output = document.getElementById('output');

const synth = window.speechSynthesis;
let voices = [];

function loadVoices() {
  voices = synth.getVoices();
  if (voices.length === 0) {
    setTimeout(loadVoices, 100);
  }
}

loadVoices();

function speak(text) {
  if (!synth.speaking) { // Check if speech synthesis is not already in progress
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.voice = voices[0]; // You can set the voice here based on user preference
    utterance.rate = 1.0; // Adjust the speaking rate as needed
    utterance.pitch = 1.0; // Adjust the pitch as needed

    synth.speak(utterance);
  }
}

function handleTextUpload() {
  const textToSpeak = textInput.value;
  if (textToSpeak) {
    speak(textToSpeak);
  }
}

function handleFileUpload(file) {
  const reader = new FileReader();
  reader.onload = (event) => {
    const fileText = event.target.result;
    speak(fileText);
  };
  reader.readAsText(file);
}

function handleImageUpload(file) {
  const reader = new FileReader();
  reader.onload = (event) => {
    const imageData = event.target.result;
    // Use an OCR library to extract text from the image
    // Replace 'yourOCRlibrary' with the actual OCR library you're using
    yourOCRlibrary.extractTextFromImage(imageData).then((text) => {
      speak(text);
    }).catch((error) => {
      console.error('Error extracting text from image:', error);
    });
  };
  reader.readAsDataURL(file);
}

textInput.addEventListener('input', handleTextUpload);
fileInput.addEventListener('change', (event) => handleFileUpload(event.target.files[0]));
imageInput.addEventListener('change', (event) => handleImageUpload(event.target.files[0]));
speechifyButton.addEventListener('click', handleTextUpload);
