
AFRAME.registerComponent("click", {
    schema:{moveX:{type:"number", default:0},
}}),

update: function() {
    window.addEventListener("click", e => {
        this.DataTransfer.clickCounter = this.DataTransfer.clickCounter + 1});
        if(this.DataTransfer.clickCounter === 1){
            const rotation = {x: 0, y:20, z: 0 };
            this.el.setAttribute("rotation", rotation);
        } else if (this.DataTransfer.clickCounter === 2)
        {
        }
      const rotation = {x:0, y:100, z:0};

