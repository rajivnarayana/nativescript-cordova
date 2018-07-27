import { Observable } from 'tns-core-modules/data/observable';
import { Cordova } from 'nativescript-cordova';

export class HelloWorldModel extends Observable {
  public message: string;
  private cordova: Cordova;

  constructor() {
    super();

    this.cordova = new Cordova();
    this.message = this.cordova.message;
  }
}
