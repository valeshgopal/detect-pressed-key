"use strict";
const body = document.querySelector("body");
const number = document.querySelector(".number");
const key = document.querySelector(".key");
const left = document.querySelector(".left");
const right = document.querySelector(".right");
const content = document.querySelector(".content");
const reveal = document.querySelector(".reveal");

body.addEventListener("keydown", function (e) {
  content.classList.remove("hidden");
  reveal.classList.add("hidden");
  number.textContent = e.keyCode;
  if (e.key === " ") {
    key.textContent = e.code.toUpperCase();
    left.textContent = `Key: ${e.code}`;
  } else {
    key.textContent = e.key.toUpperCase();
    left.textContent = `Key: ${e.key}`;
  }

  right.textContent = `Code: ${e.keyCode}`;
});
