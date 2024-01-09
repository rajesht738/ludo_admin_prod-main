import axios from "axios";
import React, {useState } from "react";


export default function CreateChallenge() {

  const [Game_Ammount, setAmount] = useState();
  

  const [gametype, setGameType] = useState();
  const beckendLocalApiUrl = process.env.REACT_APP_BACKEND_LOCAL_API;
  const beckendLiveApiUrl = process.env.REACT_APP_BACKEND_LIVE_API;
  const nodeMode = process.env.NODE_ENV;
  if (nodeMode === "development") {
    var baseUrl = beckendLocalApiUrl;
  } else {
    baseUrl = beckendLiveApiUrl;
  }

  // const addAdmin = async (e) => {

  //     e.preventDefault();

  //     if (Password !== cPassword) {
  //         alert("Passwords don't match");
  //     } else {
  //         const data = await axios.post(baseUrl+"admin/register", {
  //             Name,
  //             Phone,
  //             Password,
  //             user_type:type
  //         }).then((res) => {
  //             history.push("/admin/alladmins")
  //         })
  //     }
  // }
  const ChallengeCreate = (e) => {
    e.preventDefault();
    const access_token = localStorage.getItem("token");
    const headers = {
      Authorization: `Bearer ${access_token}`,
    };

    axios
      .post(
        baseUrl + `challange/create`,
        {
          Game_Ammount,
          Game_type: gametype,
        },
        { headers }
      )
      .then((res) => {
        console.log(res);
        // if (res.data.msg === 'you can not create same amount challenge.') {
        //   Swal.fire({
        //     title: 'you can not create same amount challenge.',
        //     icon: 'warning',
        //     confirmButtonText: 'OK',
        //   });
        // } else if (res.data.msg === 'you have already enrolled') {
        //   Swal.fire({
        //     title: 'You have already enrolled',
        //     icon: 'warning',
        //     confirmButtonText: 'OK',
        //   });
        // } else if (res.data.msg === 'You can set maximum 2 battle.') {
        //   Swal.fire({
        //     title: 'You can set maximum 2 battle.',
        //     icon: 'warning',
        //     confirmButtonText: 'OK',
        //   });
        // } else if (res.data.msg === 'Insufficient balance') {
        //   Swal.fire({
        //     title: 'Insufficient balance',
        //     icon: 'warning',
        //     confirmButtonText: 'OK',
        //   });
        // } else if (
        //   res.data.msg ===
        //   'Game amount should be Greater then 50 and less then 10000'
        // ) {
        //   Swal.fire({
        //     title: 'Game amount should be Greater then 50 and less then 10000',
        //     icon: 'warning',
        //     confirmButtonText: 'OK',
        //   });
        // } else if (res.data.msg === 'Set Battle in denomination of 50') {
        //   Swal.fire({
        //     title: 'Set Battle in denomination of 50',
        //     icon: 'warning',
        //     confirmButtonText: 'OK',
        //   });
        // } else if (res.data.msg === 'Technical Issue, Try after an hour!') {
        //   Swal.fire({
        //     title: 'Technical Issue, Try after an hour!',
        //     icon: 'warning',
        //     confirmButtonText: 'OK',
        //   });
        // } else {
        //   // Allgames();
        //   socket.emit('gameCreated');
        // }
      })
      .catch((e) => {
        if (e.response.status === 401) {
          localStorage.removeItem("token");
          localStorage.removeItem("token");
          window.location.reload();
          setTimeout(() => {
            //  history.push("/login")
          }, 500);
        }
        if (e.response.status === 400 || e.response.status === 429) {
        //   Swal.fire({
        //     title: "Please refresh!",
        //     icon: "warning",
        //     confirmButtonText: "OK",
        //   });
        }
        console.log(e);
      });
  };
  return (
    <div>
      <h4 className="text-uppercase font-weight-bold my-3 text-light">
        Add New Admin
      </h4>

      <form
        id="add_admin_form text-white"
        action=""
        method="post"
        style={{ backgroundColor: "rgba(0, 27, 11, 0.734)" }}
      >
        {/* <div className="form-row">
                <div className="form-group col-md-4">
                    <label htmlFor="name">Name</label>
                    <input type="text" className="form-control" id="name" name="name" placeholder="Name" onChange={(e) => {
                        setName(e.target.value)
                    }} />
                </div>
                <div className="form-group col-md-4">
                    <label htmlFor="mobile">Mobile</label>
                    <input type="text" className="form-control form-control" maxLength={10} id="mobile" name="mobile" placeholder="MObile" onChange={(e) => setPhone(e.target.value)} />
                </div>
            </div> */}
        <div className="form-row">
          <div className="form-group col-md-4">
            <label htmlFor="type">Game Type</label>
            <select
              class="form-control"
              name="type"
              id=""
              onChange={(e) => setGameType(e.target.value)}
            >
              <option value="">Select Game Type</option>
              <option value="Ludo Classics">Ludo Classics</option>
              <option value="Ludo Popular">Ludo Popular</option>
            </select>
          </div>
          <div className="form-group col-md-4">
            <label htmlFor="challenge_amount">Game Amount</label>
            <input
              type="text"
              className="form-control"
              id="challenge_amount"
              name="password"
              placeholder="Enter challenge Amount"
              onChange={(e) => {
                setAmount(e.target.value);
              }}
            />
          </div>

          <div className="form-group col-md-8">
            <button
              type="submit"
              className="btn btn-success float-right"
              onClick={(e) => ChallengeCreate(e)}
            >
              Add Challange
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
