const forms = document.getElementsByClassName("needs-validation");

Array.from(forms).forEach((form) => {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    e.stopPropagation();
    form.classList.add("was-validated");
  });
});

const mainForm = document.getElementById("mainForm");
const mainFormModal = document.getElementById("mainFormModal");

mainForm.addEventListener("submit", (e) => {
  if (mainForm.checkValidity()) {
    const modal = new bootstrap.Modal(mainFormModal);
    return modal.show();
  }
});