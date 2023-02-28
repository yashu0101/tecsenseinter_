function countRooks(n, m, pos) {
  let maxi = 0;
  for (var i = 0; i < n; i++) {
    for (var j = 0; j < m; j++) {
      for (var i = 0; i < m; i++) {
        if (j != i && j != i) {
          if (pos[i][j] + pos[j][i] > maxi) {
            maxi = pos[i][j] + pos[j][i];
          }
        }
      }
    }
  }
  console.log(maxi);
}

let N = 2;
let M = 2;

let pos = [
  [1, 10],
  [2, 3],
];

countRooks(N, M, pos);
