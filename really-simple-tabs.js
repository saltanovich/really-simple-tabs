$(document).ready(function() {
  // get all links
  const links = $('.rst-tabs-links > a');
  // get all tabs contents
  const contents = $('.rst-tabs-contents > div');
  // add class to all links
  links.each(function(i, item) {
    if (i === 0) {
      $(item).addClass(`rst-link-${i} rst-link-active`);      
    } else {
      $(item).addClass(`rst-link-${i}`);
    }
  });
  // add class to all contents
  contents.each(function(i, item) {
    if (i === 0) {
      $(item).addClass(`rst-content-${i} rst-content-active`);    
    } else {
      $(item).addClass(`rst-content-${i}`);  
    }
  });
});