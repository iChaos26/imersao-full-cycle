import { Injectable } from '@nestjs/common';

//----------------------------------------------------------------
//A basic service with a single method.
//----------------------------------------------------------------
//An Injectable object can be inserted in another
//scope by exporting explicity and 
//importing from another scope(another module) as providers
//Singleton scope is used by default, and need not be declared. 
//If you do want to declare a provider as singleton scoped, use the Scope
//.DEFAULT value for the scope property.
//----------------------------------------------------------------
@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
}
