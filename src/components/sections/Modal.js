import React, { Component } from 'react';
import './Modal.css';

export default class Modal extends Component {
    render(){

        let modelStyle = {
            display: 'block',
            backgroungColor: 'rgba(0,0,0,0.8)',
            zIndex: 1000,
        };
       
        
        return (
            <>
             <div className="custom-overlay"></div>
            <div className="modal show fade " style={modelStyle}>
            <div className="modal-dialog modal-dialog-scrollable modal-lg">
                <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title">{this.props.title}</h5>
                    <button type="button" className="btn-close" onClick={this.props.hide}></button>
                </div>
                <div className="modal-body">
                    <img src={this.props.backgroundImage} className="img-fluid" alt={this.props.tag} />
                    <hr />
                    {`${this.props.description}`.split('\n').map((el) => {return (<p>{el}</p>)})}
                    <p>
                    </p>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Live Demo</button>
                    <button type="button" className="btn btn-primary">Github</button>
                </div>
                </div>
            </div>
            </div>
            {/* <div className="modal-backdrop show"></div> */}
            </>
         
        )
    }
}