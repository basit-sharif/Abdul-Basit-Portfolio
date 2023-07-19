export function animateAllWeb() {
    let element = document.querySelectorAll(".fade_right_rotate");
    console.log("element : ", element)
    const observer = new IntersectionObserver((item: any) => {
        item.map((subitem: any) => {
            if (subitem.isIntersecting) {
                subitem.target.classList.remove("fade_right_rotate_notView");
                subitem.target.classList.add("fade_right_rotate_view");
            } else {
                subitem.target.classList.add("fade_right_rotate_notView");
                subitem.target.classList.remove("fade_right_rotate_view");
            };
        })
    })
    element.forEach((item: any) => {
        observer.observe(item);
    });
    let element2 = document.querySelectorAll(".fade_left");
    const observer2 = new IntersectionObserver((item: any) => {
        item.map((subitem: any) => {
            if (subitem.isIntersecting) {
                subitem.target.classList.remove("fade_left_notView");
                subitem.target.classList.add("fade_left_view");
            } else {
                subitem.target.classList.add("fade_left_notView");
                subitem.target.classList.remove("fade_left_view");
            };
        })
    })
    element2.forEach((item: any) => {
        observer2.observe(item);
    })
    let element3 = document.querySelectorAll(".fade_right");
    const observer3 = new IntersectionObserver((item: any) => {
        item.map((subitem: any) => {
            if (subitem.isIntersecting) {
                subitem.target.classList.remove("fade_right_notView");
                subitem.target.classList.add("fade_right_view");
            } else {
                subitem.target.classList.add("fade_right_notView");
                subitem.target.classList.remove("fade_right_view");
            };
        })
    })
    element3.forEach((item: any) => {
        observer3.observe(item);
    })
    let element4 = document.querySelectorAll(".scaling_animation");
      const observer4 = new IntersectionObserver((item: any) => {
        item.map((subitem: any) => {
          if (subitem.isIntersecting) {
            subitem.target.classList.add("scaleout_view");
            subitem.target.classList.remove("scalein_view");
          } else {
            subitem.target.classList.add("scalein_view");
            subitem.target.classList.remove("scaleout_view");
          };
        })
      })
      element4.forEach((item: any) => {
        observer4.observe(item);
      });
}