import React, { Component } from 'react'
import error from '../error.svg'

export default class Default extends Component {
    render() {
        console.log(this.props);
        
        return (
            <div className="container pt-5">
                <div className="row my-5">
                    <div className="col-lg-6 col-10 mx-auto">
                        <img className="img-fluid" src={error}></img>
                    </div>
                    <div className="col-lg-4 col-10 mx-auto text-title text-center test-uppercase pt-5">
                        <h1 className="display-3 text-blue">Uh Oh!</h1>
                        <h1>Error 404</h1>
                        <h2>Page Not Found</h2>
                        <h3>The requested URL
                            <span className="text-danger">
                                {" "+this.props.location.pathname+" "}
                            </span>
                            was not found!
                        </h3>
                    </div>
                </div>
            </div>
        )
    }
}
