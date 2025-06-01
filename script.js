// Menampilkan komik saat tombol diklik
function showComic() {
    document.getElementById("comicSection").style.display = "block";
}

// Memeriksa jawaban kuis
function checkAnswer() {
    const answer = document.getElementById("question1").value.toLowerCase();
    const feedback = document.getElementById("quizFeedback");

    // Misalnya, jawaban benar jika "ginjal" dimasukkan
    if (answer === "ginjal") {
        feedback.textContent = "Jawaban Anda benar!";
        feedback.style.color = "green";
    } else {
        feedback.textContent = "Jawaban Anda salah. Coba lagi!";
        feedback.style.color = "red";
    }
}
