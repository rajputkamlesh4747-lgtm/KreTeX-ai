<script src="https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js"></script>

<script>
emailjs.init({
  publicKey: "zPNWGhk1FPV5MM7ct"
});

document.getElementById("contact-form").addEventListener("submit", function(e) {
  e.preventDefault();

  emailjs.sendForm(
    "service_p8rclr9",
    "template_m8kqzy6",
    this
  ).then(
    function() {
      alert("Message sent successfully!");
      document.getElementById("contact-form").reset();
    },
    function(error) {
      alert("Failed to send message. Please try again.");
      console.log(error);
    }
  );
});
</script>
console.log("KreTeX AI Loaded");
