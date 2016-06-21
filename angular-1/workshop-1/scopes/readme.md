> Scopes sample

- BMWController overrides the myModel.name property of CarController.
- BMWController inherits the clearNumber method from the CarController
- Click the setNumber method on both Car and BMW scopes and observe the result.
- The TrainController has its own isolated scope.

TODO

- Add a TramController and place it inside the scope of TrainController.
  - Copy the layout of TrainController for re-use.
  - Add the method setNumber and assign the value of 4 to the model name.
  - Observe that the method clearNumber is inherited.


- Add a SubwayController and place it inside the scope of TrainController
  - Copy the layout of TrainController for re-use
  - Define myModel as it is defined in TrainController
  - Do not define the setNumber and clearNumber methods
  - Observe the results.
