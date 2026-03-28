import { CONFIG } from "./config.js";
import { getCurrentLang } from "./translate.js";
import { playSound } from "./effects.js";

export function initEmailForm() {
  if (typeof emailjs === "undefined") return;
  
  emailjs.init(CONFIG.EMAILJS_USER_ID);

  const contactForm = document.getElementById("contactForm");
  const formStatus = document.getElementById("formStatus");

  if (!contactForm) return;

  contactForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const btn = contactForm.querySelector(".btn");
    const btnText = btn.querySelector("span:first-child");
    const btnLoading = btn.querySelector(".btn__loading");

    btn.disabled = true;
    btnText.style.display = "none";
    btnLoading.style.display = "inline";

    try {
      const formData = new FormData(contactForm);
      const templateParams = {
        from_name: formData.get("name"),
        from_email: formData.get("email"),
        subject: formData.get("subject"),
        message: formData.get("message")
      };

      const response = await emailjs.send(
        CONFIG.EMAILJS_SERVICE_ID,
        CONFIG.EMAILJS_TEMPLATE_ID,
        templateParams
      );
      
      if (response.status === 200) {
        formStatus.textContent = getCurrentLang() === "pt" 
          ? "Mensagem enviada com sucesso!" 
          : "Message sent successfully!";
        formStatus.className = "form__status success";
        contactForm.reset();
        if (window.launchConfetti) window.launchConfetti();
        playSound("success");
      } else {
        throw new Error("Email sending failed");
      }

    } catch (error) {
      formStatus.textContent = getCurrentLang() === "pt" 
        ? "Erro ao enviar mensagem. Tente novamente." 
        : "Error sending message. Try again.";
      formStatus.className = "form__status error";
      console.error("Email error:", error);
    } finally {
      btn.disabled = false;
      btnText.style.display = "inline";
      btnLoading.style.display = "none";

      setTimeout(() => {
        formStatus.textContent = "";
        formStatus.className = "form__status";
      }, 5000);
    }
  });
}
