// -- STATEMENTS

nw.Screen.Init();
let screen_array = nw.Screen.screens;

nw.Window.open(
    'index.html',
    {
        x: screen_array[ 0 ].bounds.x,
        y: screen_array[ 0 ].bounds.y
    },
    function ( window )
    {
        window.enterKioskMode();
    }
    );
