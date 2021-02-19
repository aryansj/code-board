import React from "react";
import ReactDOM from "react-dom";
function Header() {
  return (
    <div class="h-1/3 text-center">
      <h2 class="mt-10 font-mono text-center text-6xl font-extrabold text-gray-900">
        <span><i class="mr-3 fa fa-keyboard-o" aria-hidden="true"></i></span>
          Deft[Digits]
      </h2>
        <p class=" font-mono text-2xl text-indigo-600 hover:text-indigo-500 mt-8">
            A programmer types around 70 words per minute. Can you? 
        </p>
    </div>
  );
}

export default Header;