import logo from "./logo.svg";
import "./App.css";
import "../src/component/buger.css";

function App() {
  return (
    <div className="container ">
      <div className="row">
        <div className="col-lg-6 ">
          <div className="breadTop mt-3 mb-3  "></div>
          <div className="rau  mt-3 mb-3"></div>
          <div className="cheese  mt-3 mb-3"></div>
          <div className="thitbo  my-3"></div>
          <div className="breadBottom  mt-3 mb-3"></div>
        </div>
        <div className="col-lg-6">
          <div className="row my-3">
            <div className="col-4">Thức ăn</div>
            <div className="col-4"></div>
            <div className="col-4">Gía</div>
          </div>
          <div className="row my-3">
            <div className="col-4">salad</div>
            <div className="col-4">
              <button type="button" class="btn btn-danger">
                -
              </button>
              <button type="button" class="btn btn-success">
                +
              </button>
            </div>
            <div className="col-4">10</div>
          </div>

          <div className="row my-3">
            <div className="col-4">cheese</div>
            <div className="col-4">
              <button type="button" class="btn btn-danger">
                -
              </button>
              <button type="button" class="btn btn-success">
                +
              </button>
            </div>
            <div className="col-4">10</div>
          </div>

          <div className="row my-3">
            <div className="col-4">thịt bò</div>
            <div className="col-4">
              <button type="button" class="btn btn-danger">
                -
              </button>
              <button type="button" class="btn btn-success">
                +
              </button>
            </div>
            <div className="col-4">10</div>
          </div>

          <div className="row d-flex justify-content-end">
            <div className="col-4">tổng tiền: </div>
            <div className="col-4">100</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
