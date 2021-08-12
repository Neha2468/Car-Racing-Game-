class Form{
    constructor(){

    }

    display(){
        var title = createElement('h2');
        title.html("Car Racing Game");
        title.position(475,100);

        var input = createInput('Name');
        var button = createButton('play');
     
        
        input.position(525,250);
        button.position(650,300);
        
        button.mousePressed(function(){
            input.hide();
            button.hide();

            var name = input.value();

            playerCount+1;
            player.update(name);                    
            player.updateCount(playerCount);
                                                                                            
            var greeting = createElement('h3');
            greeting.html("Hello " + name + " Welcome to the Car Racing Game")
            greeting.position(375,160)
        })
    }
}