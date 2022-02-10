import React from "react";
import ReactDOM from "react-dom";
import Faker from "faker/lib";
import CommentBox from "./CommentBox";
const App = () => {
    return(
       <>
       <CommentBox  name = "Bill Gates" college = "Stanford" dis = "Iam going to found a company"/>
       <CommentBox name = "Melinda Gates" college = "Oxford" dis = "Iam going to work in Bill Gate's company"/>
       </>
        
    )

}
ReactDOM.render(
    <App/>,
    document.getElementById("root")
)
