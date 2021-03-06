import React, { Component } from "react";
import { connect } from "react-redux";

class Buger extends Component {
  renderBreadeMid = () => {
    let burger = this.props.burger;

    return Object.entries(burger).map(([propsBurger, value], index) => {
      let breadMid = [];
      for (let i = 0; i < value; i++) {
        breadMid.push(
          <div key={i} className={propsBurger + " " + "my-3"}></div>
        );
      }
      return breadMid;
    });
  };

  renderMenu = () => {
    // Lấy props từ redux về
    let { menu, burger } = this.props;
    return Object.entries(menu).map(([propsMenu, price], index) => {
      return (
        <div className="row my-3 " key={index}>
          <div className="col-4">{propsMenu}</div>
          <div className="col-4">
            <button
              onClick={() => {
                this.props.addBreadMid(propsMenu, -1);
              }}
              type="button"
              class="btn btn-danger"
            >
              -
            </button>
            {burger[propsMenu]}
            <button
              onClick={() => {
                this.props.addBreadMid(propsMenu, 1);
              }}
              type="button"
              class="btn btn-success"
            >
              +
            </button>
          </div>
          <div className="col-4">{price}</div>
        </div>
      );
    });
  };

  render() {
    return (
      <div className="container ">
        <div className="row">
          <div className="col-lg-6 ">
            <div className="breadTop mt-3 mb-3  "></div>
            {this.renderBreadeMid()}
            <div className="breadBottom  mt-3 mb-3"></div>
          </div>
          <div className="col-lg-6">
            <div className="row my-3">
              <div className="col-4">Thức ăn</div>
              <div className="col-4"></div>
              <div className="col-4">Gía</div>
            </div>
            {/*
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
            </div> */}

            {/* <div className="row my-3">
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
            </div> */}

            <div className="row d-flex justify-content-end">
              <div className="col-12">{this.renderMenu()}</div>
              <div className="col-4">tổng tiền: </div>
              <div className="col-4">{this.props.total}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addBreadMid: (propsBurger, amount) => {
      // Tạo ra action
      const action = {
        type: "ADD_BREADMID",
        propsBurger,
        amount,
      };
      dispatch(action);
    },
  };
};

const mapStateToProps = (state) => {
  return {
    burger: state.BurgerReducer.burger,
    menu: state.BurgerReducer.menu,
    total: state.BurgerReducer.total,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Buger);
