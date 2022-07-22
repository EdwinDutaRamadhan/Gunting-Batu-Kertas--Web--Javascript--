var pilihan = 0, randomBot;

function user(pilihan){
    if(pilihan == 1){
        //BatuButton
        alert("user memilih tombol batu");
        bot();
        algoritmaPermainan(1);
    }
    else if(pilihan == 2){
        //GuntingButton
        alert("user memilih tombol gunting");
        bot();
        algoritmaPermainan(2);
    }
    else if(pilihan == 3){
        //KertasButton
        alert("user memilih tombol kertas");
        bot();
    }
}
function bot(){
    randomBot = Math.floor(Math.random()* 3) + 1;
    if(randomBot == 1){
        //botBatu
        alert("bot memilih Batu");
    }else if(randomBot == 2){
        //botGunting
        alert("bot memilih Gunting");
    }else if(randomBot == 3){
        //botKertas
        alert("bot memilih Kertas");
    }
}
function algoritmaPermainan(pilihan){
    if(pilihan == 1){
        //User memiliih Batu
        if(randomBot == 1){
            //seri
            alert("User = Batu\nBot = Batu\nSERI!!");
        }else if(randomBot == 2){
            //user menang
            alert("User = Batu\nBot = Gunting\nMENANG!!");
        }else if(randomBot == 3){
            //user kalah
            alert("User = Batu\nBot = Kertas\nKALAH!!");
        }
    }else if(pilihan == 2){
        //User memiliih Gunting
        if(randomBot == 1){
            //user kalah
            alert("User = Gunting\nBot = Batu\nKALAH!!");
        }else if(randomBot == 2){
            //seri
            alert("User = Gunting\nBot = Gunting\nSERI!!");
        }else if(randomBot == 3){
            //user emnang
            alert("User = Gunting\nBot = Kertas\nMENANG!!");
        }
    }else if(pilihan == 3){
        //User memiliih Kertas
        if(randomBot == 1){
            //user menang
            alert("User = Kertas\nBot = Batu\nMENANG!!");
        }else if(randomBot == 2){
            //user kalah
            alert("User = Kertas\nBot = Gunting\nKALAH!!");
        }else if(randomBot == 3){
            //seri
            alert("User = Kertas\nBot = Kertas\nSERI!!");
        }
    }
}