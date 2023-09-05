// JavaScript to toggle accordion content

const accordionItems = document.querySelectorAll(".accordion-item");

for (let i = 0; i < accordionItems.length; i++) {
  const accordionTitle = accordionItems[i].querySelector(".accordion-title");
  const accordionContent =
    accordionItems[i].querySelector(".accordion-content");

  accordionTitle.addEventListener("click", function () {
    const activeAccordionItem = document.querySelector(
      ".accordion-item.active"
    );

    if (activeAccordionItem && activeAccordionItem !== accordionItems[i]) {
      activeAccordionItem.classList.remove("active");
      activeAccordionItem.querySelector(".accordion-content").style.display =
        "none";
    }

    accordionItems[i].classList.toggle("active");

    if (accordionContent.style.display === "block") {
      accordionContent.style.display = "none";
    } else {
      accordionContent.style.display = "block";
    }
  });
}
