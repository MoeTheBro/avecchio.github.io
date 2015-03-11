---
layout: page
title: First Robotics
permalink: /first_robotics/
---

#### Information

- [Notes]() This is just a list of notes to keep in mind, or suggestions for FIRST during the season. WARNING: Some of these are rants.

#### Robotics

- [Intro to Robotics]()
- [Drive Systems]()
- [Sensors]()

- - -

#### Mechanical Engineering & Machine Training

- [Newtonian Mechanics]()
- [Material Science]()
- [Tools]()
- [Mills]()
- [Lathe]()
- [CNC Mill]()
- [Pneumatics]()

- - -

#### Electrical Engineering & The Control System

- [Intro To Electrical Engineering]()
- [Ohm's Law]()
- [Wiring]()
- [Multimeter]()
- [Gauges]()

- - -

#### Software Engineering & Best Practices

- [Intro to Networking]()
- [Intro to Programming]()
- [Version Control]()
- [PWM & CAN Controllers]()
- [Vision Processing]()
- [Best Coding Practices]()

- - -

Lets start with the similarities, both of them allow for the control of the output voltage of a speed controller.

The differences are listed below:
* CAN is a serial bus, PWM requires a cable going from the DSC to each controller (Comparison diagrams can be found here: robotics.aca.imsa.edu/can)
* CAN allows for feedback from the controller on its status, PWM is a one way communication
* CAN allows for sensor processing directly on the Jaguar, PWM must be controlled from the cRIO
* CAN allows for closed-loop control on the Jaguar rather than the cRIO
These are just some examples of the differences, there are probably more I am forgetting.

As for which one you should use, it depends a lot on what you plan to do and how much experience you have. If you just need to control motors and haven't had much experience in wiring FRC robots and building their control systems, then I would suggest using PWM. If you have time to experiment, wanting feedback from the controller, wanting to have closed-loop control moved to the motor controller, or are willing to learn more complex systems, then CAN is a good choice.

#### Version Control
https://www.youtube.com/watch?v=gY2JwRfin1M
[Learning Git](http://git-scm.com)
[Github](https://github.com)
[SVN](http://tortoisesvn.net/)
[Mercurial](http://mercurial.selenic.com/)

#### Sensors

- - -

