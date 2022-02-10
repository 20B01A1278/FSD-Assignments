import React from "react";
import ReactDOM from "react-dom";
import Faker from "faker";

function CommentBox(props){
    return(

        <div className="ui cards">
  <div className="card">
    <div className="content">
      <img className="right floated mini ui image" src={Faker.image.image()}/>
      <div className="header">
       {props.name}
      </div>
      <div className="meta">
        {props.college}
      </div>
      <div className="description">
        {props.dis}
      </div>
    </div>
    <div className="extra content">
      <div className="ui two buttons">
        <div className="ui basic green button">Approve</div>
        <div className="ui basic red button">Decline</div>
      </div>
    </div>
  </div>

  <div class="card">
    <div class="content">
      <img class="right floated mini ui image" src={Faker.image.image()}/>
      <div class="header">
        {props.name}
      </div>
      <div class="meta">
        {props.college}
      </div>
      <div class="description">
       {props.dis}
      </div>
    </div>
    <div class="extra content">
      <div class="ui two buttons">
        <div class="ui basic green button">Approve</div>
        <div class="ui basic red button">Decline</div>
      </div>
    </div>
  </div>
</div>

    )
}
export default CommentBox;