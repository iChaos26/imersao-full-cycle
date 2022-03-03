import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TweetsModule } from './tweets/tweets.module';

//----------------------------------------------------------------
//The root module of the application.
//----------------------------------------------------------------
//Modules are executed within their own scope, not in the global 
//scope; this means that variables, functions, classes, etc. declared 
//in a module are not visible outside the module unless they are explicitly 
//exported using one of the export forms. Conversely, to consume a variable, 
//function, class, interface, etc. exported from a different module, 
//it has to be imported using one of the import forms.
//Modules are declarative; the relationships between modules are specified in terms of imports and exports at the file level.
//Modules import one another using a module loader. At runtime the module loader is responsible for locating and 
//executing all dependencies of a module before executing it. Well-known module loaders used in JavaScript are Node.js’s loader for 
//CommonJS modules and the RequireJS loader for AMD modules in Web applications.
//In TypeScript, just as in ECMAScript 2015, any file containing a top-level import or export is considered a module. 
//Conversely, a file without any top-level import or export declarations is treated as a script whose contents are available in 
//the global scope (and therefore to modules as well).
//----------------------------------------------------------------

@Module({
  imports: [
    TweetsModule,
    MongooseModule.forRoot(
      'mongodb://root:root@db/analytics?authSource=admin',
      {
        useNewUrlParser:true,
      }
    )
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
