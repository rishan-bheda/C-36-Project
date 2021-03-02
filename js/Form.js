class Form{

    constructor(){

    }

    display(){
        
        var title = createElement('h2');
        title.html("Car Race");
        title.position(250,100);

        var input = createInput("Name");
        input.position(250,250);

        var button = createButton('Play');
        button.position(250,300);

  

        button.mousePressed(function(){
        
            input.hide();
            button.hide();

            var name = input.value();

            playerCount = playerCount+1;
            player.updateCount(playerCount);
            player.updateName(name);

            var greeting = createElement('h3');
            greeting.html("Welcome "+name);
            greeting.position(250,250);

        });

    }   
    
}

