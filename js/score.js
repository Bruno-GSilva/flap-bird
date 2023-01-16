import "./main";

let colide = Boolean(colisor.value);
let score = 0;
let player = true;

if (player){

}

for (let column = 0; column < map.columns; column++) {
    for (let row = 0; row < map.rows; row++) {
      const tile = map.getTile(column, row);
      const x = column * map.tileSize;
      const y = row * map.tileSize;
      drawTile(tile, x, y);
    }
  }
