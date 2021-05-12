var config = {  rotateX: 0,
                rotateY: 0,
                rotateZ: 0,
                scale: 30,
                TransX: 0,
                TransY: 0,
                TransZ: 0,
                //chckBoxTst: true,
                animate: function() {
                  requestAnimationFrame(animate);
                },
                addModel: function() {
                  addModel();
                },
                removeModel: function() {
                  rmvModel();
                },
};
var configCam = { rotateX: 0,
                  rotateY: 0,
                  rotateZ: 0,
                  //scale: 30,
                  TransX: 0,
                  TransY: 0,
                  TransZ: 100,
                  lookAtPoint: false,
                  lookAtModel: false,
                  animate: function() {
                    requestAnimationFrame(animateCam);
                  },
                  //chooseCam
};

const loadGUI = () => {
  const gui = new dat.GUI();
  
    ///Interface for model transformations
  var guiMod = gui.addFolder("Model");
  guiMod.open();
    ///Folders for linear and curve translations
  var guiModTrans = guiMod.addFolder("Translation");
  var guiModTransLin = guiModTrans.addFolder("Linear");
  guiModTransLin.add(config, "TransX", -50, 50, 0.1).listen();
  guiModTransLin.add(config, "TransY", -50, 50, 0.1).listen();
  guiModTransLin.add(config, "TransZ", -50, 50, 0.1).listen();
  //guiTransCur
    ///Folder for axis rotation
  var guiModRot = guiMod.addFolder("Rotate");
  //guitRotAxis
  guiModRot.add(config, "rotateX", 0, 100, 0.1).listen();  //guiRotAxis?
  guiModRot.add(config, "rotateY", 0, 100, 0.1).listen();
  guiModRot.add(config, "rotateZ", 0, 100, 0.1).listen();
  //rotate point
  guiMod.add(config, "scale", 0, 100, 0.1).listen();  
    ///Calls function that plays animation
  guiMod.add(config, "animate"); 
    ///Calls function that creates and destroys new model new model
  guiMod.add(config, "addModel");
  guiMod.add(config, "removeModel");

    ///Interface for camera transformations
  var guiCam = gui.addFolder("Camera");
    ///Folder for linear and curve translations
  var guiCamTrans = guiCam.addFolder("Translation");
  var guiCamTransLin = guiCamTrans.addFolder("Linear");
  guiCamTransLin.add(configCam, "TransX", -50, 50, 0.1).listen();
  guiCamTransLin.add(configCam, "TransY", -50, 50, 0.1).listen();
  guiCamTransLin.add(configCam, "TransZ", -50, 50, 0.1).listen();
  //guiCamCur
    ///Folder for axis rotation
  var guiCamRot = guiCam.addFolder("Rotate");
  guiCamRot.add(configCam, "rotateX", 0, 100, 0.1).listen();
  guiCamRot.add(configCam, "rotateY", 0, 100, 0.1).listen();
  guiCamRot.add(configCam, "rotateZ", 0, 100, 0.1).listen();
  //point rotation
  //zoom
    ///Folder for look at
  //look at point
  guiCam.add(configCam, "lookAtPoint").listen();
  guiCam.add(configCam, "lookAtModel").listen();
  //look at model while moving
    ///Calls function that plays animation
  guiCam.add(configCam, "animate"); 
    ///Allow selection between multiple cameras/Folder
  //guiCamSel
};