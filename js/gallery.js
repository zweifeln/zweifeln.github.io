(function () {
  const page = function(container, forward = true) {
    const activeElement = container.querySelector('.active');
    const nextElement = forward ? activeElement.nextElementSibling :  activeElement.previousElementSibling;

    if (nextElement && nextElement.classList.contains('slideshow-image')) {
      activeElement.classList.remove('active');
      activeElement.classList.add('inactive');
      nextElement.classList.remove('inactive');
      nextElement.classList.add('active');
    }
  }

  const initGallery = function(container) {
    container.querySelectorAll(".slideshow-image").forEach(function(node, index) {
      node.classList.add(index === 0 ? 'active' : 'inactive');
    });
    container.querySelector('.next').addEventListener('click', function() { page(container, true)});
    container.querySelector('.prev').addEventListener('click', function() { page(container, false)});
  }

  document.querySelectorAll('.slideshow-container').forEach(initGallery);
})()
