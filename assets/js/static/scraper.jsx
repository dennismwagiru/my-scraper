import React from 'react';
import {browserHistory} from "react-router";
import {ClipLoader} from "react-spinners";

export default class Scraper extends React.Component{
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    componentDidMount() {
    }

    handleNavigation = (e) => {
        e.preventDefault();
        browserHistory.push('/hhh')
    };

    handleSubmit(e) {
        e.preventDefault();
        console.log('submitted');
    }

    render() {
        var button = (
            <React.Fragment>
                <button className="btn btn-primary mb-3 float-left">
                    Fetch
                </button>
            </React.Fragment>
        );

        if (this.state.processing_form)
            button = (
                <ClipLoader color={'#cf2027'}/>
            );

        return (
            <div className='container-fluid'>
                <div className='card'>
                    <div className='header mt-md-1'>
                        <div className='container-fluid'>
                            <div className='header-body'>
                                <div className='row align-items-end'>
                                    <div className='col'>
                                        {/*<h6 className="header-pretitle">Product Listing</h6>*/}
                                        <h1 className='header-title'>My Web Scraper</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='card-body'>
                        <div className='row align-items-center'>
                            <div className='container-fluid'>
                                <form onSubmit={this.handleSubmit} >
                                    <div className='row'>
                                        <div className='col-6 form-group'>
                                            <label>URL</label>
                                            <input type='text' name='url' className='form-control '/>
                                        </div>
                                    </div>
                                    {button}
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}