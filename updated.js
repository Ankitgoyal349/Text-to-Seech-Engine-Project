const textInput = document.getElementById('textInput');
const fileInput = document.getElementById('fileInput');
const imageInput = document.getElementById('imageInput');
const speechifyButton = document.getElementById('speechifyButton');
const stopButton = document.getElementById('stopButton');
const downloadButton = document.getElementById('downloadButton');
const output = document.getElementById('output');

const synth = window.speechSynthesis;
let voices = [];
let isSpeaking = false;
let currentUtterance = null;

// Load voices when available
function loadVoices() {
    voices = synth.getVoices();
    if (voices.length === 0) {
        synth.addEventListener('voiceschanged', () => {
            voices = synth.getVoices();
            console.log('Voices loaded:', voices);
        });
    } else {
        console.log('Voices loaded:', voices);
    }
}

loadVoices();

// Function to handle speaking
function speak(text) {
    if (text.trim() === '') {
        console.log('No text to speak');
        return;
    }

    if (!isSpeaking) {
        // Create a new SpeechSynthesisUtterance instance
        currentUtterance = new SpeechSynthesisUtterance(text);
        currentUtterance.voice = voices.length > 0 ? voices[0] : null;

        if (!currentUtterance.voice) {
            console.error('No voice available for speech synthesis.');
            return;
        }

        currentUtterance.rate = 1.0;
        currentUtterance.pitch = 1.0;

        // Create an audio context and media recorder to capture the speech
        const audioContext = new AudioContext();
        const destination = audioContext.createMediaStreamDestination();
        const mediaRecorder = new MediaRecorder(destination.stream);

        const audioChunks = [];
        mediaRecorder.ondataavailable = (event) => audioChunks.push(event.data);

        mediaRecorder.onstop = () => {
            const audioBlob = new Blob(audioChunks, { type: 'audio/mp3' });
            const audioUrl = URL.createObjectURL(audioBlob);
            downloadButton.href = audioUrl;
            downloadButton.download = 'speech.mp3';
            downloadButton.style.display = 'block'; // Show download button
            console.log('Audio ready for download');
        };

        synth.speak(currentUtterance);
        mediaRecorder.start();

        currentUtterance.onend = () => {
            isSpeaking = false;
            currentUtterance = null;
            mediaRecorder.stop(); // Stop recording after speech synthesis ends
        };

        currentUtterance.onerror = (event) => {
            console.error('Error during speech synthesis:', event);
            isSpeaking = false;
            currentUtterance = null;
            mediaRecorder.stop();
        };

        isSpeaking = true; // Set speaking state
    } else {
        console.log('Speech is already in progress');
    }
}

// Event listener for "Speechify" button
speechifyButton.addEventListener('click', () => {
    if (!isSpeaking) {
        const textToSpeak = textInput.value;
        if (textToSpeak) {
            speak(textToSpeak);
        } else {
            alert('Please enter some text.');
        }
    } else {
        console.log('Speech is currently in progress. Please stop it before speaking again.');
    }
});

// Stop the speech when stop button is clicked
stopButton.addEventListener('click', () => {
    if (synth.speaking) {
        synth.cancel(); // Stops the speech immediately
        isSpeaking = false; // Reset speaking state after stopping
        currentUtterance = null; // Clear the current utterance
        console.log('Speech stopped');
    } else {
        console.log('No speech to stop.');
    }
});

// Restore text input from localStorage on page load
window.addEventListener('load', () => {
    const savedText = localStorage.getItem('lastTextInput');
    if (savedText) {
        textInput.value = savedText;
        console.log('Restored saved text from localStorage:', savedText);
    }
});
