onload = () => {
    setTimeout(() => {
      document.body.classList.remove("not-loaded");
      document.body.classList.add("loaded");
    }, 1000);
};
