import { Component, OnInit } from '@angular/core';
import { GestureEventData, SwipeGestureEventData, PanGestureEventData, PinchGestureEventData, RotationGestureEventData, TouchGestureEventData } from 'tns-core-modules/ui/gestures/gestures';

@Component({
  selector: 'ns-gestures',
  templateUrl: './gestures.component.html',
  styleUrls: ['./gestures.component.css'],
  moduleId: module.id,
})
export class GesturesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onTap(args: GestureEventData) {
    alert("Tap!");
  }

  onDoubleTap(args: GestureEventData) {
    alert("DoubleTap!");

  }

  onLongPress(args: GestureEventData) {
    alert("LongPress!");
  }

  onSwipe(args: SwipeGestureEventData) {
    alert("Swipe Direction: " + args.direction);
  }

  onPan(args: PanGestureEventData) {
    alert("Pan delta: [" + args.deltaX + ", " + args.deltaY + "] state: " + args.state);
  }

  onPinch(args: PinchGestureEventData) {
    alert("Pinch scale: " + args.scale + " state: " + args.state);
  }

  onRotate(args: RotationGestureEventData) {
    alert("Rotate angle: " + args.rotation + " state: " + args.state);
  }

  onTouch(args: TouchGestureEventData) {
    alert(
      "Touch point: [" + args.getX() + ", " + args.getY() +
      "] activePointers: " + args.getActivePointers().length);
  }

}
