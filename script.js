function moveHands() {
    const leftHand = document.querySelector('.left-hand');
    const rightHand = document.querySelector('.right-hand');
    const object = document.querySelector('.object');
  
    // Move hands inward
    leftHand.style.left = '100px';
    rightHand.style.right = '100px';
  
    // Shrink the object on collision
    setTimeout(() => {
      object.style.transform = 'scale(0.1) translate(-50%, -50%)';
    }, 500);
  
    // Reset hands and object after 1.5 seconds
    setTimeout(() => {
      leftHand.style.left = '0';
      rightHand.style.right = '0';
      object.style.transform = 'translate(-50%, -50%)';
    }, 1000);
  }
  