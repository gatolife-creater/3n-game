let txtc = 0;
let txtcs = 5;
let number = [];

// 背景映像
let bkx = [];
let bky = [];
let bksize = [];
let bkxs = [];
let bkys = [];


//TrueButton-->tb
//FalseButton-->fb
let tbx = 0;
let tby = 300;
let tbw = 200;
let tbh = 300;
let tbc = 255;

let fbx = 200;
let fby = 300;
let fbw = 200;
let fbh = 300;
let fbc = 255;

let counter = 0;

let comment = " ";
let score = 0;
let limit = 300;

//画面推移用
let move = 0;
let giveup = "giveup?";
let giveupa = 125; //alpha

function setup() {
    createCanvas(400, 600);
    textAlign(CENTER);
    textSize(25);
    backS();
    for (var i = 0; i < 999; i++) {
        number[i] = int(random(1, 9999));
    }
    // song.loop();

}

function draw() {
    // background(220);
    if (move == 0) {
        background(135, 206, 235);
        // txtc+=txtcs;
        // if(txtc>255 || txtc<0){
        // txtcs*=-1;
        // }
        fill(txtc);
        text("Enter to start", width / 2, height / 2);
        backD();
    }
    if (move == 1) {
        background(135, 206, 235);

        backD();
        limit -= 1;
        /*if (mouseX > tbx && mouseX < tbx + tbw &&
            mouseY > tby && mouseY < tby + tbh) {
            tbc = 125;
          }else if (mouseX > fbx && mouseX < fbx + fbw &&
            mouseY > fby && mouseY < fby + fbh) {
            fbc = 125;
          }*/
        if (limit < 0) {
            limit = 300;
            counter += 1;
            score -= 30;
            comment = "miss!"
        }
        fill(0);
        text("limit:" + limit, 100, 40);
        text(number[counter], width / 2, height / 4);

        fill(tbc);
        rect(tbx, tby, tbw, tbh);
        fill(0);
        text("←", width / 4, 400);
        text("3の倍数", width / 4, 500);
        fill(fbc);
        rect(fbx, fby, fbw, fbh);
        fill(0);
        text("→", width / 4 * 3, 400);
        text("それ以外", width / 4 * 3, 500);
        text("score:" + score, width - 100, 40);
        text(comment, width / 2, height / 3);
        if (mouseX > 300 && mouseX < height &&
            mouseY > height / 2 - 35 && mouseY < height / 2) {
            giveupa = 255;
        } else {
            giveupa = 125;
        }
        fill(220, 125);
        rect(300, height / 2 - 35, 100, 35);
        fill(0, giveupa);
        text(giveup, 350, height / 2 - 10)
    }
    if (move == 2) {
        background(135, 206, 235);
        backD();
        fill(0);
        text("score:" + score, width / 2, height / 2);
    }
}


function keyPressed() {
    if (move == 0 && keyCode == ENTER) {
        move = 1;
    }
    if (move == 1) {
        if (number[counter] % 3 == 0) {
            if (keyCode == LEFT_ARROW) {
                tbc = 125;
                counter += 1; //消すな
                limit = 300;
                comment = "nice!";
                score += 10;
            } else if (keyCode == RIGHT_ARROW) {
                fbc = 125;
                counter += 1;
                limit = 300;
                comment = "miss!";
                score -= 30;
            }
        } else if (number[counter] % 3 == 1 || number[counter] % 3 == 2) {
            if (keyCode == RIGHT_ARROW) {
                fbc = 125;
                counter += 1;
                limit = 300;
                comment = "nice!"
                score += 10;
            } else if (keyCode == LEFT_ARROW) {
                tbc = 125;
                counter += 1;
                limit = 300;
                comment = "miss!"
                score -= 30;
            }
        }
        /*if (score < 0) {
          score = 0;
        }*/
    }
}

function keyReleased() {
    if (move == 1) {
        if (keyCode == LEFT_ARROW) {
            tbc = 255;
        }
        if (keyCode == RIGHT_ARROW) {
            fbc = 255;
        }
    }
}



function mousePressed() {
    if (move == 1) {
        if (mouseX > 300 && mouseX < height &&
            mouseY > height / 2 - 35 && mouseY < height / 2) {
            move += 1;
        }
        if (number[counter] % 3 == 0) {
            if (mouseX > tbx && mouseX < tbx + tbw &&
                mouseY > tby && mouseY < tby + tbh) {
                tbc = 125;
                counter += 1; //消すな
                limit = 300;
                comment = "nice!";
                score += 10;
            } else if (mouseX > fbx && mouseX < fbx + fbw &&
                mouseY > fby && mouseY < fby + fbh) {
                fbc = 125;
                counter += 1;
                limit = 300;
                comment = "miss!";
                score -= 30;
            }
        } else if (number[counter] % 3 == 1 || number[counter] % 3 == 2) {
            if (mouseX > fbx && mouseX < fbx + fbw &&
                mouseY > fby && mouseY < fby + fbh) {
                fbc = 125;
                counter += 1;
                limit = 300;
                comment = "nice!"
                score += 10;
            } else if (mouseX > tbx && mouseX < tbx + tbw &&
                mouseY > tby && mouseY < tby + tbh) {
                tbc = 125;
                counter += 1;
                limit = 300;
                comment = "miss!"
                score -= 30;
            }
        }
    }
}

function mouseReleased() {
    if (move == 1) {
        if (mouseX > tbx && mouseX < tbx + tbw &&
            mouseY > tby && mouseY < tby + tbh) {
            tbc = 255;
        }
        if (mouseX > fbx && mouseX < fbx + fbw &&
            mouseY > fby && mouseY < fby + fbh) {
            fbc = 255;
        }
    }
}

function backS() {
    for (var i = 0; i < 150; i++) {
        bksize[i] = random(10);
        bkx[i] = random(0, width - bksize[i]);
        bky[i] = random(0, height - bksize[i]);
        bkxs[i] = random(-1, 1);
        bkys[i] = random(1, 3);

    }
}

function backD() {
    for (var i = 0; i < 100; i++) {
        noStroke();
        bkxs[i] = random(-1, 1);
        // bkys[i] = 1;
        bkx[i] += bkxs[i];
        bky[i] += bkys[i];
        fill(251, 100, 222);
        circle(bkx[i], bky[i], bksize[i]);
        if (bkx[i] > width) {
            bkx[i] = 0;
        }
        if (bky[i] > height) {
            bky[i] = 0;
            bkx[i] = random(width);
        }
    }
    version();
}

function version() {
    fill(220, 125);
    rect(0, 550, width, 50);
    fill(0);
    text("version:" + 4, width / 2, 585);
}
