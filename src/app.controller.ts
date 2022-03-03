import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

// ----------------------------------------------------------------
//A controller's purpose is to receive specific requests 
//for the application. The routing mechanism controls 
//which controller receives which requests. 
//Frequently, each controller has more than one route, 
//and different routes can perform different actions.
// ----------------------------------------------------------------
//In order to create a basic controller, 
//we use classes and decorators. 
//Decorators associate classes 
//with required metadata and enable 
//Nest to create a routing map 
//(tie requests to the corresponding controllers).
// ----------------------------------------------------------------
//The @Get() HTTP request method decorator before 
//the method tells Nest to create a handler for a specific 
//endpoint for HTTP requests. The endpoint corresponds to the HTTP 
//request method (GET in this case) and the route path. 
//What is the route path? The route path for a handler is 
//determined by concatenating the (optional) prefix 
//declared for the controller, and any path specified in 
//the method's decorator. Since we've declared a prefix 
//for every route (test), and haven't added any path 
//information in the decorator, Nest will map GET /cats 
//requests to this handler.

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
