var onRun = function(context) {

  var sketch = require('sketch');
  var document = sketch.getSelectedDocument();
  var page = document.selectedPage;
  var layers = page.layers;
  // console.log(layers);

  // --- Filter artboards out of all the layers ---
  var artboards = layers.filter(function(board){
    if (board.type == 'Artboard') {
      return true;
    }
  })
  // console.log(artboards);

// --- Sorting only based on frame.x ---
// var ordered = artboards.sort(function(a,b) {
//     if(a.frame.x > b.frame.x) {
//       return 1;
//     } else {
//       return -1;
//     }
//   });

// --- Verical sorting ---
// var ordered = artboards.sort(function(a,b) {
//   var compareX = a.frame.x - b.frame.x;
//   if (compareX != 0) {
//     return compareX;
//   } else {
//     return a.frame.y - b.frame.y;
//   }
// });
// console.log(ordered);

// --- Align Artboards ---
// var myFunction = function(givenArtboard) {
//   for (i = 0; i < artboards.length; i++) {
//     if (
//       (Math.abs(givenArtboard.frame.y - artboards[i].frame.y) < givenArtboard.frame.height) &&
//       (Math.abs(givenArtboard.frame.y - artboards[i].frame.y) < artboards[i].frame.height)
//       // && (Math.abs(givenArtboard.frame.y - artboards[i].frame.y) != 0)
//     ) {
//       artboards[i].frame.y = givenArtboard.frame.y;
//     }
//   }
// }

// artboards.forEach(myFunction);

// --- Failed Align Artboards Code ---
// for (i = 0; i < artboards.length; i++) {
//   while ((artboards[i + 1].frame.y - artboards[i].frame.y) < artboards[i].frame.height && (artboards[i + 1].frame.y - artboards[i].frame.y) != 0) {
//     artboards[i + 1].frame.y = artboards[i].frame.y;
//   }
// }

//--- Horizontal Sorting ---
var ordered = artboards.sort(function(a,b) {
  var compareY = a.frame.y - b.frame.y;
  if (
    (Math.abs(a.frame.y - b.frame.y) < a.frame.height) &&
    (Math.abs(a.frame.y - b.frame.y) < b.frame.height)
    // && (Math.abs(givenArtboard.frame.y - artboards[i].frame.y) != 0)
  ) {
    compareY = 1;
  }
  if (compareY != 0) {
    return compareY;
  } else {
    return a.frame.x - b.frame.x;
  }
});
// console.log(ordered);

for (var i = 0; i < ordered.length; i++) {
  ordered[i].moveToBack();
}

sketch.UI.message('Artboards in your layer-list have been sorted horizontally.');
  
}