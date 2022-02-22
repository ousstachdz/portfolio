import { Component, HostListener, OnInit } from '@angular/core';



@Component({
  selector: 'app-window',
  templateUrl: './window.component.html',
  styleUrls: ['./window.component.css']
})
export class WindowComponent implements OnInit {

  constructor() {  }

  ngOnInit(): void {
  }
  isClicking = false;
  isholding = true;
  lvalue = 0.0;
  tvalue = 0.0;
  Xlvalue = 0.0;
  Ytvalue = 0.0;
  left ='0px';
  top='0px';
  
  mousedown():void{
    
  }
  
  // mouseup():void{
  //   this.isClicking = false;
  // }
  convert(a:string ,b:number):number{
    
    return (Number)(a.substring(0, b-2));
  }

  @HostListener('mousedown', ['$event']) onMouseMove(event: { clientX: any; clientY: any; }) {
    console.log('.........'+event.clientX.toString())
    console.log(this.convert(event.clientX.toString(),event.clientX.toString().length )) 
    // const terminal = document.getElementById('terminal');
    
    // this.Xlvalue = this.convert( terminal.clientTop.toString() ,terminal?.clientTop.toString().length)
    // this.Ytvalue=(Number)(terminal?.clientLeft);

    // try{
    //   this.Xlvalue= (Number)(terminal?.clientTop);
    //   this.Ytvalue=(Number)(terminal?.clientLeft);

    //   console.log('this.Xlvalue..........'+this.Xlvalue)
    //   console.log('this.Ylvalue..........'+this.Ytvalue)
    // }catch(e){
    //   this.Xlvalue=0
    //   this.Ytvalue=0
    //   console.log('this.Xlvalue..........'+this.Xlvalue)
    //   console.log('this.Ylvalue..........'+this.Ytvalue)
    // }



    // this.left = (Number(this.left)+ Number(this.Xlvalue)-Number(event.clientX)) +"px";
    // this.top = (Number(this.top)+ Number(this.Ytvalue)-Number(event.clientY)) +"px";
    // console.log(this.top)
    // console.log(this.left)
    
  }
  // @HostListener('mouseup', ['$event']) (event: { clientX: any; clientY: any; }) {
  //   this.isClicking = false;
  //   console.log(this.isClicking )

  // }
}


