function filterEffect(e, img) {
  if (e.target.classList.contains("filter-btn")) {
    //checks to see if clicked element has the filter-btn class.
    if (e.target.classList.contains("brightness-add")) {
      //then it checks to see if it has the brightness-add class.
      //If everything passes then following code provided by CamanJs is executed.
      Caman("#canvas", img, function() {
        this.brightness(5).render();
      });
    } else if (e.target.classList.contains("brightness-remove")) {
      Caman("#canvas", img, function() {
        this.brightness(-5).render();
      });
    } else if (e.target.classList.contains("contrast-add")) {
      Caman("#canvas", img, function() {
        this.contrast(5).render();
      });
    } else if (e.target.classList.contains("contrast-remove")) {
      Caman("#canvas", img, function() {
        this.contrast(-5).render();
      });
    } else if (e.target.classList.contains("saturation-add")) {
      Caman("#canvas", img, function() {
        this.saturation(5).render();
      });
    } else if (e.target.classList.contains("saturation-remove")) {
      Caman("#canvas", img, function() {
        this.saturation(-5).render();
      });
    } else if (e.target.classList.contains("stackBlur-add")) {
      Caman("#canvas", img, function() {
        this.stackBlur(5).render();
      });
    } else if (e.target.classList.contains("stackBlur-remove")) {
      Caman("#canvas", img, function() {
        this.stackBlur(-5).render();
      });
    }
    // Start of Effects section
    else if (e.target.classList.contains("vintage-add")) {
      Caman("#canvas", img, function() {
        this.vintage().render();
      });
    } else if (e.target.classList.contains("hemingway-add")) {
      Caman("#canvas", img, function() {
        this.hemingway().render();
      });
    } else if (e.target.classList.contains("clarity-add")) {
      Caman("#canvas", img, function() {
        this.clarity().render();
      });
    } else if (e.target.classList.contains("sincity-add")) {
      Caman("#canvas", img, function() {
        this.sinCity().render();
      });
    } else if (e.target.classList.contains("grungy-add")) {
      Caman("#canvas", img, function() {
        this.grungy().render();
      });
    } else if (e.target.classList.contains("pinhole-add")) {
      Caman("#canvas", img, function() {
        this.pinhole().render();
      });
    } else if (e.target.classList.contains("nostalgia-add")) {
      Caman("#canvas", img, function() {
        this.nostalgia().render();
      });
    } else if (e.target.classList.contains("hermajesty-add")) {
      Caman("#canvas", img, function() {
        this.herMajesty().render();
      });
    }
  }
}

export default filterEffect;
