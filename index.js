const getResourse = async (url) => {
  let res = await fetch(url);

  if(!res.ok) {
    throw new Error(`Could not fetch ${url}, status ${res.status}`)
  }
  return await res.json();
}

let btn = document.querySelector(".btn");
  getResourse("./main.json")
     .then(res => {
      res.items.forEach((count, index) => {
        let setting__number = document.querySelector(".setting__number");
        setting__number.innerHTML = index + 1;
        let input__circle = document.querySelector(".input__circle");
        let input__link = document.querySelector(".input__link");
        input__circle.setAttribute("max", `${index + 1}`);
        input__link.setAttribute("max", `${index + 1}`);
      })
       btn.addEventListener("click", (e) => {
         e.preventDefault();
         let input__circle = document.querySelector(".input__circle");
         let input__link = document.querySelector(".input__link");
         let box__link = document.querySelector(".box__link")
         let box__mous = document.querySelector(".box");
         res.items.forEach((count, index) => {
          if(+input__circle.value > index) {
            let newEl = document.createElement("div");
            newEl.classList.add("box__container");
            let box = document.querySelector(".box__span");
            newEl.innerHTML = `
           <span class="${count.color}" style="position: relative; top: ${count.top}; left: ${count.left};"></span>
           `;
            box.appendChild(newEl);
          }
        });
        res.items.forEach((counter, index) => {
          if(+input__link.value > index) {
            let newEl = document.createElement("div");
            newEl.classList.add("box__container");
            let box = document.querySelector(".box__link");
            newEl.innerHTML = `
           <a class="link" href="${counter.link}" style="position: relative; top: ${counter.topPos}; left: ${counter.leftPos};">${counter.title}</a>
           `;
            box.appendChild(newEl);
          }
        })
        btn.setAttribute("disabled",  "disabled");
        box__mous.classList.add("animate");
        box__link.classList.add("animate1");
       })
     });

     let box__link = document.querySelector(".box__link")
     let box__mous = document.querySelector(".box");
     box__mous.addEventListener("mouseover", () => {
       box__mous.style.animationPlayState = "paused";
       box__link.style.animationPlayState = "paused";
     });
     box__mous.addEventListener("mouseout", () => {
      box__mous.removeAttribute("style");
      box__mous.removeAttribute("style");
    });