
// Basic Synth Variables
var env, osc, modulator;

//Octave Change variables
var octaveUp, octaveDown;
var octave = 0;
var buttonUp, buttonDown;



var freqSlider;

//FM Variables

carrierWave = 'sine';
modulatorWave = 'sine';
var carrierBaseFreq = 220;
var modMaxFreq = 112;
var modMinFreq = 0;
var modMaxDepth = 150;
var modMinDepth = -150;


function setup(){
    console.log("setup");

    osc = new p5.Oscillator();
    osc.setType(carrierWave);
    osc.freq(240);
    osc.amp(0);
    osc.start();

    env= new p5.Env();
    env.setADSR(0.001, 0.5, 0.2, 0.5);
    env.setRange(1,0);

    modulator = new p5.Oscillator(modulatorWave);
    modulator.freq(25);
    modulator.amp(50);
    modulator.start();

    modulator.disconnect();
    osc.freq(modulator);


    //Octave Buttons

    buttonUp = createButton('Up');
    buttonUp.position(80, 19);
    buttonUp.mousePressed(octaveUp);

    buttonDown = createButton('Down');
    buttonDown.position(19, 19);
    buttonDown.mousePressed(octaveDown);

    //Menu for carrier

    textAlign(CENTER);
    sel = createSelect();
    sel.position(200, 10);
    sel.option('sine');
    sel.option('triangle');
    sel.option('square');
    sel.option('sawtooth');
    sel.changed(carrierSelector);

     //Menu for modulator

     textAlign(CENTER);
     sel = createSelect();
     sel.position(300, 10);
     sel.option('sine');
     sel.option('triangle');
     sel.option('square');
     sel.option('sawtooth');
     sel.changed(modulatorSelector);

    //Slider Frequency modulator

    freqSlider = createSlider(modMinFreq, modMaxFreq, 100);
    freqSlider.position(200, 50);
    freqSlider.style('width', '80px');
    //Slider Depth modulator

    modDepthSlider = createSlider(modMinFreq, modMaxFreq, 100);
    modDepthSlider.position(200, 80);
    modDepthSlider.style('width', '80px');
    

}

//Octave Change
function octaveUp(){
    octave = octave + 1;
    console.log("octave " + octave);
}

function octaveDown(){
    octave = octave - 1;
    console.log("octave " + octave);
}

//waveform changes

function carrierSelector() {
    var carrierWave = sel.value();
    console.log(carrierWave);
    osc.setType(carrierWave);
  }



function modulatorSelector() {
    var modulatorWave = sel.value();
    console.log(modulatorWave);
    modulator.setType(modulatorWave);
  }



function draw(){


    var modFreqVal = freqSlider.value();

    modulator.freq(modFreqVal);


    var modDepthVal = modDepthSlider.value();
    modulator.amp(modDepthVal);


}
    


function keyPressed(){
    console.log("Key Pressed is: "+ key);
    var freq;
    var keyNotAssgined;


    
        switch(octave){

        case 0:
                switch(key){
                    case 'A':
                        freq = midiToFreq(60);
                    break;
                    case 'W':
                        freq = midiToFreq(61);
                    break;
                    case 'S':
                        freq = midiToFreq(62);
                    break;
                    case 'E':
                        freq = midiToFreq(63);
                    break;
                    case 'D':
                        freq = midiToFreq(64);
                    break;
                    case 'F':
                        freq = midiToFreq(65);
                    break;
                    case 'T':
                        freq = midiToFreq(66);
                    break;
                    case 'G':
                        freq = midiToFreq(67);
                    break;
                    case 'Y':
                        freq = midiToFreq(68);
                    break;
                    case 'H':
                        freq = midiToFreq(69);
                    break;
                    case 'U':
                        freq = midiToFreq(70);
                    break;
                    case 'J':
                        freq = midiToFreq(71);
                    break;
                    case 'K':
                        freq = midiToFreq(72);
                    break;

                    default:
                    keyNotAssgined = true; 
                    break;
                }
            
        break;

        case 1: 
                switch(key){
                    case 'A':
                        freq = midiToFreq(72);
                    break;
                    case 'W':
                        freq = midiToFreq(73);
                    break;
                    case 'S':
                        freq = midiToFreq(74);
                    break;
                    case 'E':
                        freq = midiToFreq(75);
                    break;
                    case 'D':
                        freq = midiToFreq(76);
                    break;
                    case 'F':
                        freq = midiToFreq(77);
                    break;
                    case 'T':
                        freq = midiToFreq(78);
                    break;
                    case 'G':
                        freq = midiToFreq(79);
                    break;
                    case 'Y':
                        freq = midiToFreq(80);
                    break;
                    case 'H':
                        freq = midiToFreq(81);
                    break;
                    case 'U':
                        freq = midiToFreq(82);
                    break;
                    case 'J':
                        freq = midiToFreq(83);
                    break;
                    case 'K':
                        freq = midiToFreq(84);
                    break;

                    default:
                    keyNotAssgined = true; 
                    break;
                }
        break;

        case -1:

                switch(key){
                    case 'A':
                        freq = midiToFreq(48);
                    break;
                    case 'W':
                        freq = midiToFreq(49);
                    break;
                    case 'S':
                        freq = midiToFreq(50);
                    break;
                    case 'E':
                        freq = midiToFreq(51);
                    break;
                    case 'D':
                        freq = midiToFreq(52);
                    break;
                    case 'F':
                        freq = midiToFreq(53);
                    break;
                    case 'T':
                        freq = midiToFreq(54);
                    break;
                    case 'G':
                        freq = midiToFreq(55);
                    break;
                    case 'Y':
                        freq = midiToFreq(56);
                    break;
                    case 'H':
                        freq = midiToFreq(57);
                    break;
                    case 'U':
                        freq = midiToFreq(58);
                    break;
                    case 'J':
                        freq = midiToFreq(59);
                    break;
                    case 'K':
                        freq = midiToFreq(60);
                    break;

                    default:
                    keyNotAssgined = true; 
                    break;
                }

        break;

        }
        

    

    if(keyNotAssgined===true){
        osc.amp(0);
    }else{
    env.triggerAttack(osc);
    osc.freq(freq);
    }
    console.log("Frequency: "+ freq);
}

function keyReleased(){
    osc.amp(0);
    env.triggerRelease(osc);
}