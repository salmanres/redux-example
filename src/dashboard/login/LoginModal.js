import React, { Fragment } from 'react'

function LoginModal() {
    return (
        <Fragment>
            <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">LOGIN HERE</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <input type='email' className='form-control mt-3' placeholder='enter email' />
                            <input type='password' className='form-control mt-3' placeholder='enter password' />
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-warning">LOGIN</button>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default LoginModal