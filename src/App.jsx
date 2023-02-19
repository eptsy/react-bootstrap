import React from "react";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="p-2">
      <h1 className="text-primary font-italic">Boostrap</h1>
      <button type="button" class="btn btn-outline-success">
        Success <i className="bi bi-0-square-fill"></i>
      </button>
      <button
        type="button"
        className="btn btn-secondary"
        data-toggle="tooltip"
        data-html="true"
        title="<em>Tooltip</em> <u>with</u> <b>HTML</b>"
      >
        Tooltip with HTML
      </button>
      <div class="alert alert-primary" role="alert">
        This is a primary alert—check it out!
      </div>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Handle</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Larry</td>
            <td>the Bird</td>
            <td>@twitter</td>
          </tr>
        </tbody>
      </table>

      <div className="btn-group">
        <button
          type="button"
          className="btn btn-danger dropdown-toggle"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          Action
        </button>
        <div className="dropdown-menu">
          <a className="dropdown-item" href="#">
            Action
          </a>
          <a className="dropdown-item" href="#">
            Another action
          </a>
          <a className="dropdown-item" href="#">
            Something else here
          </a>
          <div className="dropdown-divider"></div>
          <a className="dropdown-item" href="#">
            Separated link
          </a>
        </div>
      </div>
      <div class="dropdown-menu">
        <form class="px-4 py-3">
          <div class="form-group">
            <label for="exampleDropdownFormEmail1">Email address</label>
            <input
              type="email"
              class="form-control"
              id="exampleDropdownFormEmail1"
              placeholder="email@example.com"
            />
          </div>
          <div class="form-group">
            <label for="exampleDropdownFormPassword1">Password</label>
            <input
              type="password"
              class="form-control"
              id="exampleDropdownFormPassword1"
              placeholder="Password"
            />
          </div>
          <div class="form-check">
            <input
              type="checkbox"
              class="form-check-input"
              id="dropdownCheck"
            />
            <label class="form-check-label" for="dropdownCheck">
              Remember me
            </label>
          </div>
          <button type="submit" class="btn btn-primary">
            Sign in
          </button>
        </form>
        <div class="dropdown-divider"></div>
        <a class="dropdown-item" href="#">
          New around here? Sign up
        </a>
        <a class="dropdown-item" href="#">
          Forgot password?
        </a>
      </div>
    </div>
  );
}

export default App;
