import React from "react";
import logo from "/Users/jerrywinburn/workspace/serversidecapstone/ataglance/src/logo.png";
function Dashboard() {
  return (
    <div>
      <div className="flex justify-center pt-10">
        <img className="mask mask-squircle w-36 h-auto" src={logo} />
        {/* <img className='w-36 h-auto' src={logo} alt='logo' /> */}
      </div>
      <br></br>
      <div>
        <div class="card w-96 glass rounded-none">
          <div class="card-body">
            <h2 class="card-title">Life hack</h2>
            <p>How to park your car at your garage?</p>
            <div class="card-actions justify-end">
              <button class="btn btn-primary">Learn now!</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
