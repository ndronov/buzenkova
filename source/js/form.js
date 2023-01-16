window.addEventListener("load", function() {
    const form = document.querySelector(".calculation-form");
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      form.reset();
    //   const data = new FormData(form);
    //   const action = e.target.action;
    //   fetch(action, {
    //     method: "POST",
    //     body: data,
    //   })
    //   .then(() => {
    //     alert("Success!");
    //   })
    });
  });