

const inputs = document.querySelectorAll(".controls input")

// console.log(inputs);


function inputHandler(){
    const suffix = this.dataset.sizing || '' ;
    // console.log(suffix);
    // console.log(this.v);
    
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
}


//=========+++++++ this works when input hits and this works for both 'change' & 'mousemove' this results fix change event for my color picker+++++++==============

inputs.forEach(input => input.addEventListener('input', inputHandler))
// console.log(inputs);



//=========+++++++ this works when i close color picker +++++++==============

// inputs.forEach(input => input.addEventListener('change', inputHandler))
// console.log(inputs);



//=========+++++++ this works when i mouse move +++++++==============
// inputs.forEach(input => input.addEventListener('mousemove', inputHandler))
// console.log(inputs);
