import React, { Component } from "react";
import Swal from "sweetalert2";

class SweetAlertBasic extends Component {
  // componentDidMount() {
  //   Swal.fire("1. SweetAlert").then((result) => {
  //     alert("2. result.value : " + result.value);
  //   });
  // }

  saveAlert = (flag, positionflag, e) => {
    Swal.fire({
      position: positionflag,
      icon: "success",
      title: flag + "Complete!!",
      showConfirmButton: false,
      timer: 1500,
    });
  };

  render() {
    return (
      <div>
        <h2>Sweetalert2</h2>
        <button onClick={(e) => this.saveAlert("save", "center")}>Save</button>
        <button onClick={(e) => this.saveAlert("save", "bottom-end")}>
          Modify
        </button>
      </div>
    );
  }
}

export default SweetAlertBasic;
