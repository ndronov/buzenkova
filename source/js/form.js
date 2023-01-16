window.addEventListener("load", function() {
    const form = document.querySelector(".calculation-form");
    const buttonForm = form.querySelector(".calculation-form__btn");
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      buttonForm.disabled = true;
      const data = new FormData(form);
      const action = "https://script.google.com/macros/s/AKfycbx188djSh3IbCuS8O2-UWPDydbv5LGzK37cco8-XudEOpRdgzjKnqCUKjB8RAn_po80XQ/exec";
      fetch(action, {
        method: "POST",
        body: data,
      })
      .then(() => {
        form.reset();
        buttonForm.disabled = false;
      })
    });
  });