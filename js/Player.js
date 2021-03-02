class Player{

    constructor(){
    }

    getCount(){

        var getCountRef = database.ref('playerCount');
        getCountRef.on("value",function(data){

            playerCount = data.val();

        })

    }

    updateCount(count){

        database.ref('/').set({

            playerCount:count
            
        })


    }

    updateName(name){

        var playerIndex = "player"+playerCount;

        database.ref(playerIndex).set({

            name:name
            
        })

    }

}