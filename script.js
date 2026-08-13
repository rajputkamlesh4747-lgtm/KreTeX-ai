console.log("KreTeX AI Loaded");

emailjs.init({
  publicKey: "zPNWGhk1FPV5MM7ct"
});

const form = document.getElementById("contact-form");

if (form) {
  form.addEventListener("submit", function(e) {
    e.preventDefault();

    emailjs.sendForm(
      "service_p8rclr9",
      "template_m8kqzy6",
      this
    ).then(function() {
      alert("Message sent successfully!");
      form.reset();
    }).catch(function(error) {
      alert("Failed to send message. Please try again.");
      console.log(error);
    });
  });
}
