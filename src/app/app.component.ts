import { Component } from "@angular/core";
import { SlimLoadingBarService } from "ng2-slim-loading-bar";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "app";

  constructor(
    private _loadingBar: SlimLoadingBarService,
    private _http: HttpClient
  ) {}

  /**
   * we are using http://slowwly.robertomurray.co.uk/ to automate delay(8000ms) with our main json test server
   * https://jsonplaceholder.typicode.com/posts/1
   *
   */
  activate() {
    this._http
      .get(
        //"http://slowwly.robertomurray.co.uk/delay/8000/url/https://jsonplaceholder.typicode.com/posts/1\n" +
        //"\n"
        "https://api.github.com/users/rajiv3444"
      )
      .subscribe(
        data => {
          //alert("Success, check your console");
          console.log(data);
        },
        err => console.log(err)
      );
  }

  /**
   * here the endpoint is not existing
   */
  activateWtihError() {
    this._http
      .get(
        "http://slowwly.robertomurray.co.uk/delay/8000/url/https://not-existing.com/p\n" +
          "\n"
      )
      .subscribe(
        data => console.log(data),
        err => {
          alert("With error, check your console");
          console.log(err);
        }
      );
  }
}
